var React = require('react');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res){
    var Page = require('../blocks/page-main/page-main');
    res.send(
        React.renderToString(
            <Page
                styles={['index.css']}
                scripts={['index.js']}
                pageComponent='/blocks/page-main/page-main.js' />
        )
    );
});

module.exports = app;
