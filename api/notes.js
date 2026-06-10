import { promises as fs } from 'fs';
import path from 'path';

// Vercel serverless function uses /tmp for ephemeral storage.
// For true persistence, set the env var JSONBLOB_URL to an external storage endpoint.
// If not set, data is stored in /tmp (survives warm invocations, lost on cold start).
const TMP_FILE = path.join('/tmp', 'grace_notes_data.json');
const EXTERNAL_URL = process.env.JSONBLOB_URL || null;

async function readData() {
  // Try external URL first (if configured)
  if (EXTERNAL_URL) {
    try {
      const res = await fetch(EXTERNAL_URL, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        const json = await res.json();
        // jsonblob.com wraps in { record: {...} } or returns directly
        return json.record ?? json;
      }
    } catch (e) {
      console.warn('External URL read failed, falling back to /tmp:', e.message);
    }
  }

  // Fallback: /tmp file
  try {
    const raw = await fs.readFile(TMP_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { notes: [] };
  }
}

async function writeData(data) {
  // Write to /tmp always (as cache)
  try {
    await fs.writeFile(TMP_FILE, JSON.stringify(data), 'utf-8');
  } catch (e) {
    console.warn('Failed to write to /tmp:', e.message);
  }

  // Also push to external URL if configured
  if (EXTERNAL_URL) {
    const res = await fetch(EXTERNAL_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      throw new Error(`External storage write failed: ${res.status}`);
    }
    const json = await res.json();
    return json.record ?? json;
  }

  return data;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const data = await readData();
      return res.status(200).json(data);

    } else if (req.method === 'PUT') {
      const body = req.body;
      if (!body || typeof body !== 'object') {
        return res.status(400).json({ error: 'Invalid request body' });
      }
      const result = await writeData(body);
      return res.status(200).json(result);

    } else {
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
