// indicar en cada caso que imprime el console.log, anotarlo, y luego verificar
// IMPORTANTE, justificar la respuesta

var obj = {
  m: function () {
      console.log(this.v) 
      return 1; 
  },
  v: 1
}
var j = obj.m;
j();
console.log(obj.m());