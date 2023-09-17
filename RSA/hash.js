const crypto = require('crypto');

function calculateSHA256Hash(message) {
  const hash = crypto.createHash('sha256');
  hash.update(message);
  return hash.digest('hex');
}

const message = 'hi,my name is abhishek.';
const hash = calculateSHA256Hash(message);

console.log('Original Message:', message);
console.log('SHA-256 Hash:', hash);
