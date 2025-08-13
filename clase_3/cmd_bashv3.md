Claro, aquí te dejo la actualización del librito con los comandos de bash que hemos usado, los problemas comunes y cómo los solucionamos, además de una aclaración extra sobre ramas (branches):

```markdown
# Librito de Bash y Git: Comandos, Problemas y Soluciones

---

## 1️⃣ Comandos básicos para navegación y ramas

- `cd ~` — Ir a la carpeta home  
- `cd ..` — Subir un nivel en directorios  
- `cd nombre_carpeta` — Entrar en una carpeta  
- `git clone <url>` — Clonar un repositorio remoto  
- `git branch` — Ver ramas locales  
- `git branch -a` — Ver ramas locales y remotas  
- `git checkout nombre_rama` — Cambiar a una rama  
- `git checkout -b nombre_rama` — Crear y cambiar a una rama nueva  
- `git push -u origin nombre_rama` — Subir una rama y configurarla para seguimiento  
- `git add archivo` o `git add carpeta/` — Agregar cambios para commit  
- `git commit -m "mensaje"` — Confirmar cambios con mensaje  
- `git push` — Subir commits a remoto  
- `git status` — Ver estado actual de archivos y cambios  
- `git config --global user.name "Tu Nombre"` — Configurar usuario global para git  
- `git config --global user.email "tuemail@example.com"` — Configurar email global para git  

---

## 2️⃣ Problemas comunes y soluciones

### Problema: "Author identity unknown" al hacer commit  
**Error:**

```

\*\*\* Please tell me who you are.
Run
git config --global user.email "[you@example.com](mailto:you@example.com)"
git config --global user.name "Your Name"
to set your account's default identity.
fatal: unable to auto-detect email address

````

**Solución:**  
Configurar el nombre y correo con `git config` globalmente o por repositorio:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
````

---

### Problema: El enlace mailto no funciona o el link de GitHub no aparece

**Solución:**

* Asegúrate de que el `href` del mailto está bien escrito, por ejemplo:

```html
<a href="mailto:tuemail@example.com">Correo electrónico</a>
```

* Para el link de GitHub, asegúrate que el texto está dentro del `<a>` para que sea visible:

```html
<a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
```

---

### Problema: Favicon no aparece cuando está dentro de una carpeta

**Solución:**
La ruta en el atributo `href` debe ser relativa al archivo HTML, por ejemplo:

* Si el favicon está en la misma carpeta que el HTML:

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

* Si está en una carpeta llamada `img`:

```html
<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
```

---

## 3️⃣ Nota sobre ramas (branches)

* Las ramas en Git son como "líneas paralelas" de desarrollo.
* Puedes crear una rama nueva a partir de cualquier rama actual con:

```bash
git checkout -b nombre_rama
```

* Esto crea la rama y te cambia a ella.
* Para subir esa rama a remoto y rastrearla:

```bash
git push -u origin nombre_rama
```

* Trabajas en esa rama, haces commits y pushes normalmente.
* Para cambiar entre ramas usa:

```bash
git checkout nombre_rama
```

---

## 4️⃣ Pendientes para probar después

* Usar contenedores con scroll para listas muy largas en HTML con CSS:

```css
.scroll-list {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}
```

---

¿Quieres que te ayude a seguir con la imagen personal o cualquier otra cosa?
