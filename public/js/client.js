'use strict';  

const endpoint = '//localhost:3000/api/v0/gallery';     
// const endpoint = 'https://sait-wbdv-cpnt262-a4.herokuapp.com/api/v0/gallery'; 

fetch(endpoint)                           

  .then(function(response) {                             
    if(!response.ok) {                
      throw new Error('Not 200 OK');  
    } 
    return response.json();      
  })                                  

  .then(function(gallery) {   
    let figure = document.querySelector('figure'); 
    gallery.forEach(insert_img);    
    function insert_img(item, index) { 
      figure.innerHTML = figure.innerHTML + `<img src="${gallery[index].pathURL}" alt="${gallery[index].description}"></img><figcaption>${gallery[index].description}</figcaption>`;
    };    
  })

  .catch(function(error) {              
    console.log(error);
  });

// *****************************************************  COMMENTS  *******************************************************************
//
//  Line 1:  Since this code is running in the browser, implementing 'use strict'
//  Line 3:  Optional endpoint fot the fetch() function to serve gallery object from local host
//  Line 4:  Points the fetch() function to the Heroku app, which is where the gallery object is being retrieved from
//  Line 6:  Invokes the fetch() function, passing the argument "endpoint", which is the URL of the data being fetched
//  Line 8 - 13:    The first .then method, using a callback function, passing the argument "response"
//                  If the response is not ok, and error is thrown
//                  If the response is ok, then the json object that was retreved is passed to the next .then method
//  Line 15 - 21:   The second .then method, which uses the gallery object and a forEach() loop to build the innerHTML of the <figure>
//  Line 23 - 25:   The last method of the fetch() function, which catches any errors that filter through
//
//  ************************************************************************************************************************************
  
