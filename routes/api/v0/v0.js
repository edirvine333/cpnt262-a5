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

//  Attribution
//  Sample Code
//  https://github.com/sait-wbdv/sample-code/blob/master/backend/mongoose/3-definitions-atlas/routes/api-v0.js

