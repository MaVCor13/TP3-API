import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import Map from './Map'; // Componente Map
import Colectivos from './Colectivos'; // Componente para datos de colectivos
import simulatedData from './simulatedData.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosSimulados: null, // Inicializa datosSimulados como nulo
    };
  }

  componentDidMount() {
    // Cargar datos simulados desde el archivo JSON
    fetch('/simulatedData.json') // Ruta relativa a la carpeta "public"
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datosSimulados: data });
      })
      .catch((error) => {
        console.error('Error al cargar datos simulados:', error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Mi Transporte</h1>
        <Map simulatedData={this.state.datosSimulados} /> {/* Pasa los datos simulados a Map */}
        <Colectivos simulatedData={this.state.datosSimulados} /> {/* Pasa los datos simulados a Colectivos */}
        
      </div>
    );
  }
}

export default App;
