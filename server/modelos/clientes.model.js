const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Clientes
let Clientes = new Schema({
  
  nombre: {
    type: String
  },
  empresa: {
    type: String
  },
  telefono: {
    type: Number
  }
},{
    collection: 'clientes'
});

module.exports = mongoose.model('Clientes', Clientes);