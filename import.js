//  *****  Script used to import the JSON data into MongoDB Atlas  *****

const mongoose = require('./_connection.js') 

const dbSeed = require(`./data/guitars.json`)

const Guitar = require(`./models/guitar.js`)

Guitar.insertMany(dbSeed, function(error, guitar) {
  console.log('Data import completed.')
  mongoose.connection.close()
})


//  ********************************************  COMMENTS  ******************************************************
//
//  Line 3:  Declares mongoose as a variable and loads the _connection module to connect to MongodB Atlas
//  Line 5:  Declares dbSeed as a variable and loads the JSON legacy data
//  Line 7:  Declares the variable Guitar and loads the model schema
//  Line 9 - 11: Magically imports the data and console.logs when complete!!
//
//  **************************************************************************************************************
