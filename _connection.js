//  Connects to the MongoDB Atlas database

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)

    //  Custom 500 Internal Server error page
    res.status(500)
    res.sendFile(__dirname +'/public/500.html')

  });
  
module.exports = mongoose;

//  *****************************************  COMMENTS  ***************************************************
// 
//  Line 3:  Loads the mongoose npm package
//  Line 4:  Loads the environment variable MONGODB_URL from the .env file
//  Line 6 - 20:  Magically connects to the db!!
//
//  Line 16 - 18:  Call for custom 500 error page
//
//  ********************************************************************************************************

//  Attribution
//  Sample Code - _connection.js
//  https://github.com/sait-wbdv/sample-code/blob/master/backend/mongoose/2-sample-import/_connection.js
