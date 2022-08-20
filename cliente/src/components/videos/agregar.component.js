import React, { Component } from 'react';
import axios from 'axios';

export default class agregar extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeCargo = this.onChangeCargo.bind(this);
    this.onChangeCedula = this.onChangeCedula.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: '',
      cargo: '',
      cedula:''
    }
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
    axios.post('http://localhost:4000/videos/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nombre: '',
      cargo: '',
      cedula: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 20 }}>
            <h3 align="center">Ingreso de un Nuevo Video</h3>
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label>Nombre Completo:  </label>
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
                    <label>Cédula: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.cedula}
                      onChange={this.onChangeCedula}
                      />
                </div>

                <div className="form-group">
                    <input type="submit" 
                      value="Registrar Nuevo Video" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}