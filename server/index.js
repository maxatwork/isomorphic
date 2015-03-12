var babel = require("babel");

require("babel/register");

var app = require('./app');

var PORT = 8000;

app.listen(PORT, function () {
    console.log('Server listens on port %s', PORT);
});
