var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(path.resolve(__dirname, 'public'))).listen(3000);