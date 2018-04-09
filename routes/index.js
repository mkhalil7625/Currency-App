var express = require('express');
var router = express.Router();
// require or connect the newly created model
var exchangeRates=require('../model/currencyDB');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* GET /convert page*/
router.get('/convert', function (req, res, next) {
   // var query=req.query;
    //get the url query String as an object(What does it mean? if input 9 dollars to EUR,
    // query ={"dollars":"9","to_currency":"EUR"})
    //dollars and to_currency are IDs for inputs in the form
    //logic
    //how many dollars to convert
    var dollars=req.query.dollars;
    //convert to?
    var toCurrency=req.query.to_currency;
    // exchange rate
    console.log(exchangeRates);
    var converted = dollars*exchangeRates[toCurrency];
    //response page'/convert
    //res.send sends a plain text response, useful for debugging
   // res.send(dollars+' in '+toCurrency+' is '+converted);
    res.render('results', {
      //update dollars place holder in the template with the variable dollars
      dollars:dollars,
        toCurrency:toCurrency,
        converted:converted
    })
});
// GET About page
router.get('/about', function (req, res, next) {
    res.render("about",{name:"Mo Khalil", description:"currency converter app"});
});
module.exports = router;
