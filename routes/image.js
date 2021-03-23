const mongoose = require('../_connection.js')
const express = require('express')
const Guitar = require('../models/guitar.js')

const router = express.Router()

//  Problem with this block of code
router.get('/images/:id', function (req, res) {
  const guitar = Guitar.find(function (item) {
    console.log(item)                   //  testing: logs "null"
    console.log(Guitar)                 //  testing: logs "Model { Guitar }"
    //  return item.id = req.params.id  //  crashes server TypeError: Cannot read property 'id' of null
    return item === req.params.id       //  See Notes 
  })
  
  //  Error handling if .find comes back false (found no matching value)
  if (!guitar) {
    res.status(404)
    res.sendFile(__dirname +'/public/404.html')
  }

  //  Renders the page "single-item.ejs" and passes the variables
  console.log(guitar.id)   //  testing:  logs "undefined"
  res.render('pages/single-item.ejs', {
    pageTitle: 'CPNT262-A5 Single Image Page',
    guitarTitle: guitar.title,
    guitarSRC: guitar.pathURL,
    guitarAlt: guitar.description
  })

 })

module.exports = router

//  Attribution
//  Sample Code
//  https://github.com/sait-wbdv/sample-code/blob/master/backend/express/route-params/_finished/routes/index.js

//  **********************************************  NOTES  **************************************************************
//
//  Logic Error:
//  Problem with item.id in .find() loop
//  item is returning null, and then trying to find a .id item of a null value
//  This leads me to believe that the .find is not reading my database data correctly
//
//  *********************************************************************************************************************
