function foo () {
	function zip () {
		var quux = 0;
		bar = true;
	};
	var bar = 2;
	quux = 1;
	
	return zip;
};