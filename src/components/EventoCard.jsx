import React from 'react';
import './EventoCard.css';

const EventoCard = ({ evento, onVerDetalle }) => {
  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha + 'T00:00:00').toLocaleDateString('es-ES', opciones);
  };

  const getCategoriaColor = (categoria) => {
    const colores = {
      'Charla': 'charla',
      'Torneo': 'torneo',
      'Taller': 'taller',
      'Excursión': 'excursion'
    };
    return colores[categoria] || 'default';
  };

  return (
    <div className="evento-card">
      <div className={`categoria-badge ${getCategoriaColor(evento.categoria)}`}>
        {evento.categoria}
      </div>
      <h3 className="evento-titulo">{evento.titulo}</h3>
      <div className="evento-info">
        <div className="info-item">
          <span className="icon">📅</span>
          <span>{formatearFecha(evento.fecha)}</span>
        </div>
        <div className="info-item">
          <span className="icon">📍</span>
          <span>{evento.lugar}</span>
        </div>
      </div>
      <button 
        className="btn-detalle"
        onClick={() => onVerDetalle(evento)}
      >
        Ver detalle
      </button>
    </div>
  );
};

export default EventoCard;