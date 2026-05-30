const os = require('os');

// Monkey-patch hostname to avoid non-ASCII header errors on Windows hostnames
os.hostname = () => 'narsha-pc';

// Import and run Vercel CLI
try {
  const vercelBin = require.resolve('vercel/dist/index.js');
  require(vercelBin);
} catch (err) {
  console.error('Vercel CLI not found. Please install it first using: npm install vercel --no-save');
  process.exit(1);
}
