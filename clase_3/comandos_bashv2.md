Claro, te preparo una versión actualizada del mini-libro en Markdown con los comandos bash que usamos, el contexto de los problemas que tuviste y cómo los solucionamos, además de una explicación más clara sobre cómo crear ramas o subramas en Git.

---

````markdown
# 📚 Mini Libro de Comandos Bash y Git (Actualizado)

Este mini-libro recopila los comandos que hemos usado hasta ahora para trabajar con **Bash**, **Git** y **VS Code**, junto con contexto sobre problemas comunes y cómo solucionarlos.

---

## 1️⃣ Navegación en Bash

- **Ir a un directorio específico**  
  ```bash
  cd nombre_del_directorio
````

* **Ir al directorio HOME del usuario**

  ```bash
  cd ~
  ```
* **Ir al directorio raíz del sistema**

  ```bash
  cd /
  ```
* **Subir un nivel (directorio padre)**

  ```bash
  cd ..
  ```
* **Volver al directorio anterior**

  ```bash
  cd -
  ```

---

## 2️⃣ Git básico y ramas

* **Clonar un repositorio remoto**

  ```bash
  git clone <URL-del-repositorio>
  ```

* **Ver ramas disponibles**

  ```bash
  git branch -a
  ```

* **Cambiar a una rama existente**

  ```bash
  git checkout nombre-de-la-rama
  ```

* **Crear y cambiar a una nueva rama (subrama) a partir de la rama actual**

  ```bash
  git checkout -b nombre-de-la-nueva-rama
  ```

  > Esto crea una nueva rama basada en la rama donde estés parado y cambia a ella automáticamente.

* **Subir la rama nueva al repositorio remoto y configurarla para seguimiento**

  ```bash
  git push -u origin nombre-de-la-nueva-rama
  ```

---

## 3️⃣ Trabajando con cambios en Git

* **Ver el estado de los cambios**

  ```bash
  git status
  ```

* **Agregar todos los cambios al área staging**

  ```bash
  git add .
  ```

* **Agregar un archivo o carpeta específica**

  ```bash
  git add ruta/al/archivo_o_carpeta
  ```

* **Hacer un commit con mensaje**

  ```bash
  git commit -m "Mensaje descriptivo de cambios"
  ```

* **Hacer un commit con mensaje multilínea**

  ```bash
  git commit -m "Título breve" -m "Descripción más detallada de lo hecho"
  ```

* **Subir cambios al repositorio remoto**

  ```bash
  git push
  ```

---

## 4️⃣ Configuración de identidad en Git (problema común)

### Problema encontrado:

Al intentar hacer commit, Git mostró el error:

```
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
```

### Solución:

Configurar tu nombre y correo electrónico para que Git los use en todos los commits:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu_correo@ejemplo.com"
```

O solo para ese repositorio (sin `--global`):

```bash
git config user.name "Tu Nombre"
git config user.email "tu_correo@ejemplo.com"
```

---

## 5️⃣ Trabajando con VS Code y la terminal integrada

* **Abrir terminal integrada**

  * En Windows/Linux: `Ctrl + ñ` o `Ctrl + Shift + '`
  * En macOS: `Cmd + ñ` o `Cmd + J`
  * También por menú: `Ver → Terminal`

* **Abrir la carpeta del repo en VS Code**

  ```bash
  code .
  ```

---

## 6️⃣ Problemas encontrados y soluciones en HTML

### Problema 1: `mailto:` no abre el cliente de correo

* Esto depende del sistema operativo y las aplicaciones instaladas.
* Si no tienes configurado un cliente de correo predeterminado, el navegador no sabe qué programa abrir.
* Solución:

  * Configura una app de correo predeterminada en tu sistema.
  * O usar extensiones para manejar `mailto:` en Gmail u otro webmail.

### Problema 2: Link de GitHub no visible

Código original:

```html
<a href="https://github.com/usuario" target="_blank" rel="nooperner noreferrer"></a>
```

* No tiene texto ni contenido visible, por eso no se ve nada.
* El atributo `rel` tiene un typo (`nooperner` en lugar de `noopener`).

Solución:

```html
<a href="https://github.com/usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
```

---

## 7️⃣ Resumen para crear ramas y hacer commits

1. Cambiar a la rama base (por ejemplo `dev`):

```bash
git checkout dev
```

2. Crear una nueva rama y cambiar a ella:

```bash
git checkout -b clase_3
```

3. Trabajar, agregar y hacer commits:

```bash
git add .
git commit -m "Mensaje del commit"
```

4. Subir la rama nueva y configurarla para seguimiento remoto:

```bash
git push -u origin clase_3
```

---

Si quieres que te prepare un ejemplo de `README.md` o que siga ayudándote con el CV, dime y seguimos.
