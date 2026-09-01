const express = require('express');

const app = express(); // App hereda todo lo que contenga express

const PORT = 3000;

// RUTAS

app.get('/', (req, res) => {
  res.send('<h1>INDEX</h1>');
}); 

app.get('/servicios', (req, res) => {
  res.send('<h1>SERVICIOS</h1>');
}); 

app.get('/nosotros', (req, res) => {
  res.send('<h1>NOSOTROS</h1>');
}); 

app.get('/contacto', (req, res) => {
  res.send('<h1>CONTACTO</h1>');
}); 

// Colocamos el app en el puerto 3000
// Este bloque de codigo siempre va al final del codigo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
});