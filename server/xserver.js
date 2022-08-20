const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const actoresRoute = require('./rutas/actores.route');
const empleadosRoute = require('./rutas/empleados.route');
const videosRoute = require('./rutas/videos.route');
const clientesRoute = require('./rutas/clientes.route');

//+++++++++++++++++++++++++++++++++++++++++++++++
//Connect to DB
const mongoURI ='mongodb+srv://usuarioMaster:passwordSecreto@master.6ce6o.mongodb.net/dataQuianon?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true });     

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/actores', actoresRoute);
app.use('/empleados',empleadosRoute);
app.use('/videos', videosRoute);
app.use('/clientes', clientesRoute);

app.listen(PORT, function(){
  console.log('Servidor corriendo en el puerto:',PORT);
});