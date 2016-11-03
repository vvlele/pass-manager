var argv = require('yargs').argv;

var command = argv._[0];

if(argv._[0]=='hello' && typeof argv.fn !=='undefined' && typeof argv.ln !=='undefined')
{
  console.log('Hello' + argv.fn + argv.ln);
}
if(argv._[0]=='hello' && typeof argv.fn !=='undefined')
{
  console.log('Hello' + argv.fn);
}
else if(command === 'hello'){
  console.log('Hello world!'  + argv.fn);
}
