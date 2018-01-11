var express = require('express');
var fetch = require('node-fetch');
var msf = require('../service/mostFreq');
var router = express.Router();

/*
  @direction:  bing and bong a number 
  */
router.post('/number', (req, res) => {

  let num = req.body;
  let isNumber = /[1-9]{1}/;

  if (!isNumber.test(num))
    return res.status(400).send({ error: 'You mast enter  a number ' });

  res.send({ num: num });
});



router.post('/fetch', (req, res) => {
  let largeWord = req.body;
  let url = 'http://terriblytinytales.com/test.txt';
  fetch(url)
    .then(res => res.text())
    .then((body) => {
      let mostcw = msf(body, largeWord);
      res.send(mostcw);
    })
    .catch(err => res.send({ error: err.message }));

});
module.exports = router;