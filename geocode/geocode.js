const request = require('request');
const keys = require('../config/keys');

// function geocodeAddress(address, callback) {
//   request({
//     url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapQuestKey}&location=${address}`,
//     json: true
//   }, (error, response, body) => {
//     if (error) {
//       callback('Unable to connect to Google Server')
//     } else if (response.statusMessage === 'OK') {
//       let result = response.body.results[0].locations[0];
//       if (result.adminArea5 !== '') {
//         let { lat, lng: long } = result.latLng
//         console.log(lat + ' ' + long)
//         return { lat, long }
//       }
//       console.log('no match found')
//       return 'no match found'

//     }
//   })


// var geocodeAddress = (address) => {
//   return new Promise((resolve, reject) => {
//     request({
//       url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapQuestKey}&location=${address}`,
//       json: true
//     }, (error, request, body) => {
//       if (error) {
//         reject('no match')
//       }
//       resolve({
//         lat: request.body.results[0].locations[0].latLng.lat,
//         long: request.body.results[0].locations[0].latLng.lng,
//       })
//     })
//   })

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapQuestKey}&location=${address}`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(response.body.results[0].locations[0].latLng.lat))
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        latitude: response.body.results[0].locations[0].latLng.lat,
        longitude: response.body.results[0].locations[0].latLng.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
