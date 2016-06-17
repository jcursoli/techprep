const path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
  app.get('/bundle.js', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../bundle.js'));
  });
  app.get('/style/style.css', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../style/style.css'));
  });
  app.get('/style/flexboxgrid.css', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../style/flexboxgrid.css'));
  });

  app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
}