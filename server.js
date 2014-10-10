var connect = require('connect')
  , http = require('http')
  , app;

app = connect()
  .use(connect.static('app'))
  .use('/bower', connect.static('bower_components'))
  .use('/css', connect.static('app/css'))
  .use('/img', connect.static('app/img'))
  .use('/font', connect.static('app/font'))
  ;

http.createServer(app).listen(8080, function() {
  console.log('Running on http://localhost:8080');
});