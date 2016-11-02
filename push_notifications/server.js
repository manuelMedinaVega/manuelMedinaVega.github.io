// Use the web-push library to hide the implementation details of the communication
// between the application server and the push service.
// For details, see https://tools.ietf.org/html/draft-ietf-webpush-protocol and
// https://tools.ietf.org/html/draft-ietf-webpush-encryption.

var express = require('express');
var app = express();
var webPush = require('web-push');
var bodyParser = require('body-parser')

webPush.setGCMAPIKey(process.env.GCM_API_KEY);

app.set('port', 5000);
app.use(express.static(__dirname + '/'));

app.use(bodyParser.json())

webPush.setGCMAPIKey(process.env.GCM_API_KEY);

app.post('/register', function(req, res) {
  // A real world application would store the subscription info.
  res.sendStatus(201);
});

app.post('/sendNotification', function(req, res) {

webPush.sendNotification(req.body.endpoint, {
  TTL: 4000,
  payload: JSON.stringify({
    'title': req.body.title,
    'icon': req.body.icon,
    'body': req.body.body,
    url: req.body.link
  }),
  userPublicKey: req.body.key,
  userAuth: req.body.authSecret,
})

ndStatus(201);
}, function(err) {
console.log(err);
});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


.then(function() {
res.sendStatus(201);
}, function(err) {
console.log(err);
});
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});