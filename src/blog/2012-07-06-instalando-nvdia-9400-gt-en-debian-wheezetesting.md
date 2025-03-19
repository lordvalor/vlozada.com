---
layout:  global/base.njk
title: "Instalando Nvdia 9400 GT en debian wheeze/testing"
date: 2012-07-06
description: Este procedimiento es compatible con las tarjetas En Kernel 3.2.0-2-686-pae
categories: Debian
tags:
    - post
    - debian
    - Linux
    - Kernel
---
Este procedimiento es compatible con las tarjetas
**En Kernel 3.2.0-2-686-pae**

[GeForce](https://www.nvidia.es/page/home.html) 9M series:

```console
9800M GTX, 9800M GTS, 9800M GT, 9800M GS, 9700M GTS, 9700M GT, 9650M GT, 9650M GS, 9600M GT, 9600M GS, 9500M GS, 9500M G, 9400M G, 9400M, 9300M GS, 9300M G, 9200M GS, 9100M G
```

Si no estas seguro del modelo de tu tarjeta puedes verificar de la siguiente forma:

```console
sudo  lspci | grep VGA
```

y devuelve algo como

```console
04:00.0 VGA compatible controller: NVIDIA Corporation G96 [GeForce 9400 GT](rev-a1)
```

Actualmente logre hacer el cambio exitoso a debian wheeze y to va funcionado excelente excepto por el driver de la tarjeta de video, no es que no esté funcionando si no que  no se obtiene el rendimiento adecuado y es por el soporte genérico del driver “nouveau” integrado en el kernel.

Ahora para hacer funcionar la tarjeta de video vamos a hacer lo siguiente…!

Primero verificamos que  tenemos instaladas linux-header y linux-imagen de acuerdo la versión de nuestro kernel en mi caso _3.2.0-2-686-pae_

```console
$sudo aptitude search linux-image
```

mostrara el  siguiente resultado:

```console
i A linux-image-3.2.0-2-686-pae     - Linux 3.2 for modern Pc
```

si al principio muestra una “i” es porque el paquete ya se encuentra instalado si muestra una “p” es por que no esta instalado pero esta disponible para ser instalado.

## Instalando Linux-image

Si tu caso te muestra una “p” entonces procedemos a instalar de la siguiente forma:

```console
# aptitude install linux-image-3.2.0-2-686-pae
```

y utilizamos el mismo procedimiento para linux-headers-3.2.0-2-686-pae

luego de instalar verificamos si el driver  nouveau esta cargado de la siguiente forma

```console
# lsmod
```

una manera mas exacta seria con

```console
lsmod | grap  nouveau
```

y lo agregamos a la lista negra para que no se cargue al inicial el sistema.

Con el editor de texto de tu preferencia abrimos el archivo fbdev-blacklist.conf de la siguiente manera

```console
# vim.tiny /etc/modprobe.d/fbdev-blacklist.conf
```

agregamos al final de la linea “blacklist nouveau”  (sin las comillas)  y guardamos los cambios.
luego instalamos:

```console
# aptitude install nvidia-glx nvidia-settings nvidia-xconfig nvidia-xconfig
```

luego de instalar seguramente te dirá que el driver nouveau aun se encuentra cargado y que debe reiniciar…! despues de esto ya podremos tener nuestra tarjeta de video funcionando correctamente.

Espero que les pueda servir de ayuda…!
