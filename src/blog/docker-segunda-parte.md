---
date: 2025-04-06
layout: global/posts.njk
title: Docker Part 2
description: Instalación de docker desde cero (Segunda parte) 
categories: Debian
tags: 
  - post
  - Docker
  - linux
  - Debian
---

En nuestra **primera parte** de [Instalación de docker desde Cero](/blog/docker-primera-parte/) dejamos perfectamente instalado y trabajando todo para comenzar a conocer mas sobre contenedores.

Pues manos a las obra. comenzamos a conocer sobre contenedores Docker y algunos de sus principales comandos.

Cuando trabajamos con contenedores, vamos a encontrar muchos de ellos listos para trabajar, solo descargarlos y levantar su contenedor. Toda esta gama de contenedores la podemos encontrar al alcance de un `docker pull`, la mayoria de imagenes oficiales estan alojadas en [Docker Hub](https://hub.docker.com/)

Sin embargo, uno de los casos que siempre debemos tener en cuenta es trabajar con imagenes y/o contenedores propios o con algunos cambios que necesitamos puntualmente con los cuales queremos muchas veces tomar un contenedor existente, modificar algo puntualmente y luego crear una imagen a partir de ella.

Dicho esto, aca les traigo un ejemplo en el que vamos a descargar una imagen de debian, instalamos Nginx y luego crearemos una imagen de Debian con Nginx y con nuestras modificaciones.

## Descargamos la Imagen de la última version de Debian

```bash

docker pull debian:latest
```

Luego de terminar la descarga verificamos que ya tenemos la imagen

```bash
$ docker images

REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
debian       latest    49081a1edb0b   2 week ago   117MB

```

## Levantamos el contenedor e instalamos Nginx

```bash
docker run debian /bin/bash -c "apt-get update; apt-get -y install nginx"
```

Esto inicia el `contenedor` con la imagen  `debian:latest` descargada previamente y luego procede a instalar nginx en dicho contenedor.

comprobamos que nuestro contenedor esta funcionando con los cambios (instalación) que acabamos de realizar.

```bash
docker ps -a | head -2  
```

La salida nos indica que efectivamente se esta ejecutando un contenedos con la imagen de debian y el comando `apt-get install` que hicimos.

```bash
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                       PORTS     NAMES
22d1b1ecdd1b   debian    "/bin/bash -c 'apt-g…"   13 seconds ago   Exited (0) 1 second ago                sharp_wilbur
```

## Guardando los cambios en una imagen docker

Ahora bien, queremos conservar estos cambios en una imagen para reutilizar en un futuro en otros proyectos similares, lo hacemos de la siguiente manenra, y para ellos necesitamos el `Docker ID` que se muestra en la primera columna.

```bash
docker commit 22d1b1ecdd1b vlozada/debian-nginx
sha256:5a202ab0ab76404d7a13a6c18980a79d9a6fcfd7ece88b393f1d44835f1c0c81

```

De esta manera hemos generado una imagen basada en debian con nuestros cambios y lo podemos comprobar con el comando `docker images`

```bash
$ docker images

REPOSITORY               TAG       IMAGE ID       CREATED          SIZE
vlozada/debian-nginx   latest    5a202ab0ab76   12 seconds ago   153MB
debian                   latest    49081a1edb0b   9 days ago       116MB


```

Listo, ahora podemos generar un contenedor usando nuestra imagen personalizada basada en debian.

```bash
docker run srv.world/debian-nginx /usr/bin/which nginx

/usr/sbin/nginx 
```
