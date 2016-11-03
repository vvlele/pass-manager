console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);
  console.log(account);
	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

 createAccount(
	 {
   	name: 'twitter',
   	username: 'someemail@facebook.com',
   	password: 'Password1234!',
  	city: 'Mumbai',
  	state: 'GJ'
	});
	createAccount(
	{
 	name: 'facebook',
 	username: 'someemail@facebook.com',
 	password: 'Password1234!',
	city: 'Pune',
	state: 'MH'
 }
 );

 var facebookAccount = getAccount('facebook');
 console.log(facebookAccount);

var twitterAccount = getAccount('twitter');
console.log(twitterAccount);
