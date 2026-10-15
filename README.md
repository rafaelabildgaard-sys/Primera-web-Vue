# MartialArts

Aplicación informativa sobre artes marciales, creada con Vue 3. Incluye una página de inicio, un
catálogo conectado a Cloud Firestore y una página de información.

## Instalación y uso local

Requisitos: Node.js `^22.18.0` o `>=24.12.0`.

Desde la carpeta del proyecto:

```sh
npm install
npm run dev
```

Abre la dirección local que muestre Vite (normalmente `http://localhost:5173/`).

## Compilar y desplegar

Crear la versión de producción:

```sh
npm run build
```

Desplegar en Firebase Hosting (requiere Firebase CLI e iniciar sesión con `firebase login`):

```sh
firebase deploy --only hosting
```

## Componentes

- `Navbar.vue`: navegación principal.
- `ItemList.vue`: lista de disciplinas de la página de inicio.
- `ItemCard.vue`: tarjeta con nombre, descripción, nivel e icono opcional.

## Props: ejemplo

`ItemList.vue` (padre) pasa cada disciplina a `ItemCard.vue` (hijo) mediante la prop `art`:

```vue
<ItemCard v-for="art in martialArts" :key="art.nombre" :art="art" />
```

La tarjeta muestra `art.nombre`, `art.descripcion` y `art.nivel`.

## Rutas

- `/` — Inicio y disciplinas destacadas (`HomeView.vue`).
- `/catalog` — Catálogo de Firestore (`CatalogView.vue`).
- `/about` — Información sobre la aplicación (`AboutView.vue`).

## Firestore

`CatalogView.vue` lee la colección **`artes_marciales`**. Cada documento debe incluir:

- `nombre` (texto)
- `descripcion` (texto)
- `nivel` (texto)

El campo `icon` es opcional. Firestore debe estar habilitado y permitir la lectura en sus reglas.

## Web publicada

**Firebase Hosting:** https://web-artes-marciales.web.app/catalog
