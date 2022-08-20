import React, { Component } from 'react';
import axios from 'axios';
import TableActores from './table_actores';
import Flip from 'react-reveal/Flip';

export default class Index_actores extends Component {

  constructor(props) {
      super(props);
      this.state = {actores: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/actores')
        .then(response => {
          this.setState({ actores: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabxRow(){
      return this.state.actores.map(function(object, i){
          return <TableActores obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>

            <Flip left>
             <h3 align="center">Lista de Actores</h3>
            </Flip>
         
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Cedula</th>
                <th colSpan="2"> className="btn btn-primary" Crear Nuevo
             
                 </th>
              </tr>
            </thead>
            <tbody>
              { this.tabxRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }