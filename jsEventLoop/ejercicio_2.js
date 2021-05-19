// que va a imprimir?
// como lograr que imprima 1, 2, 3
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i)
//   }, 1000 * i)
// }

const function1 = () => {
  const a = 2;
  console.log(a)
};

const function2 = () => {
  function1();
  const b =3;
  console.log(b)
}

const function3 = () => {
  function2();
}

function3();


