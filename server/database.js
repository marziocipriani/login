const mongoose = require('mongoose');




// DB
const mongoURI = "mongodb+srv://usuarioMaster:passwordSecreto@master.6ce6o.mongodb.net/dataQuianon?retryWrites=true&w=majority"


//mongoose.connect(process.env.MONGO_URL,
   mongoose.connect(mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('estoy connectado a QUIANON')
    });


// connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
