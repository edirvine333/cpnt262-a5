//  Routing module returning JSON data to fetch() request (client-side rendering)

const mongoose = require('../../../_connection.js')
const express = require('express')
const Guitar = require('../../../models/guitar.js')

const router = express.Router();

router.get('/api/v0/gallery', function (req, res) {
  Guitar.find(function (err, guitars){
    if (err) {
      res.status(404)
      res.sendFile(__dirname +'/public/404.html')
    }
    res.json(guitars)
  })
})

module.exports = router

//  ***************************************************  COMMENTS  ***********************************************************
//
//  Line 3:  Declares a variable called mongoose and loads the script to connect to the MongoDB Atlas database
//  Line 4:  Declares a variable called express and loads the Express npm package, giving us the Router() method
//  Line 5:  Declares a variable called Guitar and loads the model schema
//  Line 7:  Declares a variable called router and assigns it the express.Router() function, giving us the router.get function
//  Line 9 - 17:  Defines the JSON endpoint /api/v0/gallery, which is called by the fetch() function on the client-side
//                Uses the Guitar.find method, checks for errors and returns the guitars JSON object for client-side rendering
//  Line 19: Defines the script as a routing module with the name router
//
//  **************************************************************************************************************************
//  
//  Attribution
//  Sample Code
//  https://github.com/sait-wbdv/sample-code/blob/master/backend/mongoose/3-definitions-atlas/routes/api-v0.js

