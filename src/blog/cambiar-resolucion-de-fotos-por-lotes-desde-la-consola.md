---
layout:  global/posts.njk
title: Cambiar resolución de fotos por lotes desde la consola.
date: 2013-06-04
description: Manipulación de imagenes con imagemagick
categories: imagemagick
tags:
    - post
    - imagemagick
---
Hace unos días tenia la tarea de subir ciertas fotografías tomadas con una cámara de 8MP a una pagina web, el problema realmente era que cada fotografías pesaba 2.3MB con una resolución de 3264×2448, algo que a mi parecer no es nada indicado para una galería fotográfica y mucho menos aún con la conexión que tenemos en el país.

El asunto era cambiar o bajar dicho tamaño sin sacrificar la calidad de la fotografías y hacerlo a 28 imágenes, investigando un poco di con una forma bastante sencilla a través de la consola linux el único requerimiento para dicha tarea es tener [imagemagick](https://www.imagemagick.org/script/index.php) instalado.

## Instalando imagemagick en debian

```console
sudo apt-get install imagemagick
```

luego que ya está instalado vamos al directorio en donde están las fotografías que vamos trabajar.

```console
cd /home/ususario/imagenes/album
```

y ejecutamos lo siguiente:

```bash
for IMG in `ls *.jpg`; do convert -sample 20%X20% -quality 85 $IMG reducido-$IMG; done
```

el tiempo que tarda dependerá de la cantidad de fotos y el tamaño de cada una de ellas. El nombre reducido-$IMG seria el prefijo que se le asigna a la fotografía dimensionada, podemos usar el que veamos más conveniente

también podemos hacerlo con otras extensiones como .png, otro detalle que debemos estar pendiente es que algunas cámaras colocan las extensiones con mayúsculas `.JPG` si es así, debemos cambiar dependiendo de nuestros caso. De igual forma podemos jugar con el tamaño, yo logre una buena imagen de una original de 2.3 mb (3264×2448) a una de 66,2kb (653×490).

espero que les sirva de ayuda.
