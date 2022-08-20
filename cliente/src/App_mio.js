import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/app.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/clientes/create.component';
import Registro from './components/actores/registro.component';
import Agregar from './components/videos/agregar.component';
import Ingreso from './components/empleados/ingreso.component';

import edit_actores from './components/actores/edit_actores.component';
import edit_clientes from './components/clientes/edit_clientes.component';
import edit_videos from './components/videos/edit_videos.component';
import edit_empleados  from './components/empleados/edit_empleados.component';

import index_actores from './components/actores/index_actores.component';
import index_clientes from './components/clientes/index_clientes.component';
import index_videos from './components/videos/index_videos.component';
import index_empleados from './components/empleados/index_empleados.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Sistema ONIX</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/registro'} className="nav-link">Nuevo Actor</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/ingreso'} className="nav-link">Nuevo Empleado</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Nuevo Cliente</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/agregar'} className="nav-link">Nuevo Video</Link>
                </li>

                 <li className="nav-item">
                  <Link to={'/actores'} className="nav-link">Actores</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/clientes'} className="nav-link">Clientes</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/empleados'} className="nav-link">Empleados</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/videos'} className="nav-link">Videos</Link>
                </li>


              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route exact path='/registro' component={ Registro } />
              <Route exact path='/agregar' component={ Agregar } />
              <Route exact path='/ingreso' component={ Ingreso } />

              <Route path='/actores' component={ index_actores } />
              <Route path='/edit_actores/:id' component={ edit_actores } />
            
              <Route path='/videos' component={ index_videos } />
              <Route path='/edit_videos/:id' component={ edit_videos } />
             
              <Route path='/clientes' component={ index_clientes } />
              <Route path='/edit_clientes/:id' component={ edit_clientes } />

              <Route path='/empleados' component={ index_empleados } />
              <Route path='/edit_empleados/:id' component={ edit_empleados } />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
