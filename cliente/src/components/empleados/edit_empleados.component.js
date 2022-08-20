//Actualiza la base de datos de empleados

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit_empleados extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeCargo  = this.onChangeCargo.bind(this);
    this.onChangeCedula = this.onChangeCedula.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: '',
      cargo: '',
      cedula:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/empleados/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nombre: response.data.nombre, 
                cargo:  response.data.cargo,
                cedula: response.data.cedula });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  onChangeCargo(e) {
    this.setState({
      cargo: e.target.value
    })  
  }
  onChangeCedula(e) {
    this.setState({
      cedula: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nombre: this.state.nombre,
      cargo: this.state.cargo,
      cedula: this.state.cedula
    };
    axios.post('http://localhost:4000/empleados/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index_empleados');
  }
 
  render() {
    return (
        <div style={{ marginTop: 20 }}>
            <h3 align="center">Actualizaciòn de los datos de los empleados</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nombre}
                      onChange={this.onChangeNombre}
                      />
                </div>
                <div className="form-group">
                    <label>Cargo: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.cargo}
                      onChange={this.onChangeCargo}
                      />
                </div>
                <div className="form-group">
                    <label>Cedula: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.cedula}
                      onChange={this.onChangeCedula}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Actualizar Empleado" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}