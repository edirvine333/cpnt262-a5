const mongoose = require('../_connection.js')
const express = require('express')
const Guitar = require('../models/guitar.js')

const router = express.Router();

// Uneccessary route
// router.get('/images', function (req, res) {
//   res.render('pages/single-item.ejs', {pageTitle: "CPNT262-A5 Single Image Page"})
// })

//  Problem with this block of code
router.get('/images/:id', function (req, res) {
  const guitar = Guitar.find(function (item) {
     return item.id === req.params.id  //  Problem with .id
  })
  
  //  Error handling if .find comes back false (found no matching value)
  if (!guitar) {
    res.status(404)
    res.sendFile(__dirname +'/public/404.html')
  }

  //  Renders the page "single-item.ejs" and passes the variables pageTitle and guitars
  res.render('pages/single-item.ejs', {
    pageTitle: 'CPNT262-A5 Single Image Page',
    guitarItems: guitar
  })

})

module.exports = router

//  Attribution
//  Sample Code
//  https://github.com/sait-wbdv/sample-code/blob/master/backend/express/route-params/_finished/routes/index.js

