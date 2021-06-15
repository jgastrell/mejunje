/*
Escribir una funcion que convierta al nombre en iniciales
por ejemplo:
'jonathan gastrell' -> J.G.
'arturo gonzalez' -> A.G.
*/

const iniciales = (nombreCompleto) => {
  const arrayNombres = nombreCompleto.split(' ', 2);
  return `${arrayNombres[0][0].toUpperCase()}. ${arrayNombres[1][0].toUpperCase()}.`
}
const m = 'jonathan gastrell';
console.log(iniciales(m))