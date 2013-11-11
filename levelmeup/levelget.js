var level = require('level');
var db = level(process.argv[2]);
var Q = require('q');

for (var i = 0; i < 100; i++) {
	var gibberish = "gibberish"+i;
	db.get(gibberish, function(err, value) {
		if(!err)
			{
				console.log("gibberish" + '=' + value);
				//got to save the results here
				//then re order those and print them out.
			}
	})
}

