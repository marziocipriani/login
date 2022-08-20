// empleados.route.js

const express = require('express');
const empleadosRoutes = express.Router();

// Require Empleados model in our routes module
let Empleados = require('../modelos/empleados.model');

// Defined store route
empleadosRoutes.route('/add').post(function (req, res) {
  let empleados = new Empleados(req.body);
  empleados.save()
    .then(empleados => {
      res.status(200).json({'empleados': 'el empleado ha sido agregado a la base de datos'});
    })
    .catch(err => {
      res.status(400).send("no se ha podido guardar en la database");
    });
});

// Defined get data(index or listing) route
empleadosRoutes.route('/').get(function (req, res) {
    Empleados.find(function(err, empleadoses){
    if(err){
      console.log(err);
    }
    else {
      res.json(empleadoses);
    }
  });
});

// Defined edit route
empleadosRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Empleados.findById(id, function (err, empleados){
      res.json(empleados);
        console.log("son empleados" + empleados)
  });
});

//  Defined update route
empleadosRoutes.route('/update/:id').post(function (req, res) {
    Empleados.findById(req.params.id, function(err, empleados) {
    if (!empleados)
      res.status(404).send("informacion no enecontrada");
    else {
        empleados.nombre = req.body.nombre;
        empleados.cargo = req.body.cargo;
        empleados.cedula = req.body.cedula;

        empleados.save().then(empleados => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("Imposible update la data base");
        });
    }
  });
});

// Defined delete | remove | destroy route
empleadosRoutes.route('/delete/:id').get(function (req, res) {
    Empleados.findByIdAndRemove({_id: req.params.id}, function(err, empleados){
        if(err) res.json(err);
        else res.json('Se ha eliminado de la base de datos');
    });
});

module.exports = empleadosRoutes;
