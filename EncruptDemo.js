var crypto = require('crypto-js');

var secretMessage = {
name:'Vivek',
secretName:'007'
};

var secretKey = '123xyz';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
console.log('Encrypted Message' + encryptedMessage);

//Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(bytes);
console.log(decryptMessage.secretName);
