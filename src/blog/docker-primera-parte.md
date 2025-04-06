---
date: 2025-04-01
layout: global/posts.njk
title: Docker Part 1 
description: Instalacion de docker desde cero (primera parte) 
categories: Debian
tags: 
  - post
  - Docker
  - linux
  - Debian    
---

He decidido comenzar a escribir este mini tutorial sobre [Docker](https://www.docker.com/), debido a que muchas personas que recien comienzan en el este mundo de la tecnología, algunos me han pedido que les explique un poco sobre la creación de contenedores, el cual ha calado mucho y que en la actualidad es muy importante aprender usar bien. Ya seas Desarrollador de Software, Administrador de sistema, Arquitecto de soluciones. Incluso si deseas trabajar como QA o cualquiera de las áreas de tecnologías actuales, eventualmente te vas a topar con un  **Contenedor en Docker**.

Este tutorial no prentender abarcar cada uno de los conceptos sobre Docker. si estas leyendo esto quiero creer que ya tienes los conceptos claros de lo que es y de lo que puede hacer docker, solo me enfocare mas que nada en aspectos técnicos, para comenzar a trabajar con Docker de manera básica pero con la posiblidad que luego sigas pronfundizando mas sobre esta tecnología.

Estare plasmando simplemente el resultado de mis investigaciones y compilando información de diversas fuentes o recursos que usé, cuando estuve aprendiendo a utilizar Docker.

Entonces, como cualquier herramienta que vamos a utilizar, debemos instalarla.

## Instalación de  Docker

En esta oportunidad, estaremos trabajando con la instalación en Debian GNU linux en su version 12

Antes de instalar Docker Engine, necesitamos desinstalar cualquier paquete relacionado con Docker que nos pueda generar un conflicto de versiones, esto debido a que lo mas seguro es que al instalar Debian, este ya venga con unos paquetes no-oficiales:

normalmente estos paquetes son:

- `docker.io`
- `docker-composer`
- `docker-doc`
- `podman-docker`

Dicho esto, lo que debemos ejecutar en nuestra consola para remover estos paquetes seria el siguiente comnando:

```bash
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

Sin embargo, luego de ejecutar esto es posible que `apt-get` nos informe que no hay de estos paquetes instalados.

Tambíen es importante mencionar que si haz usando docker con estos paquetes por defecto, al hacer esta desinstalación, lo que son, Imagenes, Contenedores, Volumenes y networks, son almacenadas en `/var/lib/docker` y NO son eliminados automáticamente al desinstalar Docker, asi que si lo que quieres es realizar una instalación limpia y deseas remover esa data existente, debemos realizar los siguientes pasos.

## Desinstalar Docker Engine

1- Desinstalamos Docker Engine, CLI, containerd y Docker composer por completo

```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

2- Imágenes, contenedores, volumenes, o configuraciones personalizadas en tu host NO seran removidos automáticamente asi que para borrar todo debemos hacer lo siguiente:

```bash
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd/
```

3- Eliminamos las llaves del source.list

```bash
 sudo rm /etc/apt/sources.list.d/docker.list
 sudo rm /etc/apt/keyrings/docker.asc
```

## Instalamos usando el repositorio apt

Antes de instalar por primera vez Docker en una nueva maquina, necesitas configurar los repositorios de Docker en `apt` y luego se podra instalar la última versión de docker.

1- Configuramos repositorios de Docker.

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

> **NOTA** Si usas una Distribución derivada de debian, como Kali Linux, you necesitas substituir la parte de este comando donde dice CODENAME. `$(. /etc/os-release && echo "$VERSION_CODENAME")`
Remplaza la parte donde dice condename por la versión que corresponda, como es `bookworm`, por ejemplo.

2- Instalamos los paquetes de docker en su última versión.

```bash
 sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3- Ahora para verificar que tenemos Docker funcionando correctamente corremos la típica imagen de prueba `hello-world`.

```bash
 sudo docker run hello-world
```

Este comando, lo que hace es descargar una imágen de prueba y levantar el Contenedor, cuando este contenedor corre, imprime un mensaje de confirmación y sale.

Si todo ha sido exitoso, ahora tu tienes La última versión de Docker Engine instalada correctamente.

Si hasta acá tienes alguna duda, recuerda consultar la [documentacion Oficial de Docker](https://docs.docker.com/)
