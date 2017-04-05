const express = require('express');
const router = express.Router();
var keys = require('./../../secret.json')
console.log(keys);
'use strict';

const yelp = require('yelp-fusion');


/* GET api listing. */
router.get('/:zip', (req, res) => {
  // res.send(req.params.zip)
  yelp.accessToken(keys.clientId, keys.clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search({
      location: req.params.zip
    }).then(response => {
    res.send(response.jsonBody.businesses);
    });
  }).catch(e => {
    console.log(e);
  });
  // res.send('api works');
});

module.exports = router;
