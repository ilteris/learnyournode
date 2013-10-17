var fs = require('fs');
module.exports  = function (dirname, filter, callback) {
	var regex = new RegExp('\\.' + filter + '$');
	fs.readdir(dirname, function(err, list){
		if (err)
			return callback(err);
		var myArr = new Array();
		list.forEach(function (file) {
			if (regex.test(file)) {
					myArr.push(file);
			}
		})

		return callback(err, myArr);
	})
}
