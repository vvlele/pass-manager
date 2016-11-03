console.log('Starting password manager')

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{
username:'Vivek',
balance: 100
},
{
username:'Girish',
balance: 200
}]);
var accounts1 = storage.getItemSync('accounts');

accounts1.push({username: 'Jigar', balance: 75});

storage.setItemSync('accounts',accounts1);

console.log(accounts1);

console.log('Finishing password manager')
