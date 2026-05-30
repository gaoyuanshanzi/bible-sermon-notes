export default async function handler(req, res) {
  const CLOUD_BIN_URL = 'https://jsonbin-zeta.vercel.app/api/bins/bIBmgonfy6';

  // Enable CORS headers for safety
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const response = await fetch(CLOUD_BIN_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch from cloud bin: ${response.status}`);
      }
      const data = await response.json();
      return res.status(200).json(data);
    } else if (req.method === 'PUT') {
      const response = await fetch(CLOUD_BIN_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
      if (!response.ok) {
        throw new Error(`Failed to update cloud bin: ${response.status}`);
      }
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Proxy Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
