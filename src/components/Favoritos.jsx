import React from 'react';
import './Favoritos.css';

const Favoritos = ({ favoritos, onQuitarFavorito }) => {
  if (favoritos.length === 0) {
    return (
      <div className="favoritos-seccion">
        <h2 className="favoritos-titulo">⭐ Tus Favoritos</h2>
        <div className="favoritos-vacio">
          <span className="icono-vacio">📌</span>
          <p>Aún no has añadido eventos a favoritos</p>
          <p className="texto-secundario">Explora los eventos y marca tus preferidos</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favoritos-seccion">
      <h2 className="favoritos-titulo">⭐ Tus Favoritos ({favoritos.length})</h2>
      <div className="favoritos-lista">
        {favoritos.map((evento) => (
          <div key={evento.id} className="favorito-item">
            <div className="favorito-contenido">
              <span className="favorito-icono">⭐</span>
              <div className="favorito-info">
                <h4 className="favorito-nombre">{evento.titulo}</h4>
                <span className="favorito-categoria">{evento.categoria}</span>
              </div>
            </div>
            <button
              className="btn-quitar"
              onClick={() => onQuitarFavorito(evento.id)}
              title="Quitar de favoritos"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;