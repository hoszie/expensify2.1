const promise = new Promise((resolve, reject)=> {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject('Something went wrong')
  }, 5000)
})

console.log('before');

promise.then((data) => {
  console.log('1',data)
}).catch((error) => {
  console.log('ya fucked up son', error)
})

/////////SAME THING//////////////
// promise.then((data) => {
//   console.log('1',data)
// }, (error) => {
//   console.log('ya fucked up son', error)
// })

console.log('after');