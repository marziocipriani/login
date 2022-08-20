import React, { Component } from 'react';
import axios from 'axios';

export default class create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeEmpresa = this.onChangeEmpresa.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: '',
      empresa: '',
      telefono:''
    }
  }
  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  onChangeEmpresa(e) {
    this.setState({
     empresa: e.target.value
    })  
  }
  onChangeTelefono(e) {
    this.setState({
      telefono: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nombre: this.state.nombre,
      empresa: this.state.empresa,
      telefono: this.state.telefono
    };
    axios.post('http://localhost:4000/clientes/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nombre: '',
      empresa: '',
      telefono: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 20 }}>
            <h3 align="center">Registrar Nuevo Cliente</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre de la persona:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nombre}
                      onChange={this.onChangeNombre}
                      />
                </div>
                <div className="form-group">
                    <label>Nombre de la Empresa: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.empresa}
                      onChange={this.onChangeEmpresa}
                      />
                </div>
                <div className="form-group">
                    <label>teléfono: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.telefono}
                      onChange={this.onChangeTelefono}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Registrar Nuevo Cliente" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}