// 1- crear un archivo .json con cualquier cosa, agregar al menos 5 keys
// 2- aca abajo importar el archivo usando node
// 3- usando node leer el archivo .json y guardo en otro archivo .txt en forma asyncrona y sincrona
const info = require('./persona.json');
const fs = require('fs');

// async
// const func = async () => {
//   let data = JSON.stringify(info);
//   try {
//     await fs.writeFile('persona.txt',data, (e) =>{ console.error(e)});
//     console.log('termino');
//   } catch (e) {
//     console.error(e);
//   }
// }
// func();


// sync
const func = async () => {
  let data = JSON.stringify(info);
  fs.writeFileSync('persona.txt',data);
  console.log('termino');
}
func();
