const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Empleados

let Empleados = new Schema({
  
  nombre: {
    type: String
  },
  cargo: {
    type: String
  },
  cedula: {
    type: Number
  }
},{
    collection: 'empleados'
});

module.exports = mongoose.model('Empleados', Empleados);