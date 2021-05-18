// que va a imprimir?
// como lograr que imprima 1, 2, 3
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 1000 * i)
// }

for (var i = 1; i <= 3; i++) (function(i) {
  setTimeout(function() {
      console.log(i)
  }, 1000);
})(i);





