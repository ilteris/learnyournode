var level = require('level');
var db = level(process.argv[2]);

db.put('foo', 'bar', function(err) {
    if(err)
        return console.error('Error in put():', err);
    console.error('put foo = bar');
})
