var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var FormData = require('form-data');
var fetch = require('node-fetch');

var { URLSearchParams } = require('url');

var github = require('../config/github');

var jsonParser = bodyParser.json();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.data);
});

router.post('/', jsonParser, function(req, res, next) {
  var code = req.body.code;
  var platform = req.body.platform;
  switch (platform) {
    case 'github':
      getGithubToken({ code })
        .then(function(token) {
          res.status(200).json({ token });
        })
        .catch(function(error) {
          console.log("error occured");
          console.error(error);
          res.status(500);
        });   
      break;
    default:
      break;
  }
});

function getGithubToken({ code }) {
  var data = new FormData()
  data.append('client_id', github.clientId)
  data.append('client_secret', github.clientSecret)
  data.append('code', code)

  return fetch(`https://github.com/login/oauth/access_token`, {
    method: 'POST',
    body: data
  })
  .then((response) => {
    return response.text()
  })
  .then((paramsString) => {
    var params = new URLSearchParams(paramsString)
    return params.get('access_token');
  })
}

module.exports = router;
