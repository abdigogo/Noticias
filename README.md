# Buscador de Noticias

Una aplicación web simple para buscar y mostrar noticias en tiempo real utilizando la API de NewsData.io.

##  Características

- **Búsqueda por palabras clave**: Busca noticias por temas específicos
- **Interfaz intuitiva**: Diseño limpio y responsivo
- **Resultados en tiempo real**: Obtén las noticias más recientes
- **Información completa**: Título, fecha, contenido y imagen de cada noticia

##  Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsivo
- **JavaScript (ES6+)**: Lógica de la aplicación y llamadas a la API
- **NewsData.io API**: Fuente de datos de noticias

## Requisitos Previos

- Un navegador web moderno
- Una clave API de [NewsData.io](https://newsdata.io/)

## Instalación y Configuración

1. **Clona o descarga** este repositorio en tu máquina local
```bash
    git clone https://github.com/abdigogo/Noticias.git
    cd Noticias
```


2. **Obtén una clave API**:
   - Ve a [newsdata.io](https://newsdata.io/)
   - Regístrate y obtén tu clave API gratuita

3. **Configura la API**:
   - Abre el archivo `js/main.js`
   - Reemplaza la clave API en la línea correspondiente (actualmente usa una clave de ejemplo)

4. **Ejecuta la aplicación**:
   - Abre el archivo `index.html` en tu navegador web
   - ¡Listo! Ya puedes buscar noticias

##  Uso

1. Ingresa una palabra clave en el campo de búsqueda (ej: "economía", "IA", "fútbol")
2. Haz clic en el botón "Buscar"
3. Las noticias relacionadas aparecerán debajo del formulario

##  Estructura del Proyecto

```
/
├── index.html          # Archivo principal HTML
├── css/
│   └── style.css       # Estilos de la aplicación
├── js/
│   └── main.js         # Lógica JavaScript
└── README.md           # Este archivo
```

##  Funcionalidades Técnicas

- **Búsqueda asíncrona**: Utiliza `fetch()` para llamadas a la API
- **Manipulación del DOM**: Crea elementos dinámicamente para mostrar resultados
- **Manejo de errores**: Incluye try-catch para errores de red
- **Limpieza de resultados**: Borra resultados anteriores antes de nuevas búsquedas
