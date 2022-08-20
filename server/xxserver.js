const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// insertadas
const path = require('path');
const engine = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, '../cliente/views'));
//  en public colocamos los css
app.use( '/static',express.static( __dirname+'/public'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  console.log(app.locals)
  next();
});


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

// Starting the server
app.listen(app.get('port'), () => {
  console.log('servidor corriendo en el puerto ', app.get('port'));
});