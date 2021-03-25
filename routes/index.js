//  Routing module for HTML endpoints used for server-side rendering

const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  res.render('pages/index.ejs', {pageTitle: "CPNT262-A5 Home Page"}) 
})

router.get('/login', function (req, res) {
  res.render('pages/login.ejs', {pageTitle: "CPNT262-A5 Login Page"})
})

router.get('/register', function (req, res) {
  res.render('pages/register.ejs', {pageTitle: "CPNT262-A5 Registration Page"})
})

module.exports = router



//  ***************************************************** COMMENTS  *******************************************************************
//
//  Line 3:  Declares the variable "express" and loads the Express npm package
//  Line 5:  Declares the variable "router" and assigns it to the express.Router() method, providing us with router.get
//  Line 7:  Invokes the router.get function, which describes what to do when the home page is requested
//  Line 8:  Renders the home page (server-side) and responds with the rendered page when the route is requested
//  Line 11:  Invokes the router.get function, which describes what to do when the login page is requested
//  Line 12: Renders the index page (server-side) and responds with the rendered page when the route is requested
//  Line 15:  Invokes the router.get function, whcih describes what to do when the registration page is requested
//  Line 16: Renders the registration page (server-side), and responds with the rendered page when the route is requested
//  Line 19: Prepares the code to be loaded as a module in other script
//
//  ***********************************************************************************************************************************