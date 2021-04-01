//https://expressjs.com/en/resources/middleware/cors.html
//npm i express-es6-template-engine
////npm i cors
//=========================================================================================================NOTES
const express = require('express'),
  es6Renderer = require('express-es6-template-engine'),
  app = express();
const cors = require('cors')

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
//=========================================================================================================ENGINE
var allowlist = ['http://localhost:7949']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  }
  else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}
//=========================================================================================================HEADER

//index
app.get('/', cors(corsOptionsDelegate), function (req, res, next) {
  res.render('index', { locals: { title: "Wedshine - Hasslefree solution to organise your events" } });
})

//search result venues
app.get('/search/venue', cors(corsOptionsDelegate), function (req, res, next) {
  res.render('search/venue', { locals: { title: "Wedshine - Search Result" } });
})

//search result venue details
app.get('/search/venue/details/:hotel', cors(corsOptionsDelegate), function (req, res, next) {
  const venuename = req.params.hotel;
  const venueaddress = 'Park Street, Kolkata, West Bengal, 700017'

  if (venuename == 'hotel royal garden') {
    res.render('search/venue/details', { locals: { title: "Wedshine - Venue Details", hotelname: venuename, hoteladdress: venueaddress } });
  }
  else {
    res.render('search/venue/details', { locals: { title: "no venue found" } });
  }
})

//search result florist
app.get('/search/florist', cors(corsOptionsDelegate), function (req, res, next) {
  res.render('search/florist', { locals: { title: "Wedshine - Search Result" } });
})


app.get('/test', (req, res, next) => {
  res.json('hello')
})


//register app https://developers.facebook.com/apps/351116142676913/dashboard/?business_id=408806536757493
// var request = require('request');
// var options = {
//   'method': 'GET',
//   'url': 'https://graph.facebook.com/v8.0/664909310807971/leads/?access_token=EAAEZCVpj1i7EBADvzV78Aq01DkwNyyjk6SGQa2AlpB4ZClXDRlyD7G3wkzzZATvb6eHk30k9vvkjzg3ZAF3VzF8ZC7v584zopGzQ1HtRuDr2R8xkHtLfA3RniG9Ht69wRumqs2SOeEUNoyXQHaA0bZAwdp2QcFZAhi3L7IhtkYxWtZAEA99r54I0nVp59dmZAxLkZD'
// };
// request(options, function (error, response) {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     // res.end(response.body);
//     console.log(response.body)
//   }
// });
// $.get('/fbleads', function (response) {
//   var body = JSON.parse(response);
//   var totalLeads = body.data.length;

//   //disconnecting will continue in next vide as time is going to up
// })

module.exports = app;