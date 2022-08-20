import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class table_clientes extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/clientes/delete/'+this.props.obj._id)
            .then(console.log('Eliminado'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nombre}
          </td>
          <td>
            {this.props.obj.empresa}
          </td>
          <td>
            {this.props.obj.telefono}
          </td>
          <td>
            <Link to={"/edit_clientes/"+this.props.obj._id} className="btn btn-primary">Editar Cliente</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Eliminar</button>
          </td>
        </tr>
    );
  }
}

export default table_clientes;