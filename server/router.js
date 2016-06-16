const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const path = require('path');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

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
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../index.html'));
  });
}