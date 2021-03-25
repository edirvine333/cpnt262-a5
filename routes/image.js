//  *****  Routing module for single image display  *****

const mongoose = require('../_connection.js')
const express = require('express')
const Guitar = require('../models/guitar.js')

const router = express.Router()

router.get('/images/:id', function (req, res) {
  Guitar.findOne({id: req.params.id}, function (err, item) {
  
    if (err || !item) {
     res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }

    res.render('pages/single-item.ejs', {
      pageTitle: 'CPNT262-A5 Single Image Page',
      guitar: item
    })
  })
})

module.exports = router

//  ********************************************  COMMENTS  *********************************************************************
//
//  Line 3:  Declare the variable mongoose and loads the _connection module, which connects to MongoDB Atlas database
//  Line 4:  Loads the express npm package
//  Line 5:  Declares the variable Guitar and loads the database guitars using the schema defined in the models directory
//  Line 7:  Declares the router variable, and assigns it the function express.router, giving use the router.get function
//  Line 9 - 10:   Route handler for the single image display. Sorts through the Guitar database by comparing the id value 
//                 to the id value given in the parameters
//  Line 12 - 14:  Error handling for errors from the .findOne method or a false return when the id's don't match
//  Line 17 - 19:  Renders the single image display page and passes the variables pageTtle and guitar, which is the object 
//                 returned by the findOne.  This object is used by the template to generate the single image (server-side render)
//  Line 24: Defines the script as a module with the name router
//
//  ******************************************************************************************************************************
