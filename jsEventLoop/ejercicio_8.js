// indicar en cada caso que imprime el console.log, anotarlo, y luego verificar
// IMPORTANTE, justificar la respuesta

var array = ['juan','martin','sol','rosa']; 
var array2 = ['juan','martin','sol','rosa']; 

var copy = array;

array[2] = 'maria';

console.log(copy == array);  // True Toma la referencia de la variable(la direccion)
console.log(copy === array); // True Toma la referencia de la variable(la direccion)


console.log('asdas' + 2 + 1); //asdas21 
console.log('asdas' + 3 + 'asdasd'); //asdas3asdasd

console.log('2' * 4); //8

console.log(array2 == array); // false Toma la referencia de la variable(la direccion)
console.log(array2 === array);// false Y no son iguales