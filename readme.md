# MyPracticeApp

Esta es una práctica de React Native creada para demostrar varios conceptos importantes como la carga de datos, animaciones, uso de SVGs, y más. La aplicación está organizada de manera modular utilizando componentes.

## Estructura del Proyecto

MyPracticeApp/
├── App.js
├── assets/
│ ├── local_svg_file.svg
├── components/
│ ├── AnimatedBox.js
│ ├── AnimatedReanimatedBox.js
│ ├── FetchData.js
│ ├── Header.js
│ ├── ImageComponent.js
│ ├── Item.js
│ ├── LoadingIndicator.js
│ ├── RefreshableScrollView.js
│ ├── SvgComponent.js
└── App.js


## Descripción de Archivos y su Propósito

### `App.js`

Archivo principal de la aplicación que integra todos los componentes y coordina la estructura de la aplicación.

### `components/AnimatedBox.js`

Componente que muestra una caja que puede desvanecerse utilizando la API `Animated`.

### `components/AnimatedReanimatedBox.js`

Componente que muestra una caja que puede desvanecerse utilizando `react-native-reanimated`.

### `components/FetchData.js`

Componente que obtiene datos de una API y los muestra en una lista utilizando `FlatList`.

### `components/Header.js`

Componente para mostrar el encabezado de la aplicación.

### `components/ImageComponent.js`

Componente para mostrar una imagen desde una URL.

### `components/Item.js`

Componente para mostrar cada elemento en la lista de datos obtenidos.

### `components/LoadingIndicator.js`

Componente para mostrar un indicador de carga.

### `components/RefreshableScrollView.js`

Componente para manejar el desplazamiento y la actualización mediante "Pull to Refresh".

### `components/SvgComponent.js`

Componente para mostrar un gráfico SVG.

## Ejecución

Instalar las dependencias:

npm install
Ejecutar la aplicación:

npx expo start
Esto abrirá Expo Developer Tools en tu navegador. Desde allí, puedes escanear el código QR con la aplicación Expo Go en tu dispositivo móvil o ejecutar el emulador de tu elección.

Funcionalidades
Carga de Datos: Obtiene datos desde una API y los muestra en una lista utilizando FlatList.
Animaciones: Incluye animaciones de desvanecimiento utilizando la API Animated y react-native-reanimated.
SVG: Muestra gráficos SVG utilizando react-native-svg.
Indicador de Carga: Muestra un indicador de carga mientras se obtienen los datos.
Desplazamiento y Actualización: Permite el desplazamiento y la actualización de contenido mediante "Pull to Refresh".
Encabezado: Muestra un encabezado fijo en la aplicación.
Imágenes: Muestra una imagen desde una URL.