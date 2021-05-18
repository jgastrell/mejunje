// que va a imprimir?
// como lograr que imprima 1, 2, 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000 * i)
}