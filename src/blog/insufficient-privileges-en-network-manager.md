---
layout:  global/posts.njk
title: Solucionando problema (32) insufficient privileges en network-manager
date: 2012-11-20
description: network-manager
categories: Debian
tags:
    - post
    - debian 
    - Linux
---

Al instalar Debian en una [Acer Aspire One d-250](https://en.wikipedia.org/wiki/Acer_Aspire_One) Teniendo razones obvias de rendimiento me decido por **Openbox** como entorno de escritorio.

Luego de mucho tiempo usando como gestor de interfaces de redes **WICD** decidí que era hora de darle una oportunidad al amado por mucho y odiado por algunos **Network-Manager.**

Posterior a la configuración de **tint2,** para poder hacer que network-manager se muestre en el systemtray días después tengo la oportunidad de probar mi conexión wifi pero resulta que al tratar de conectarme, me tope con un fabuloso aviso diciéndome “Failed to add new connection: (32) insufficient privileges”.

Entonces procedo a investigar cual es la causa de este inconveniente.

y simplemente es que como yo siempre instalo Debian como sistema base "Netinstall" y luego voy instalando y configurando lo que necesito, encontré la solución y realmente es sencilla.

### Solucionando problema (32) insufficient privileges en network-manager

Primero, debemos agregar nuestro usuario regular al group `netdev` de la siguiente manera:

`adduser tusuario netdev`

Posteriormente nos vamos al directorio.

`cd /etc/polkit-1/localauthority/50-local.d/`
allí creamos un archivo con el siguiente nombre:

`org.freedesktop.NetworkManager.pkla`
Luego y con el editor de su preferencia le agregamos lo siguiente.

```console
Identity=unix-group:netdev
Action=org.freedesktop.NetworkManager.*
ResultAny=yes
ResultInactive=no
ResultActive=yes
```

Guardamos y Reiniciamos el Network-manager

```console
# /etc/init.d/network-manager restart
```

Listo ya deberíamos poder acceder a nuestra conexión wifi desde el applet del network-manager.
