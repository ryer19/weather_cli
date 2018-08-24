const request = require('request');

// let getWeather = (latLng, callback) => {
//   let { latitude: lat, longitude: long } = latLng;
//   request({
//     url: `https://api.darksky.net/forecast/5990c60ad7727d5ce4b6daf30719ec23/${lat},${long}`,
//     json: true
//   }, (error, response, body) => {
//     if (error) {
//       callback('Unable to fetch weather')
//     }
//     if (!error && response.statusCode === 200) {
//       callback(undefined, {
//         temperature: body.currently.temperature,
//         apparentTemperature: body.currently.apparentTemperature
//       })
//     }
//   })
// }

let getWeather = (latLng) => {
  console.log(latLng)
  let { latitude: lat, longitude: long } = latLng;
  var options = {
    url: `https://api.darksky.net/forecast/5990c60ad7727d5ce4b6daf30719ec23/${lat},${long}`
  };
  console.log(options.url)
  // Return new promise 
  return new Promise(function (resolve, reject) {
    request(options, (err, resp, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    })
  })
}







//   return new Promise((resolve, reject)=>{
//     let weatherRequest = request({
//       url: `https://api.darksky.net/forecast/5990c60ad7727d5ce4b6daf30719ec23/${lat},${long}`,
//       json: true
//     })
//     resolve(weatherRequest)
//   })
//   let { latitude: lat, longitude: long } = latLng;
//   let weatherRequest = request({
//     url: `https://api.darksky.net/forecast/5990c60ad7727d5ce4b6daf30719ec23/${lat},${long}`,
//     json: true
//   })



//   , (error, response, body) => {
//     if (error) {
//       callback('Unable to fetch weather')
//     }
//     if (!error && response.statusCode === 200) {
//       callback(undefined, {
//         temperature: body.currently.temperature,
//         apparentTemperature: body.currently.apparentTemperature
//       })
//     }
//   })
// }
module.exports.getWeather = getWeather;