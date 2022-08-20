//  Actualizar Clientes

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit_clientes extends Component {
  
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

  componentDidMount() {
      axios.get('http://localhost:4000/clientes/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nombre: response.data.nombre, 
                empresa:response.data.empresa,
                telefono: response.data.telefono });
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
    axios.post('http://localhost:4000/clientes/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index_clientes');
  }
 
  render() {
    return (
        <div style={{ marginTop: 20 }}>
            <h3 align="center">Actualizar Clientes de QUIANON</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre del Cliente:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nombre}
                      onChange={this.onChangeNombre}
                      />
                </div>
                <div className="form-group">
                    <label>Nombre de la emperesa: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.empresa}
                      onChange={this.onChangeEmpresa}
                      />
                </div>
                <div className="form-group">
                    <label>Telefono: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.telefono}
                      onChange={this.onChangeTelefono}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Actualizar Cliente" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}