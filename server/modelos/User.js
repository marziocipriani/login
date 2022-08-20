const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

//const { Schema } = mongoose;

const Schema = mongoose.Schema;

// Crea Schema
const UserSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


UserSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Esto era antes?
//module.exports = mongoose.model('user', userSchema);


module.exports = User = mongoose.model("users", UserSchema);




