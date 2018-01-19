'use strict';

const $ = require('jquery');
const apiKey = require('./apiKey');

module.exports.getWeather = () => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      //url: "http://api.wunderground.com/api/f6bc9b77517ca2f5/conditions/q/CA/San_Francisco.json"

      url:`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}`
    }).done( (data) => {
      console.log(data);
      
      resolve(data);
    }).fail( (error) => {
      console.log("Ya dun goofed", error);
      reject(error);
    });
  });
};

// module.exports.getWeatherByZip = () => {
//   return new Promise( (resolve, reject) => {
//     $.ajax({
//       url:`api.openweathermap.org/data/2.5/forecast/daily?zip=37217,us`
//     }).done( (data) => {
//       console.log(data);
      
//       resolve(data);
//     }).fail( (error) => {
//       console.log("Ya dun goofed", error);
//       reject(error);
//     });
//   });
// };



    