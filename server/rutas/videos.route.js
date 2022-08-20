// videos.route.js

const express = require('express');
const videosRoutes = express.Router();

// Require Videos model in our routes module
let Videos = require('../modelos/videos.model');

// Defined store route
videosRoutes.route('/add').post(function (req, res) {
  let videos = new Videos(req.body);
  videos.save()
    .then(videos => {
      res.status(200).json({'videos': 'el videos ha sido agregado a la base de datos'});
    })
    .catch(err => {
      res.status(400).send("no se ha podido guardar en la database");
    });
});

// Defined get data(index or listing) route
videosRoutes.route('/').get(function (req, res) {
    Videos.find(function(err, videoses){
    if(err){
      console.log(err);
    }
    else {
      res.json(videoses);
    }
  });
});

// Defined edit route
videosRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Videos.findById(id, function (err, videos){
      res.json(videos);
        console.log("son videos" + videos)
  });
});

//  Defined update route
videosRoutes.route('/update/:id').post(function (req, res) {
    Videos.findById(req.params.id, function(err, videos) {
    if (!videos)
      res.status(404).send("informacion no enecontrada");
    else {
        videos.nombre = req.body.nombre;
        videos.cargo = req.body.cargo;
        videos.cedula = req.body.cedula;

        videos.save().then(videos => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("Imposible update la data base");
        });
    }
  });
});

// Defined delete | remove | destroy route
videosRoutes.route('/delete/:id').get(function (req, res) {
    Videos.findByIdAndRemove({_id: req.params.id}, function(err, videos){
        if(err) res.json(err);
        else res.json('Se ha eliminado de la base de datos');
    });
});

module.exports = videosRoutes;
