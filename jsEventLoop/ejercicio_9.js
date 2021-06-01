/*
Suppose we have some input data describing a
graph of relationships between parents and
children over multiple generations. The data
is formatted as a list of (parent, child)
pairs, where each individual is assigned a
unique integer identifier.
For example, in this diagram, 3 is a child of
1 and 2, and 5 is a child of 4:
1    2   4
 \  /   / \
   3   5   8
    \ / \   \
     6   7   10
Write a function that, for two given
individuals in our dataset, returns true if
and only if they share at least one ancestor.

Sample input and output:
hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false
*/

const parentChildPairs = [[1,3], [2,3], [3,6], [5,6], [5,7], [4,5], [4,8], [8,10]];

const obtenerPadres = (lista, persona) => lista.filter(([padre, hijo]) => hijo === persona).map(([padre, hijo])=> padre);

const obtenerTodosLosPadres = (lista, persona) => {
  let tienePadres = true;

  let padresABuscar = [persona];
  let padresEncontrados = [];

  /**
   *  metodos de arrays q mutan, otros q no mutan al array 
   *  [2,3,4].pop() -> 4   [2,3]  unshift 2 [3,4]  mismo arrat MUTAN push, pop, shift, splice
   *  [2,3,4].map ->  nuevo array [4,6,8] NO MUTAN map, filter, concat, reduce, slice
   * */
  while(tienePadres) {
    const padres = obtenerPadres(lista, padresABuscar.pop());
    padresEncontrados = padresEncontrados.concat(padres);
    padresABuscar = padresABuscar.concat(padres);
    if (padresABuscar.length === 0) tienePadres = false;
  }
  return padresEncontrados;
};

console.log(obtenerTodosLosPadres(parentChildPairs, 10))

const hasCommonAncestor = (lista, persona1, persona2) => {
  const padresPersona1 = obtenerTodosLosPadres(lista, persona1);
  const padresPersona2 = obtenerTodosLosPadres(lista, persona2);
  // comparar elementos de padresPersona1 y padresPersona2 a ver si tienen elementos en comun, si tienen elementos en comun tiene q devolver true, sino false
}

