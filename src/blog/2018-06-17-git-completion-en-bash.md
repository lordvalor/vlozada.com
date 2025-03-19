---
layout:  global/base.njk
title: "git-completion en bash"
date:  2018-06-17
description: Haciendo uso de Bash completion con git
categories: Git
tags:
    - post 
    - git
    - bash
---

Si eres usuario bash puedes acceder algunas funciones de tu shell para potenciar tu experiencia con git y git-completion para hacerlo más amigable. Git Realmente contiene varios complementos para varios shell pero no están activados por defecto. Unas de las características de GIT es su auto completado, por ejemplo si escribimos `git chec` y tabulamos dos veces, vera que auto completa a `git checkout` si en su caso no lo hace, solamente deberá instalarlo de la siguiente manera:

```console
sudo apt-get install bash-completion
```

Luego de instalar, veremos que ya obtendremos la característica de auto completado.

## Personalizando mensaje

También podremos personalizar el mensaje sobre la información del repositorio git. Esto es realmente un proceso bastante simple (debería serlo).
Normalmente se desea ver el directorio actual donde nos encontramos trabajando y el estado del directorio.

## Configuración de Git-completion en bash

En este caso debemos, con nuestro editor de (texto preferido) abrir el archivo `.bashrc` y agregar al final del archivo lo siguiente:

```bash
# Git Bash Completion and folder status

export PS1='\u@\h:\w\[\033[32m\]$(__git_ps1 " (%s)")\[\033[0m\]$ '

export GIT_PS1_SHOWDIRTYSTATE=true
export GIT_PS1_SHOWSTASHSTATE=true
export GIT_PS1_SHOWUNTRACKEDFILES=true
export GIT_PS1_SHOWUPSTREAM="auto"

```

El `\w` significa imprimir el directorio de trabajo actual, la parte `\$` imprime el `$` del prompt, y `__git_ps1 "(% s)"` llama a la función provista por git-prompt.sh con un argumento de formateo. Ahora nuestro prompt bash se verá así cuando esté en cualquier lugar dentro de un proyecto controlado por **Git**:

Visualizando **`~/projects/cv (master=)$`**

Ahora guardamos los cambios y luego debemos cerrar y volver abrir nuestro terminal para que funcione.

ahora veremos claramente que nos muestra el directorio donde estamos y el `branche` en el que nos encontramos trabajando.

**Bash completion** vienen con documentación útil; Eche un vistazo al contenido de git-completion.bash y git-prompt.sh para más información.

[Referencia: git-scm](https://www.git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash)

*[GIT]: Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.
*[shell]: A Unix shell is a command-line interpreter or shell that provides a traditional Unix-like command line user interface.
