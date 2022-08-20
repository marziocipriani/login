import React, { Component } from 'react';
import axios from 'axios';

export default class registro extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    this.onChangeCorreo = this.onChangeCorreo.bind(this);
    this.onChangeCedula = this.onChangeCedula.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: '',
      apellido: '',
      correo: '',
      cedula:''
    }
  }
  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  onChangeApellido(e) {
    this.setState({
      apellido: e.target.value
    });
  }
  onChangeCorreo(e) {
    this.setState({
      correo: e.target.value
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
      apellido: this.state.apellido,
      correo: this.state.correo,
      cedula: this.state.cedula


    };
    axios.post('http://localhost:4000/actores/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nombre: '',
      apellido: '',
      correo: '',
      cedula: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 20 }}>
            <h3 align="center">Agregar nuevo Actor</h3>
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
                    <label>Apellido:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.apellido}
                      onChange={this.onChangeApellido}
                      />
                </div>


                <div className="form-group">
                    <label>Correo: </label>
                    <input type="email" 
                      className="form-control"
                      value={this.state.correo}
                      onChange={this.onChangeCorreo}
                      />
                </div>

                <div className="form-group">
                    <label>Numero Cedula: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.cedula}
                      onChange={this.onChangeCedula}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Registrar Nuevo Actor" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}