// console.log('start')
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('hey, it worked')
//     reject('hey, it failed')
//   }, 3000)
// })
// console.log('between')
// somePromise.then((message) => {
//   console.log(message)
// }, (errorMessage) => {
//   console.log(errorMessage)
// }
// )
// console.log('end')

function asynchronousAdd(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('cannot add non - number');
      }
    }, 1500)
  })
}

asynchronousAdd(3, 'a').then(res => {
  return asynchronousAdd(res, 100);
}).then(res => {
  console.log(res)
}).catch(errorMessage =>
  console.log(errorMessage)
)

