// como se imprime?
// como lograr q se imprima en el orden correcto?
console.log('first')
setTimeout(() => {
    console.log('second')
},0)
console.log('third')


// console.log('first')

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(console.log('second'))
//   },0)
// }).then(() => {
//   console.log('third')
// })



