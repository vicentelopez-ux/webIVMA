//  Para encontrar librerias entra a https://www.npmjs.com/
import express from 'express'

const app = express()

app.get('/', (req, res) => { // Un solo slash es la pagina principal de la web
  res.send('Hello World !!!! @@@@@@')
})

app.get('/contacto', (req, res) => { // Esto se llaman rutas
    res.send('Pagina de contacto!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})