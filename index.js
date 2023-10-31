// Incluimos el modulo de express
const express = require('express');

// Incluimos el modulo de path
const path = require('path');

// Creamos la aplicación de express con la función express()
const app = express();

// Establecemos un puerto en el cual nuestro servidor estará escuchando
const port = 3000;


app.get('/', (req, res) => {
  res.send('conociendo NodeJS');
});

app.use('/public', express.static(path.join(__dirname, 'public')));


// Indicamos donde se encuentran los archivos en el directorio public
//app.use(express.static(path.join(__dirname, 'public')));


// Indicamos que serviremos el archivo index.html cuando accedamos a esta ruta
//app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname, 'public', 'index.html'));
//  });

// Nuestra aplicación estará escuchando en el puerto que definimos previamente
app.listen(port, () => {
  console.log(`Se esta ejecutando sobre el puerto ${port}`)
});



