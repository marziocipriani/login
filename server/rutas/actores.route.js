// actores.route.js

const express = require('express');
const actoresRoutes = express.Router();

// Require actores model in our routes module
let Actores = require('../modelos/actores.model');

// Defined store route
actoresRoutes.route('/add').post(function (req, res) {
  let actores = new Actores(req.body);
  actores.save()
    .then(actores => {
      res.status(200).json({'actores': 'el Actor ha sido agregado correctamente'});
    })
    .catch(err => {
      res.status(400).send("Imposible guardar en la base de datos");
    });
});

// Defined get data(index or listing) route
actoresRoutes.route('/').get(function (req, res) {
    Actores.find(function(err, actoreses){
    if(err){
      console.log(err);
    }
    else {
      res.json(actoreses);
    }
  });
});

// Defined edit route
actoresRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Actores.findById(id, function (err, actores){
      res.json(actores);
       console.log("son actores" + actores)
  });
});

//  Defined update route
actoresRoutes.route('/update/:id').post(function (req, res) {
    Actores.findById(req.params.id, function(err, actores) {
    if (!actores)
      res.status(404).send("informacion no encontrada");
    else {
        actores.nombre = req.body.nombre;
        actores.apellido = req.body.apellido;
        actores.correo = req.body.correo;
        actores.cedula = req.body.cedula;

        actores.save().then(actores => {
          res.json('Actualizacion completa');
        })
        .catch(err => {
          res.status(400).send("Imposible update la base de datos");
        });
    }
  });
});

// Defined delete | remove | destroy route
actoresRoutes.route('/delete/:id').get(function (req, res) {
    Actores.findByIdAndRemove({_id: req.params.id}, function(err, actores){
        if(err) res.json(err);
        else res.json('Se ha eliminado de la base de datos');
    });
});

module.exports = actoresRoutes;
