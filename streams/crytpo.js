var crypto = require('crypto');

var stream = crypto.createDecipher('aes256', process.argv[2]);
stream.pipe(process.stdout);
//there's something off with the aes25

