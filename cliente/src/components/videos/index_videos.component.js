import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './table_videos';
import Flip from 'react-reveal/Flip';

export default class Index_videos extends Component {

  constructor(props) {
      super(props);
      this.state = {videos: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/videos')
        .then(response => {
          this.setState({ videos : response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabxRow(){
      return this.state.videos.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
        
           <Flip left>
             <h3 align="center"> Lista de Videos de QUIANON </h3>
           </Flip>

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Id del Cliente</th>
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