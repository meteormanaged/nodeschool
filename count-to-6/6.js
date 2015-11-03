module.exports = (...args) => {
	var sum = args.reduce( (p,c) => p + c, 0)
	return sum/args.length;
};