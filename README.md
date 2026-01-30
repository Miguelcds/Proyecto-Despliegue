# Agenda de Eventos 

Aplicación web desarrollada con **React** y **Vite** para consultar y organizar eventos del centro: charlas, torneos, talleres y excursiones.

## Características

✅ **Visualización de eventos** - Lista completa de todos los eventos del centro  
✅ **Búsqueda en tiempo real** - Filtra eventos por título o lugar  
✅ **Filtro por categorías** - Charla, Torneo, Taller, Excursión  
✅ **Vista detallada** - Información completa de cada evento  
✅ **Sistema de favoritos** - Marca y gestiona tus eventos favoritos  
✅ **Contador inteligente** - Muestra X de Y eventos según filtros aplicados  
✅ **Diseño responsive** - Adaptado a móviles, tablets y ordenadores  
✅ **Animaciones fluidas** - Transiciones y efectos visuales modernos  
✅ **Gestión de estados** - Loading y mensajes de error

## 📋 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (viene incluido con Node.js)

## 🛠️ Instalación

1. **Navega al directorio del proyecto:**
   ```bash
   cd eventos-centro
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## ▶️ Ejecutar el Proyecto

### Modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### Compilar para producción:
```bash
npm run build
```

### Vista previa de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
eventos-centro/
├── src/
│   ├── components/
│   │   ├── EventoCard.jsx       # Tarjeta individual de evento
│   │   ├── EventoCard.css
│   │   ├── DetalleEvento.jsx    # Opcion con el detalle completo
│   │   ├── DetalleEvento.css
│   │   ├── Favoritos.jsx        # Sección de eventos favoritos
│   │   └── Favoritos.css
│   ├── data/
│   │   └── eventos.json         # Base de datos local (10 eventos)
│   ├── App.jsx                  # Componente principal
│   ├── App.css                  # Estilos globales
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos base
├── index.html                   # HTML principal
├── package.json                 # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
└── README.md                    # Este archivo
```

##  Funcionalidades Implementadas

### 1️⃣ Creación del Proyecto
- ✅ Proyecto creado con Vite + React
- ✅ Código organizado en componentes reutilizables
- ✅ Arquitectura modular y escalable

### 2️⃣ Gestión de Datos
- ✅ 10 eventos cargados desde `eventos.json`
- ✅ Estructura de datos completa: id, título, categoría, fecha, lugar, descripción

### 3️⃣ Pantalla Principal
- ✅ Título: "Agenda de Eventos"
- ✅ Lista de eventos en tarjetas con diseño moderno
- ✅ Información visible: título, categoría, fecha, lugar
- ✅ Botón "Ver detalle" en cada evento
- ✅ Buscador por texto (filtra título y lugar)
- ✅ Filtro por categoría con botones interactivos
- ✅ Contador dinámico: "Mostrando X de Y eventos"

### 4️⃣ Vista de Detalle
- ✅ Modal con información completa del evento
- ✅ Botón "Añadir a favoritos"
- ✅ Indicador visual cuando el evento ya está en favoritos
- ✅ Desactivación del botón para eventos favoritos
- ✅ Animaciones de entrada/salida

### 5️⃣ Sistema de Favoritos
- ✅ Sección dedicada para ver todos los favoritos
- ✅ Lista con títulos de eventos favoritos
- ✅ Botón "Quitar de favoritos" con confirmación visual
- ✅ Contador de favoritos
- ✅ Estado vacío con mensaje informativo

### 6️⃣ Estados y Manejo de Errores
- ✅ Pantalla de "Cargando..." con spinner animado
- ✅ Simulación de carga con useEffect
- ✅ Mensaje de error si no hay datos disponibles
- ✅ Mensaje cuando no hay resultados de búsqueda

##  Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para interfaces
- **Vite** - Build tool ultrarrápido
- **CSS3** - Estilos con gradientes, animaciones y efectos
- **Hooks de React** - useState, useEffect para gestión de estado

##  Características Destacadas

### Diseño Moderno
- Gradientes vibrantes
- Tarjetas con efecto hover elevado
- Badges de categoría con colores únicos
- Animaciones CSS suaves
- Tipografía clara y legible

### Experiencia de Usuario
- Búsqueda instantánea sin delays
- Filtros intuitivos y visuales
- Modal centrado con backdrop blur
- Feedback visual en todas las acciones
- Mensajes informativos contextuales

### Responsive Design
- Adaptado a todos los tamaños de pantalla
- Grid flexible que se ajusta automáticamente
- Controles optimizados para móvil
- Imágenes y textos escalables

##  Capturas de Pantalla

*(Las capturas de pantalla se encuentran en la carpeta `/capturas`) ocultas en el repo, disponible solo en la web de clase*

1. **Pantalla Principal** - Vista general con todos los eventos
2. **Búsqueda y Filtros** - Sistema de filtrado en acción
3. **Detalle de Evento** - Vista con información completa
4. **Sección de Favoritos** - Gestión de eventos favoritos
5. **Responsive Mobile** - Vista en dispositivos móviles

## 🔧 Personalización

### Añadir nuevos eventos
Edita el archivo `src/data/eventos.json` y añade objetos con esta estructura:

```json
{
  "id": 11,
  "titulo": "Nombre del evento",
  "categoria": "Charla | Torneo | Taller | Excursión",
  "fecha": "YYYY-MM-DD",
  "lugar": "Ubicación del evento",
  "descripcion": "Descripción detallada del evento"
}
```

##  Desarrollo

Este proyecto fue desarrollado siguiendo las mejores prácticas de React:
- Componentes funcionales
- Hooks para gestión de estado
- Props para comunicación entre componentes
- CSS modular por componente
- Código limpio y comentado

##  Notas Importantes

- Los eventos se cargan desde un archivo JSON local (sin backend ya que asi se solicitó el proyecto en esta ocasion)
- Los favoritos se almacenan en el estado de React (se pierden al recargar, en futuras versiones incluire la opcion de un localStorage)
- La simulación de carga dura 800ms para demostrar el estado de loading
- Todos los eventos incluyen validación de datos

##  Contribuir

Si quieres mejorar este proyecto:
1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

##  Licencia

Este proyecto fue creado con fines de Aprendizaje para la Asignatura de Despligue De App Web.

##  Autor

Joao Miguel Costa Da Silva

---
