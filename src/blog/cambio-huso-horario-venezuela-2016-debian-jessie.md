---
layout:  global/posts.njk
title: Cambio huso horario Venezuela 2016 Debian jessie
date: 2016-05-03
description: Configuracion de huso horario con tzdata en Debian Linux
categories: Debian
tags:
  - post
  - Linux
  - tzdata
  - debian
---

Como ya todos sabemos, a partir de este primero de mayo 2016, entró en vigencia nuestro nuevo ~~antiguo~~ huso horario, el cual pasa a ser UTC -4:30 a -4:00 ofreciendo una diferencia horaria de +30min.

En pocas palabras, a partir de este 01-05-16 a las 2:30am debemos actualizar de manera manual o automática nuestros dispositivos, adelantándolo media hora.

## tzdata en debian estable

Para los que usamos Debian sea en su computador personal o en servidores, la versión estable. Ya existe la actualización del paquete [tzdata](https://packages.debian.org/search?keywords=tzdata&amp;searchon=names&amp;suite=all§ion=all)

## Descarga

Lo primero que debemos hacer es descargar el paquete **tzdata**

```console
# wget -c http://ftp.us.debian.org/debian/pool/main/t/tzdata/tzdata_2016d-0+deb8u1_all.deb
```

## Instalación

luego procedemos a instalar de la siguiente manera:

```console
dpkg -i tzdata_2016d-2_all.deb
```

luego de ser instado, verificamos los cambios.

```console
# zdump -v /etc/localtime
```

y deberíamos tener una salida como la siguiente.

```console
/etc/localtime  -9223372036854689408 = NULL
/etc/localtime  Wed Jan  1 04:27:43 1890 UT = Tue Dec 31 23:59:59 1889 LMT isdst=0 gmtoff=-16064
/etc/localtime  Wed Jan  1 04:27:44 1890 UT = Wed Jan  1 00:00:04 1890 CMT isdst=0 gmtoff=-16060
/etc/localtime  Mon Feb 12 04:27:39 1912 UT = Sun Feb 11 23:59:59 1912 CMT isdst=0 gmtoff=-16060
/etc/localtime  Mon Feb 12 04:27:40 1912 UT = Sun Feb 11 23:57:40 1912 VET isdst=0 gmtoff=-16200
/etc/localtime  Fri Jan  1 04:29:59 1965 UT = Thu Dec 31 23:59:59 1964 VET isdst=0 gmtoff=-16200
/etc/localtime  Fri Jan  1 04:30:00 1965 UT = Fri Jan  1 00:30:00 1965 VET isdst=0 gmtoff=-14400
/etc/localtime  Sun Dec  9 06:59:59 2007 UT = Sun Dec  9 02:59:59 2007 VET isdst=0 gmtoff=-14400
/etc/localtime  Sun Dec  9 07:00:00 2007 UT = Sun Dec  9 02:30:00 2007 VET isdst=0 gmtoff=-16200
/etc/localtime  Sun May  1 06:59:59 2016 UT = Sun May  1 02:29:59 2016 VET isdst=0 gmtoff=-16200
/etc/localtime  Sun May  1 07:00:00 2016 UT = Sun May  1 03:00:00 2016 VET isdst=0 gmtoff=-14400
/etc/localtime  9223372036854689407 = NULL
/etc/localtime  9223372036854775807 = NULL
```

Verificamos las dos ultimas lineas que nos muestran los cambios referentes al 01/05/16 que nos indica el incremento de los 30min, la nueva antigua hora local

## Cambiando hora al hardware

Para transferir los cambios al la hora de la tarjeta madre, lo hacemos de la siguiente manera:

```console
# hwclock --systohc --utc
```

systohc Colocará la nueva hora al reloj del sistema

nuevamente Verificamos los cambios de la siguiente manera:

`# timedatectl status`

y nos devolverá algo como esto:

```console
  Universal time: mar 2016-05-03 19:13:41 UTC
        RTC time: mar 2016-05-03 19:13:40
       Time zone: America/Caracas (VET, -0400)
     NTP enabled: no
NTP synchronized: yes
 RTC in local TZ: no
      DST active: n/a
```

Ya, de este modo tendremos nuestro servidor con Debian actualizado a los nuevos cambios horarios del país.

Espero haberles que ayudado.

Fuente: [juantrucupei](https://juantrucupei.wordpress.com/2016/04/25/cambio-huso-horario-venezuela-2016/)
