# Trabajo Práctico Integrador – Programación Visual

Carrera: Analista Programador Universitario.

Facultad de Ingeniería – Año 2025.

Materia: Programación Visual.

Modalidad: Trabajo grupal – Integrador Final.

---

## Índice

- 📌 Objetivo del proyecto

- ⚙️ Tecnologías utilizadas

- 🗂 Estructura del proyecto

- 🧩 Funcionalidades

- 🔧 Detalle técnico por módulo

- 🧪 Manual de pruebas

- 🧹 Convenciones de código

- 🖥 Instalación y ejecución local

- 👥 Integrantes del grupo

- 📝 Notas finales

---

## 📌 Objetivo del proyecto

El objetivo de este trabajo práctico fue desarrollar una aplicación web tipo SPA (Single Page Application) utilizando React, aplicando en conjunto los conocimientos aprendidos durante la cursada de Programación Visual.

Nos propusimos diseñar una aplicación modular, funcional y visualmente clara, que consuma datos desde una API externa y permita interactuar con el contenido en distintas vistas. A lo largo del proyecto trabajamos en equipo organizando el código, distribuyendo tareas y versionando con Git, con un enfoque similar al de un entorno profesional.

Durante el desarrollo:

- Aplicamos conceptos clave de React como componentes, hooks y manejo de estado global.

- Usamos Redux Toolkit para organizar los datos y mantener el estado compartido.

- Implementamos rutas dinámicas con React Router DOM.

- Utilizamos herramientas modernas como Vite para desarrollo y Bootstrap para estilos.

- Respetamos buenas prácticas de código y modularización por features.

---

## ⚙️ Tecnologías utilizadas

- React (componentes funcionales y hooks como useEffect, useState, useParams)

- Redux Toolkit (estado global)

- React Router DOM (navegación y rutas dinámicas)

- Fetch API (consumo de API externa)

- Vite (entorno de desarrollo y build optimizado)

- Bootstrap (estilos, grid, botones, responsividad)

---

## 🗂 Estructura del proyecto

```
src/
├── app/                        # Configuración de Redux
│   └── store.js
├── assets/                    # Imágenes, íconos, logos
├── components/                # Componentes reutilizables
│   ├── FavoritoComponent.jsx
│   ├── Footer.jsx
│   ├── NavBar.jsx
│   └── ProductoComponent.jsx
├── features/                  # Slices de Redux
│   ├── favoritos/
│   │   └── favoritosSlice.js
│   └── product/
│       └── productosSlice.js
├── pages/                     # Vistas principales del proyecto
│   ├── Detalle.jsx
│   ├── Favoritos.jsx
│   └── Inicio.jsx
├── App.jsx                    # Configuración de rutas principales
├── main.jsx                   # Punto de entrada

```

---

## 🧩 Funcionalidades

- Página de inicio con cards de productos obtenidos desde una API externa.
- Visualización de imagen, nombre, precio, descripción y categoría.
- Marcado de productos como favoritos mediante ícono o checkbox.
- Navegación hacia una vista de detalle del producto.
- Página de favoritos con filtrado automático según estado global.
- Componente de formulario reutilizable para crear o editar productos (simulado en frontend).
- Almacenamiento y gestión de estado mediante Redux Toolkit.

---

## 🔧 Detalle técnico por módulo

| Módulo     | Descripción                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Inicio     | Carga productos desde la API externa y renderiza en cards. Se permite marcar como favorito o ver detalle. |
| Favoritos  | Filtra los productos marcados como favoritos y los muestra en una vista independiente.                    |
| Detalle    | Permite visualizar en detalle un producto individual, navegando por ID desde la URL.                      |
| Formulario | Utiliza un único componente para creación o edición, con campos dinámicos y validaciones mínimas.         |

---

## 🧪 Manual de pruebas

| Componente | Prueba esperada                        | Método                         |
| ---------- | -------------------------------------- | ------------------------------ |
| Inicio     | Productos cargados desde la API        | Ver cards al iniciar app       |
| Favoritos  | Persistencia al marcar y desmarcar     | Verificación visual            |
| Detalle    | Renderizado correcto por ID            | Ingreso desde botón Ver más    |
| Formulario | Renderizado dinámico de campos         | Crear/editar producto simulado |
| Redux      | Actualización de estado en tiempo real | Usar Redux DevTools            |

---

## 🧹 Convenciones de código

- Componentes en PascalCase.
- Archivos de lógica en camelCase y terminados en .js.
- Separación estricta entre lógica (slices) y presentación (JSX).
- Uso de Redux Toolkit con slices para simplificación de lógica.
- Rutas declarativas con React Router.
- Commits organizados con prefijos: feat:, fix:, chore:, refactor:.

---

## 🖥 Instalación y ejecución local

1. Clonar el repositorio

```
git clone https://github.com/Maxifigueroa20/pv-tp-integrador-grupo10.git
cd pv-tp-integrador-grupo10
```

2. Instalar dependencias

```
npm install
```

3. Ejecutar en desarrollo

```
npm run dev
```

4. Acceder a la app desde el navegador

```
http://localhost:5173
```

---

## 👥 Integrantes del grupo

| Nombre completo             | Nombre de usuario   | Correo Electrónico       |                              Imagen de perfil                              |
| --------------------------- | ------------------- | ------------------------ | :------------------------------------------------------------------------: |
| Figueroa, Maximiliano Rubén | Maxifigueroa20      | marianof0101@gmail.com   | ![Integrante1](https://avatars.githubusercontent.com/u/111710424?s=80&v=4) |
| Huells, Nicolás Rafael      | HuellsNicolasRafael | huellsnicolasr@gmail.com | ![Integrante2](https://avatars.githubusercontent.com/u/187710022?s=80&v=4) |

---

## 📝 Notas finales

Este trabajo integrador nos permitió aplicar en conjunto todo lo que vimos en la materia Programación Visual, desde los conceptos básicos hasta herramientas modernas como React, Redux Toolkit y Vite.

Nos organizamos por secciones del proyecto, dividiendo las tareas entre componentes, vistas, rutas y lógica de estado. Usamos GitHub para coordinar el trabajo y mantener el control de versiones, lo cual también fue parte del aprendizaje.

Durante el desarrollo surgieron desafíos reales, como manejar el estado global correctamente, organizar el código por features y entender cómo funciona el enrutamiento dinámico en React. Pudimos resolverlos con investigación, colaboración y práctica.

Más allá del resultado funcional, valoramos haber trabajado en equipo, coordinado entregas y documentado el proyecto como si fuera parte de un entorno real de desarrollo.

Creemos que cumplimos con los objetivos propuestos y que este TP nos dejó una base sólida para futuros proyectos web más grandes o profesionales.

---
