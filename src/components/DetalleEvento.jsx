import React from 'react';
import './DetalleEvento.css';

const DetalleEvento = ({ evento, onCerrar, onAgregarFavorito, esFavorito }) => {
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
    <div className="detalle-overlay" onClick={onCerrar}>
      <div className="detalle-modal" onClick={(e) => e.stopPropagation()}>
        <button className="btn-cerrar" onClick={onCerrar}>✕</button>
        
        <div className={`categoria-badge-detalle ${getCategoriaColor(evento.categoria)}`}>
          {evento.categoria}
        </div>

        <h2 className="detalle-titulo">{evento.titulo}</h2>

        <div className="detalle-info-grid">
          <div className="detalle-info-item">
            <span className="detalle-icon">📅</span>
            <div>
              <div className="detalle-label">Fecha</div>
              <div className="detalle-valor">{formatearFecha(evento.fecha)}</div>
            </div>
          </div>

          <div className="detalle-info-item">
            <span className="detalle-icon">📍</span>
            <div>
              <div className="detalle-label">Lugar</div>
              <div className="detalle-valor">{evento.lugar}</div>
            </div>
          </div>
        </div>

        <div className="detalle-descripcion">
          <h3>Descripción</h3>
          <p>{evento.descripcion}</p>
        </div>

        <button
          className={`btn-favorito ${esFavorito ? 'favorito-activo' : ''}`}
          onClick={() => onAgregarFavorito(evento)}
          disabled={esFavorito}
        >
          {esFavorito ? (
            <>
              <span className="icono-favorito">⭐</span> En favoritos
            </>
          ) : (
            <>
              <span className="icono-favorito">☆</span> Añadir a favoritos
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DetalleEvento;