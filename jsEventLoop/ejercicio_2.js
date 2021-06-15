// que va a imprimir?
// como lograr que imprima 1, 2, 3
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 1000 * i)
// }

<<<<<<< HEAD
for (var i = 1; i <= 3; i++) (function(i) {
  setTimeout(function() {
      console.log(i)
  }, 1000);
})(i);





=======

// solucion #1
// IIFE immediately invoked function expression
// for (var i = 0; i < 3; i++) {
//   (function printTime(index) {
//     setTimeout(function() {
//       console.log(index)
//     }, 1000 * index)
//   })(i)
// }


// solucion #2
//using let keyword

// for (var i = 0; i < 3; i++) {
//   let k = i
//   setTimeout(function() {
//     console.log(k)
//   }, 1000 * k)
// }

// solucion #3
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000 * i)
}
>>>>>>> 99062efb6f79e1b465ed1a322129bbb065dd707c
