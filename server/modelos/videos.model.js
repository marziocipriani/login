const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for videos

let Videos = new Schema({
  
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
    collection: 'videos'
});

module.exports = mongoose.model('Videos', Videos);