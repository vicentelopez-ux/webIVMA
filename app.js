require('dotenv').config();// Instalar dotenv con npm i dotenv

const express = require('express');
const path = require('path');

const app = express(); // App hereda todo lo que contenga express

const PORT = process.env.PORT;
console.log(PORT);

const DB_USER = process.env.DB_USER;
console.log(DB_USER);

// Instalar EJS con npm i ejs
// CONFIGURAR EJS
app.set('view engine', 'ejs');

// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS
app.get('/', (req, res) => {
  res.render('index'); // Carga la pagina /views/index.ejs
}); 

app.get('/servicios', (req, res) => {
  res.render('servicios');
}); 

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
}); 

app.get('/contacto', (req, res) => {
  res.render('contacto');
}); 

// Colocamos el app en el puerto 3000
// Este bloque de codigo siempre va al final del codigo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});