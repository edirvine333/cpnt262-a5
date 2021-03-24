const mongoose = require('../_connection.js')
const express = require('express')
const Guitar = require('../models/guitar.js')

const router = express.Router()

// Sorts through the Guitar database for an id item that matches the id parameter in the URL
router.get('/images/:id', function (req, res) {
  Guitar.findOne({id: req.params.id}, function (err, item) {
  
  //  Error handling if .find comes back false (found no matching value)
    if (err || item == 0) {
     res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }

  //  Renders the page "single-item.ejs" and passes the variables
    res.render('pages/single-item.ejs', {
      pageTitle: 'CPNT262-A5 Single Image Page',
      guitar: item
    })
  })
})

module.exports = router


//  Attribution
//  Sample Code
//  https://github.com/sait-wbdv/in-class/blob/main/w10r/2-definitions-atlas/routes/api-v0.js

//  **********************************************  NOTES  **************************************************************
//
//  Logic Error:
//  Problem with item.id in .find() loop
//  item is returning null, and then trying to find a .id item of a null value
//  This leads me to believe that the .find is not reading my database correctly
//
//  *********************************************************************************************************************
