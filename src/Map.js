import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ErrorBoundary from './ErrorBoundary'; // Importa el componente ErrorBoundary
import datosSimulados from './simulatedData.json'; // Importa los datos simulados desde el archivo JSON
import iconoColectivo from './icono_colectivo.png';

class Map extends Component {
  componentDidMount() {
    if (!this.map) {
      this.map = L.map('map').setView([-34.61, -58.38], 13);
      const customIcon = L.icon({
        iconUrl: iconoColectivo, // Corregido el nombre de la variable
        iconSize: [32, 32], // Ajusta el tamaño según tus necesidades
        iconAnchor: [16, 16],
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(this.map);

      // Datos simulados desde el archivo JSON local
      datosSimulados.forEach((colectivo) => {
        const marker = L.marker([colectivo.latitude, colectivo.longitude], { icon: customIcon }); // Usa el icono personalizado
        marker.addTo(this.map).bindPopup(`Línea: ${colectivo.route_short_name}`);
      });
    }
  }

  render() {
    return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
  }
}

export default Map;





