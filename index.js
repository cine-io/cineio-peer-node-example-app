var
  http = require("http")
  , fs = require("fs")
  , express = require("express")
  , express = require("express")
  , morgan = require('morgan')
  , CineIO = require('cine-io')
  , keys = require('./fetch_api_keys_from_environment')()
  // CINE IO API KEYS
  , publicKey = keys.publicKey
  , secretKey = keys.secretKey
  , client = CineIO.init({secretKey: secretKey})
  , app = express()
  , port, httpServer
;

app.use(morgan("dev"));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('', function(req, res) {
  var identity, options;

  if (!publicKey && !secretKey){
    return res.render('not_configured', {title: 'Not Configured'});
  }

  options = {
    title: 'Functionality Example',
    publicKey: publicKey,
    room: req.param('room'),
    call: req.param('call')
  };
  if (identity = req.param('identity')) {
    // NOTE: PROVIDING A SECURE IDENTITY VIA PARAMS IS ONLY FOR DEMONSTRATION PURPOSES
    // only provide secure identities via proper authentication to your system
    // (i.e. via your application's login)
    // then provide your user with a secure identity which is valid for only that user.
    options.identity = client.peer.generateIdentitySignature(identity);
  }

  if (options.room || options.identity) {
    res.render('index', options);
  } else {
    res.render('use_cases', options);
  }

});

app.use(express.static(__dirname + "/public"));

port = process.env.PORT || 9090;
httpServer = http.createServer(app);

httpServer.listen(port, function() {
  return console.log("HTTP server started at http://localhost:" + port);
});
