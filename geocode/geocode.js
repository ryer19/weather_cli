const request = require('request');
const keys = require('./config/keys');

// function geocodeAddress(address, callback) {

<<<<<<< HEAD
<<<<<<< HEAD
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapQuestKey}&location=${address}`,
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect to Google Server')
    }  else if (response.statusMessage === 'OK'){
    let result = response.body.results[0].locations[0];
    if (result.adminArea5 !== ''){
      let { lat, lng: long } = result.latLng
      console.log(lat + ' ' + long)
      return { lat, long }
    }
    console.log('no match found')
    return 'no match found'

  }
  })
=======
=======
>>>>>>> d52d44b... switched from callback to promises for geocode api function
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
//         //console.log(lat + ' ' + long)
//         callback(null, { lat, long })
//       } else {
//         console.log('no match found')
//         return 'no match found'
//       }
//     }
//   })
// }

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapQuestKey}&location=${address}`,
      json: true
    }, (error, request, body) => {
      if (error) {
        reject('no match')
      }
      resolve({
        lat: request.body.results[0].locations[0].latLng.lat,
        long: request.body.results[0].locations[0].latLng.lng,
      })
    })
  }
  )
<<<<<<< HEAD
}

geocodeAddress('a').then((res) => {
  console.log(res)
}, (errorMessage) => {
  console.log(errorMessage)
>>>>>>> d52d44b... switched from callback to promises for geocode api function
}
=======
}

geocodeAddress('a').then((res) => {
  console.log(res)
}, (errorMessage) => {
  console.log(errorMessage)
}
>>>>>>> d52d44b... switched from callback to promises for geocode api function
)

module.exports.geocodeAddress = geocodeAddress
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> d52d44b... switched from callback to promises for geocode api function
=======

>>>>>>> d52d44b... switched from callback to promises for geocode api function
