# Guía para Resolver Conflictos y Limpieza de Ramas en Git

Este pequeño libro detalla paso a paso cómo resolvimos un problema de merge y ramas duplicadas en Git.

---

## Contexto

Tenías la siguiente estructura de ramas:

```
main -> Dev -> clase_3
```

Se cometió un error al hacer merge de `clase_3` a `dev` (minúscula) en lugar de `Dev`. Posteriormente, la rama `dev` se eliminó, y Git mostraba mensajes confusos:

* `Already up to date` al intentar mergear `clase_3` en `Dev`
* `fatal: Dev cannot be resolved to branch` al hacer push

Además, había referencias atascadas en el remoto.

---

## Paso 1: Verificar ramas locales y remotas

```bash
git branch          # Ver ramas locales
git branch -r       # Ver ramas remotas
```

Esto permite identificar duplicaciones y problemas de mayúsculas/minúsculas.

---

## Paso 2: Limpiar ramas locales incorrectas

```bash
git checkout main
git branch -D dev       # Borra la rama local mal creada
git branch -D Dev       # Borra referencias locales rotas (si existen)
```

> Nota: Si la rama no existe, Git mostrará un error, lo cual es normal.

---

## Paso 3: Limpiar referencias remotas atascadas

En la carpeta del proyecto:

```bash
rm -f .git/refs/remotes/origin/Dev
```

> En Windows PowerShell:

```powershell
del .git\refs\remotes\origin\Dev
```

Luego actualizar el remoto:

```bash
git fetch origin
```

---

## Paso 4: Crear la rama local `Dev` desde el remoto

```bash
git checkout -b Dev origin/Dev
```

Esto asegura que tu rama local esté alineada con el remoto.

---

## Paso 5: Hacer merge de `clase_3` en `Dev`

```bash
git merge clase_3
```

Si Git abre el editor de mensaje de merge, confirma el commit:

* **Vim**: `Esc` → `:wq` → `Enter`
* **Nano**: `Ctrl + O` → `Enter`, luego `Ctrl + X`

---

## Paso 6: Verificar que el merge se haya realizado

### Revisar commits

```bash
git log --oneline --graph --decorate --all
```

### Comparar ramas

```bash
git log Dev..clase_3 --oneline
```

* Si no hay commits listados, `Dev` tiene todos los commits de `clase_3`.

### Revisar cambios de archivos

```bash
git diff Dev clase_3
```

* Si no hay diferencias, el merge está completo.

---

## Paso 7: Subir cambios al remoto

```bash
git push origin Dev
```

---

## Buenas prácticas para evitar este tipo de problemas

* Mantener **nombres de ramas consistentes** (todo minúscula o mayúscula).
* Revisar `git branch -a` antes de mergear.
* Usar `git fetch --prune` para limpiar referencias remotas obsoletas.
* Confirmar merges siempre en el editor de Git.

---

Con estos pasos, el repositorio queda limpio, las ramas alineadas y los merges correctamente aplicados.
