

````markdown
# 📚 Mini Libro de Comandos Bash y Git

Este mini-libro recopila los comandos que hemos usado hasta ahora para trabajar con **Bash**, **Git** y **VS Code**.

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

## 2️⃣ Git básico

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

* **Crear y cambiar a una nueva rama**

  ```bash
  git checkout -b nombre-de-nueva-rama
  ```

* **Descargar todas las ramas y actualizaciones**

  ```bash
  git fetch --all
  ```

---

## 3️⃣ Trabajando con cambios

* **Ver el estado de los cambios**

  ```bash
  git status
  ```

* **Agregar todos los cambios al staging**

  ```bash
  git add .
  ```

* **Agregar un archivo o carpeta específica**

  ```bash
  git add nombre_archivo
  git add nombre_carpeta
  ```

* **Hacer un commit con mensaje**

  ```bash
  git commit -m "Mensaje descriptivo de cambios"
  ```

* **Hacer un commit con descripción multilínea**

  ```bash
  git commit -m "Título breve" -m "Descripción más detallada de lo hecho"
  ```

* **Subir cambios al repositorio remoto**

  ```bash
  git push
  ```

* **Subir cambios especificando rama**

  ```bash
  git push -u origin nombre-de-la-rama
  ```

---

## 4️⃣ Configuración de identidad en Git

* **Configurar nombre y email globalmente**

  ```bash
  git config --global user.name "Tu Nombre"
  git config --global user.email "tu_correo@ejemplo.com"
  ```

* **Configurar nombre y email solo para un repositorio**

  ```bash
  git config user.name "Tu Nombre"
  git config user.email "tu_correo@ejemplo.com"
  ```

---

## 5️⃣ VS Code y terminal integrada

* **Abrir la carpeta actual en VS Code**

  ```bash
  code .
  ```

* **Abrir terminal integrada en VS Code**

  * `Ctrl + ñ` o `Ctrl + Shift + '` (Windows/Linux)
  * `Cmd + ñ` o `Cmd + J` (macOS)
  * Menú: `Ver → Terminal`

---

📌 **Consejos:**

* Haz commits frecuentes y descriptivos.
* Trabaja siempre dentro de la carpeta del repositorio.
* Usa ramas para separar funcionalidades y evitar conflictos.

```

(～￣▽￣)～

```
