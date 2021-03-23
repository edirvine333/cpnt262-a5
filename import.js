const mongoose = require('./_connection.js') 

// Import seed data
const dbSeed = require(`./data/guitars.json`)

// Define model
const Guitar = require(`./models/guitar.js`)

Guitar.insertMany(dbSeed, function(error, guitar) {
  console.log('Data import completed.')
  mongoose.connection.close()
})

//  Attribution
//  Sample Code : import.js
//  https://github.com/sait-wbdv/sample-code/blob/master/backend/mongoose/2-sample-import/import.js
