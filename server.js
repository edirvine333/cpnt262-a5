//  Load builtin modules
const path = require('path')

//  Load npm modules
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

//  Load custom modules
//  const route_one = require('./routes/api/v0.js')  old route from Assignment 4
const route_three = require('./routes/api/v0/v0.js')
const route_two = require('./routes/index.js')
const route_four = require('./routes/image.js')

//  Assign the express() function
const app = express()

//  Set the view engine to 'ejs"
app.set('view engine', 'ejs');

//  *************************************  MIDDLEWARE  ******************************************

//  must be invoked in order to pull data from Heroku 
app.use(cors())

//  Sets the global template variables
app.use( function (req, res, next) {
  res.locals = {
    siteHeading: "CPNT262 - ASSIGNMENT 5",
    subHeading: "JSON Routes with Heroku and MongoDB Atlas",
    copyright: "Ed Irvine"
  }
  next()
})

//  Static page handler
app.use(express.static(path.join(__dirname, 'public')))

//  Route handlers
//  app.use('/', route_one)  old route from Assignment 4
app.use('/', route_two)
app.use('/', route_three)
app.use('/', route_four)

//  Error handler
app.use(function (req, res) {
  res.status(404)
  res.sendFile(__dirname +'/public/404.html')
})

//  ********************************************************************************************

const port = process.env.PORT || 3000

//  Listening block
app.listen(port, function () {
  console.log(`Listening on port: ${port}`)
})



