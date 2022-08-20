import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './table_empleados';
import Flip from 'react-reveal/Flip';

export default class Index_empleados extends Component {

  constructor(props) {
      super(props);
      this.state = {empleados: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/empleados')
        .then(response => {
          this.setState({ empleados : response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabxRow(){
      return this.state.empleados.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
        
           <Flip left>
             <h3 align="center"> Lista de Empleados de QUIANON </h3>
           </Flip>

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Cedula</th>
                <th colSpan="2">Action</th>
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