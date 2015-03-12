var babel = require("babel");

require('node-jsx').install({
    extension: '.js',
    additionalTransform: function(src) {
        return babel.transform(src).code;
    }
});

var app = require('./app');

var PORT = 8000;

app.listen(PORT, function () {
    console.log('Server listens on port %s', PORT);
});
