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
  });
  
module.exports = mongoose;

//  Attribution
//  Sample Code - _connection.js
//  https://github.com/sait-wbdv/sample-code/blob/master/backend/mongoose/2-sample-import/_connection.js
