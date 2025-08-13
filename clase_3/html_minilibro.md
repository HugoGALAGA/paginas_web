
# 📘 Mini libro: Introducción a HTML

***nota: usar*** `ctrl+shift+V` ***en windows o*** `cmd+shift+V` ***en MAC para ver bien***

## Capítulo 1 – ¿Qué es HTML?
HTML significa **HyperText Markup Language** (*Lenguaje de Marcado de Hipertexto*).
No es un lenguaje de programación, sino de **marcado**: describe la estructura y el significado del contenido de una página web.

HTML usa **etiquetas** para delimitar y describir contenido.  
Ejemplo:  
```html
<p>Esto es un párrafo</p>
```

---

## Capítulo 2 – Sintaxis básica
Un documento HTML tiene una estructura mínima:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página</title>
</head>
<body>
    <h1>Hola mundo</h1>
    <p>Este es un párrafo.</p>
</body>
</html>
```

**Partes principales:**
1. **`<!DOCTYPE html>`** – Indica que el documento es HTML5.  
2. **`<html>`** – Elemento raíz del documento.  
3. **`<head>`** – Información *sobre* la página (no visible).  
4. **`<body>`** – Contenido visible.

---

## Capítulo 3 – Etiquetas más comunes
- **Encabezados**: `<h1>` a `<h6>` (del más importante al menos importante).  
- **Párrafos**: `<p>`  
- **Enlaces**: `<a href="url">Texto</a>`  
- **Imágenes**: `<img src="imagen.jpg" alt="Descripción">`  
- **Listas**: `<ul>` listas sin orden, `<ol>` listas ordenadas, `<li>` ítems.  

Ejemplo:  
```html
<ul>
    <li>Manzana</li>
    <li>Banana</li>
    <li>Naranja</li>
</ul>
```

---

## Capítulo 4 – Semántica en HTML
HTML semántico significa que las etiquetas comunican **significado** y no solo **apariencia**.

Ejemplos:  
- `<strong>`: texto importante.  
- `<em>`: texto en énfasis.  
- `<header>`: encabezado de página o sección.  
- `<main>`: contenido principal.  
- `<footer>`: pie de página.  
- `<article>`, `<section>`, `<aside>`: contenido estructurado.

---

## Capítulo 5 – Buenas prácticas
- Usar etiquetas semánticas para mejorar la accesibilidad y SEO.  
- Incluir el atributo `alt` en las imágenes.  
- Mantener el código indentado y ordenado.  
- Cerrar todas las etiquetas que lo requieran.  
- Usar minúsculas en etiquetas y atributos.  

---

## Capítulo 6 – Ejemplo práctico
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Blog Personal</title>
</head>
<body>
    <header>
        <h1>Bienvenido a mi blog</h1>
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Sobre mí</a>
            <a href="#">Contacto</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Mi primer post</h2>
            <p>Este es el contenido de mi primer artículo.</p>
        </article>
    </main>

    <footer>
        <p>© 2025 Mi Blog</p>
    </footer>
</body>
</html>
```
