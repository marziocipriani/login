import React, { Component } from 'react';
import axios from 'axios';
import TableClientes from './table_clientes';
import Flip from 'react-reveal/Flip';

export default class index_clientes extends Component {

  constructor(props) {
      super(props);
      this.state = {clientes: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/clientes')
        .then(response => {
          this.setState({ clientes: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabxRow(){
      return this.state.clientes.map(function(object, i){
          return <TableClientes obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
           <Flip left>
              <h3 align="center">Lista de Clientes</h3>
          </Flip>

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Persona</th>
                <th>La Empresa</th>
                <th> Teléfono</th>
                <th colSpan="2">Acción</th>
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