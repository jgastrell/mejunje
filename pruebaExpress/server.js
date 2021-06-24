const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const validateToken = (req, res, next) => {
  if (req.body.token === 'token123') next();
  res.sendStatus(401);
}

app.post('/login', (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  // const user = sequelize.get(user, password);
  // if (user) {
  //   const token = generarToken(user)
  //   res.send(token)
  // } else {
  //   res.send('error')
  // }
  const token = 'token123';
  res.send(token);
})

app.get('/', validateToken, (req, res) => {
  res.send('Hello World !')
})

app.get('/data', validateToken, (req, res) => {
  res.send('Hello World !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// MVC model view controller
//curl 
//swagger
//postman

// script SQL p/ crear tabla usuarios
// user, pass, id, timestamp


// orm mapea tablas a objetos
// tabla users => objeto user
// sequelize.get('User', id) => objeto { user: '1223', pass: ... }
// CRUD create read update delete

// conectar sequelize y a mysql
// conectores 1 o muchos, 1 solo mysql
// modelos
// metodos/funciones get, update

// mocha, jest
