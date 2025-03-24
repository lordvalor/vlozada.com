---
layout:  global/posts.njk
title: Instalación de VIM
date: 2022-02-22
description: Instalacion Básica de VIM para comenzar desde cero.
categories: vim
tags:
    - post
    - vim
---

Finalmente de vuelta en mi blog, y comenzamos con una serie de post Sobre **VIM**, Despues de mucho tiempo retomamos con una Instalción básica de [vim](https://www.vim.org/) para comenzar desde cero.

Primero que nada, Para comenzar es necesario dar una pequeña introducción de lo que es VIM y como utilizarlo por primera vez.

Si eres Usuario Linux o has trabajado con algún sistema Unix, seguramente habras escuchado mencionar **VIM** en algún momento de tu carrera.

De forma resumida, podriamos decir que vim es una versión mejorada de **vi**, presente en todos los sistemas UNIX. se puede usar desde la terminal y lo que lo hace más atractivo para muchos es que se controla por completo mediante comandos del teclado, prescindiendo casi por completo del raton, pero eso no queire decir que solo trabaja en modo texto, tambien tiene una interfaz gráfica. Es decir que podemos usar menús y tener soporte para el raton. pero no solamente es exclusivo para Sistemas UNIX si no que tambien se encuentra disponible para Windows. [Acá una explicación mas extensa acerca de vim](https://www.vim.org/6k/features.es.txt)

## Instalación

```console
# apt -y install vim
```

Luedo de instalado ya tendremos instalado vim de forma básca y funcional en nuestro sistema.

## Configuración

El archivo de configuración de vim, lo encontramos en `/etc/vim/vimrc`, sin embargo al trabajar con este archivo, la personalización de esa configuración tendra efecto solo en el usuario administrador o root.

Para personalizarlo para nuestro usuario, en el caso de Linux. podemos realizar una copia del archivo anteriormente mencionado, o creamos un archivo desde cero el directorio de nuestro usuario.

```bash
touch ~/.vimrc
```

En este archívo podemos comenzar a personalizar, activar funciones segun lo que necestimos. Pero comencemos con lo basico para ir extendiendo nuestra configuración.

Abrimos nuestro archivo `~/.vimrc` con el editor de texto de preferencia y empezamos a escribir lo siguiente:

> Nota: Los los comentarios en el archivo vimrc comienzan con ( " )

```vim
" Habilitar para resaltar la sintaxis del lenguaje que uses por default. 
syntax on
```

```vim
" Mostrar Parcialmente los comando en la linea de estatus
set showcmd
```

```vim
" Hacer coincidencias insensibles a mayúsculas y minúsculas.
set ignorecase
```

```vim
" Hacer uso de coincidencua inteligente
set smartcase
```

```vim
" Búsqueda Incremental 
set incsearch
```

```vim
" Guardado automatico despues de los comandos :next y :make
set autowrite
```

```vim
" Esconder buffers cuando son abandonados
set hidden
```

```vim
" Habiltar el uso del mouse (en todos los modos)
set mosue=a
```

```vim
" Agregar numero de lineas
set number
```

Luego de haber agregado dichas lineas, si no hubo errores, podemos entrar a vim y notaremos algunos cambios, como la nuneración de lineas del lado izquierdo, entre otras.

solo necesitamos ejecutar desde nuestro terminal el comando `vim`

En el próximo post estaremos viendo un poco más a profundidad la personalización de vim y algunos comando importantes para comenzar a usarlo.
