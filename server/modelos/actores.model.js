const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Actores
let Actores = new Schema({
  nombre: {
    type: String
  },
  apellido: {
    type: String
  },
  correo: {
    type: String
  },
  cedula: {
    type: Number
  },

},{
    collection: 'actores'
});

module.exports = mongoose.model('Actores', Actores);