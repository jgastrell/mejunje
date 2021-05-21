// 1- crear un archivo .json con cualquier cosa, agregar al menos 5 keys
// 2- aca abajo importar el archivo usando node
// 3- usando node leer el archivo .json y guardo en otro archivo .txt en forma asyncrona y sincrona

const fs = require('fs');

let data = fs.readFileSync('productos.json');
let productos = JSON.parse(data);
console.log(productos);


const fs1 = require('fs');

fs1.readFile('productos.json', (error, data) => {
    if (error) throw error;
    let productos = JSON.parse(data);
    console.log(productos);
});

console.log('Continua');

const fs2 = require('fs');

let producto1 = { 
    producto : "Zapatillas",
    marca : "Nike",
    precio : 700,
    disponible : true,
    modelo : 2021 
};

let data1 = JSON.stringify(producto1, null, 2);
fs2.writeFileSync('producto1.json', data1);

