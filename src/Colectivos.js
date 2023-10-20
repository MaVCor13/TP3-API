import React, { Component } from 'react';
import axios from 'axios';

class Colectivos extends Component {
  state = {
    colectivos: [],
  };

  componentDidMount() {
    // Simulación de datos desde un archivo JSON local
    axios.get('/simulatedData.json') // La URL es relativa a la ubicación de tu aplicación
      .then((response) => {
        this.setState({ colectivos: response.data });
      })
      .catch((error) => {
        console.error('Error al cargar datos simulados:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Información de Colectivos</h2>
        <ul>
          {this.state.colectivos.map((colectivo) => (
            <li key={colectivo.id}>
              Nombre: {colectivo.route_short_name}, Latitud: {colectivo.latitude}, Longitud: {colectivo.longitude}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Colectivos;



