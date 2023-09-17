const elliptic = require('elliptic');
const ec = new elliptic.ec('secp256k1');

// Generate ECC key pair
const keyPair = ec.genKeyPair();

const privateKey = keyPair.getPrivate();
const publicKey = keyPair.getPublic();

const message = Buffer.from("hi,csed");

// Sign the message
const signature = ec.sign(message, privateKey);
console.log("Signature:", signature.toDER('hex'));

// Verify the signature
const isValid = ec.verify(message, signature, publicKey);
if (isValid) {
  console.log(" valid Signature ");
} else {
  console.log("not Signature valid");
}


