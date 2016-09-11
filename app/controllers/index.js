var express       = require('express'),
		router        = express.Router(),

    IndexData     = require('../models/index.data.js');

module.exports = function(app) {

    app.use('/', router);

    router.get('/', function(req, res) {
        var data = new IndexData();
        res.render('index', {
            title: data.title,
            url: data.url
        });
    });

};
