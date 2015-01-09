// app/routes.js
module.exports = function(app) {

  // Frontend routes ===========================================

    // home page
    app.get('/', function(req, res) {
      res.sendfile('./app/views/index.html');
    });

    // error page
    app.get('/error', function(req, res) {
      res.sendfile('./app/views/index.html');
    });

};
