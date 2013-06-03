var Clone = {
	clone: function(obj) {
		var result = {};
		for (var key in obj) {
			result[key] = obj[key];
		}
		return result;
	}
};