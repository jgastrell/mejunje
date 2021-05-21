// crear la funcion factorial
//por ejemplo factorial(2) -> devuelve 2
//por ejemplo factorial(3) -> devuelve 6
//por ejemplo factorial(4) -> devuelve 24
// pista: necesitas usar recursion

function recursion(n) {
    if (n === 0) {
        return 1;
    } else {
        return recursion(n - 1) * n;
    }
}


console.log(recursion(2));
console.log(recursion(3));
console.log(recursion(4));
