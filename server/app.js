var React = require('react');
var express = require('express');
var path = require('path');

require('node-jsx').install();

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res){
    var page = require('../blocks/page-main/page-main.jsx');
    res.send(React.renderToString(page({
        styles: ['index.css'],
        scripts: [
            'index.js'
        ],
        pageComponent: '/blocks/page-main/page-main.jsx'
    })));
});

module.exports = app;
