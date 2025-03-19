---
layout:  global/base.njk
title: Como Optimizar el Uso de Memoria Swap en debian GNU/linux
date: 2018-03-27
description: Optimización de uso de la Memoria Swap
categories: Debian
tags:
   - post
   - debian
---

Actualmente, tenemos la posibilidad de Optimizar el uso de la memoria swap proporcionalmente en [linux](https://en.wikipedia.org/wiki/Linux "GNU/Linux") gracias al **Kernel**.

## ¿Qué es la memoria swap?

También la conocemos como memoria de intercambio y simplemente una partición en el disco duro, el cual su función es nada mas y nada menos que actuar en función de memoria ram virtual siempre y cuando se haya agotado la disponible en el sistema.

El pequeño detalle con esto, es que cuando usamos *SWAP* en lugar de la memoria RAM nuestro sistema se, relentiza por esta razón debemos intentar usar la menor cantidad de swap posible.

## Mejorando un poco el Uso de Memoria Swap en debian GNU/linux

En las versiones de kernels actuales,tenemos la opción **swappiness** con el cual podremos asignar en un valor de 0 a 100, esto daría un indicativo en cuanto a la preferencia de la memoria swap respecto a la RAM

Siempre que elegimos un numero mayor, habrá mas tendencia a utilizar la memoria swap. En cambio, un valor mas bajo tendrá mas preferencia por la memoria RAM, el valor por defecto de `swappiness` es de 60:

Para cambiar esto valores debemos realizar lo siguiente:

## Verificamos el valor actual

```console
$ cat /proc/sys/vm/swappiness
60
```

Si queremos cambiar en tiempo real, lo haríamos a través del uso del sysctl:

```console
sysctl vm.swappiness=30
```

Sin embargo con este método, al realizar un reinicio perderemos dicho cambios, de modo que si queremos hacerlo permanente seria de la siguiente forma:

```console
sudo vim /etc/sysctl.conf
```

entonces si ya existe la linea, la modificamos, de lo contrario agregamos lo siguiente:

```console
vm.swappiness=10
```

El valor es conveniente según los requerimientos de cada sistema, en este caso es mejor ir probando diferentes valores hasta que consideres adecuado a tu rendimiento.
