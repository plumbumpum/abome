var connect = require('connect')
  , http = require('http')
  , app;

app = connect()
  .use(connect.static('app'))
  .use('/bower', connect.static('bower_components'))
  .use('/css', connect.static('public/css'))
  .use('/img', connect.static('public/img'))
  .use('/fonts', connect.static('public/fonts'))
  ;

http.createServer(app).listen(8080, function() {
  console.log('Running on http://localhost:8080');
});