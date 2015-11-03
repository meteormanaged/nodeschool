var inputs = process.argv.slice(2);
var result = inputs.map( x => x.substring(0,1) )
	.reduce( (p, c, i, a) => p + c );

console.log(`[${inputs}] becomes \"${result}\"`);