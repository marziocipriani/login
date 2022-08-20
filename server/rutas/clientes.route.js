// clientes.route.js

const express = require('express');
const clientesRoutes = express.Router();

// Require elmodelo Clientes model routes module
let Clientes = require('../modelos/clientes.model');

// Defined store route
clientesRoutes.route('/add').post(function (req, res) {
  let clientes = new Clientes(req.body);
  clientes.save()
    .then(clientes => {
      res.status(200).json({'clientes': 'cliente  agregado satisfactoriamente'});
    })
    .catch(err => {
      res.status(400).send("imposible salvar a la base de datos");
    });
});

// Defined get data(index or listing) route
clientesRoutes.route('/').get(function (req, res) {
    Clientes.find(function(err, clienteses){
    if(err){
      console.log(err);
    }
    else {
      res.json(clienteses);
    }
  });
});

// Defined edit route
clientesRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Clientes.findById(id, function (err, clientes){
      res.json(clientes);
  });
});

//  Defined update route
clientesRoutes.route('/update/:id').post(function (req, res) {
    Clientes.findById(req.params.id, function(err, clientes) {
    if (!clientes)
      res.status(404).send("data no encontrada");
    else {
        clientes.nombre = req.body.nombre;
        clientes.empresa = req.body.empresa;
        clientes.telefono = req.body.telefono;

        clientes.save().then(clientes => {
          res.json('Actualizacion completa');
        })
        .catch(err => {
          res.status(400).send("Imposible actualizar la database");
        });
    }
  });
});

// Defined delete | remove | destroy route
clientesRoutes.route('/delete/:id').get(function (req, res) {
    Clientes.findByIdAndRemove({_id: req.params.id}, function(err, clientes){
        if(err) res.json(err);
        else res.json('Se ha eliminado de la base de datos');
    });
});

module.exports = clientesRoutes;
