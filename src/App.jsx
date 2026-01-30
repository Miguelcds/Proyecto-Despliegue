import { useState , useEffect} from 'react'
import './App.css'

// Importaciones De Eventos
import DetalleEvento from './components/DetalleEvento';
import Favoritos from './components/Favoritos';
import eventosData from './data/Eventos.json';
import EventoCard from './components/EventoCard';



function App() {

  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);


  // Simular carga de datos
  useEffect(() => {
    const cargarEventos = async () => {
      try {
        setLoading(true);
        if (!eventosData || eventosData.length === 0) {
          throw new Error('No hay eventos disponibles');
        }

        setEventos(eventosData);
        setEventosFiltrados(eventosData);
        setError(null);
      } catch (err) {
        setError('Error al cargar los eventos. Por favor, intenta de nuevo más tarde.');
        console.error('Error cargando eventos:', err);
      } finally {
        setLoading(false);
      }
    };

    cargarEventos();
  }, []);

  // Filtrar eventos
  useEffect(() => {
    let resultado = eventos;

    // Filtro por búsqueda
    if (busqueda.trim() !== '') {
      resultado = resultado.filter(evento =>
        evento.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        evento.lugar.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Filtro por categoría
    if (categoriaFiltro !== 'Todas') {
      resultado = resultado.filter(evento => evento.categoria === categoriaFiltro);
    }

    setEventosFiltrados(resultado);
  }, [busqueda, categoriaFiltro, eventos]);

  const handleVerDetalle = (evento) => {
    setEventoSeleccionado(evento);
  };

  const handleCerrarDetalle = () => {
    setEventoSeleccionado(null);
  };

  const handleAgregarFavorito = (evento) => {
    if (!favoritos.find(fav => fav.id === evento.id)) {
      setFavoritos([...favoritos, evento]);
    }
  };

  const handleQuitarFavorito = (eventoId) => {
    setFavoritos(favoritos.filter(fav => fav.id !== eventoId));
  };

  const esFavorito = (eventoId) => {
    return favoritos.some(fav => fav.id === eventoId);
  };

  const categorias = ['Todas', 'Charla', 'Torneo', 'Taller', 'Excursión'];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Cargando eventos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2>Oops!</h2>
        <p>{error}</p>
      </div>
    );
  }


  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="main-title">Agenda Eventos</h1>
          <p className="subtitle">Todas las actividades Unificadas en un Solo sitio</p>
        </div>
      </header>

      <main className="container">
        {/* Sección de Favoritos */}
        <Favoritos 
          favoritos={favoritos}
          onQuitarFavorito={handleQuitarFavorito}
        />

        {/* Controles de búsqueda y filtrado */}
        <div className="controles">
          <div className="buscador">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar por título o lugar..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="input-busqueda"/>
            {busqueda && (
              <button 
                className="btn-limpiar"
                onClick={() => setBusqueda('')}
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>

          <div className="filtro-categorias">
            {categorias.map(categoria => (
              <button
                key={categoria}
                className={`btn-categoria ${categoriaFiltro === categoria ? 'activo' : ''}`}
                onClick={() => setCategoriaFiltro(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de eventos */}
        <div className="contador">
          <span className="contador-texto">
            Mostrando <strong>{eventosFiltrados.length}</strong> de <strong>{eventos.length}</strong> eventos
          </span>
        </div>

        {/* Lista de eventos */}
        {eventosFiltrados.length === 0 ? (
          <div className="no-resultados">
            <span className="icono-no-resultados">🔍</span>
            <h3>No se encontraron eventos</h3>
            <p>Intenta con otros criterios de búsqueda</p>
          </div>
        ) : (
          <div className="eventos-grid">
            {eventosFiltrados.map(evento => (
              <EventoCard
                key={evento.id}
                evento={evento}
                onVerDetalle={handleVerDetalle}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modal de detalle */}
      {eventoSeleccionado && (
        <DetalleEvento
          evento={eventoSeleccionado}
          onCerrar={handleCerrarDetalle}
          onAgregarFavorito={handleAgregarFavorito}
          esFavorito={esFavorito(eventoSeleccionado.id)}
        />
      )}

      <footer className="footer">
        <p>Desarrollado Por Joao Costa 2026 -- Proyecto educativo para Despliegue de APPS WEB -- </p>
      </footer>
    </div>
  )
}

export default App
