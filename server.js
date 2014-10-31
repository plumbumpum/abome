var express = require('express'),
    path = require('path'),
    app;

app = express()
    .use(require('connect-livereload')({port: 4002}))
    .use(express.static('app'))
    .use('/bower', express.static('bower_components'))
    .use('/bower', express.static('node_modules'))
    .use('/css', express.static('public/css'))
    .use('/img', express.static('public/img'))
    .use('/fonts', express.static('public/fonts'))
    ;

app.get('/:example', function(req, res){
    res.sendfile(path.join(__dirname, 'app/index.html'));
});

app.listen(8080, function () {
    console.log('server running on port: 8080');
});