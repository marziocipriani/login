import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class table_actores extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.get('http://localhost:4000/actores/delete/'+this.props.obj._id)
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
            {this.props.obj.apellido}
          </td>
          <td>
            {this.props.obj.correo}
          </td>
          <td>
            {this.props.obj.cedula}
          </td>
          <td>
            <Link to={"/edit_actores/"+this.props.obj._id} className="btn btn-primary">Editar actores</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Eliminar</button>
          </td>
        </tr>
    );
  }
}

export default table_actores;