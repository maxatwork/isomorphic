'use strict';

var React = require('react');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res){
    res.send(renderPage('../bundles/index/index', {
        filters: {
            foo: req.query.foo || '',
            bar: req.query.bar || ''
        }
    }));
});

module.exports = app;

function renderPage(pageComponent, initialState) {
    var Page = require(pageComponent);
    return React.renderToString(<Page initialState={initialState} />);
}
