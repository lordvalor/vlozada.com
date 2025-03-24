---
layout:  global/posts.njk
title: Instalación Prestashop 1.7 en AWS
date: 2017-06-22
description: Instalación Básica de Prestashop 1.7 en una instancia AWS ec2 en ubuntu
categories: Prestashop
tags:
   - post
   - Prestashop
   - AWS
---

Instalación Básica de [Prestashop 1.7](https://www.prestashop.com/en) en una instancia [AWS](https://aws.amazon.com/) ec2 en ubuntu

**Instalación paso a paso en _EC2-AWS_ con _Ubuntu Server_**

Herramientas:

* wget
* unzip
* ssh
* chmod chown

## Conectando "servidor desarrollo"

Para conectarnos al Servidor Desarrollo, usando las credenciales asignadas de la siguiente manera:

`ssh -i ~./ssh/keyName.pem usuario@ec2-xx-x-xx-228.compute-1.amazonaws.com`

## 1 Descargando PrestaShop Version 1.7 Estable

En este caso, trabajaremos bajo el directorio /var/www/html/

`cd /var/www/html/`

y creamos el directorio donde instalaremos, para este caso le llamaremos `ps_test`

`sudo mkdir ps_test`

**si solicita contraseña, coloca la misma de las credencial de usuario al conectarse.**

entramos al directorio creado.

`cd ps_test`

## Descarga

Procedemos a descarar prestashop de la siguiente manera, usando el comando `wget`.

`sudo wget https://download.prestashop.com/download/releases/prestashop_1.7.1.2.zip`

Luego de terminar la descarga, procedemos a descomprimir:

`unzip prestashop_1.7.1.2.zip`

obtendremos la siguiente salida:

```console
Archive:  prestashop_1.7.1.2.zip
  inflating: prestashop.zip          
  inflating: index.php               
  inflating: Install_PrestaShop.html
```

En este punto, si hemos seguido paso a paso, podriamos acceder a travez del navegador y obtendremos la primera pagina de Prestashop que nos indica que podemos continua con la instalación:

`http://120.xx.xx.xx/ps_test/`

> Donde **120.xx.xx.xx** será la IP de nuestro servidor.

## 2 Creando DB mysql

Conectando a mysql (Debe solicitar credenciales para acceder a la Instancia mysql).

`mysql -u usuario -p`

> donde "usuario" y password será el proporcionado por el administrador de sistemas.

luego de acceder a nuestra instancia

```mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 140
Server version: 5.7.18-0ubuntu0.16.04.1 (Ubuntu)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>

```

Para ver los nombres de las DB's existentes Escibimos lo siguiente:

`show databases;`

 y obtendremos la siguiente salida:

```mysql
 mysql> show databases;
+--------------------+
| Database           |
+--------------------+
|db_tes1             |
|db_tes1.1           |
|db_tes2             |
+--------------------+
```

De esa manera veificamos que no se repita el nombre de la db que usaremos.

Precedemos a crear la DB necesaria para nuestro prestaShop de prueba.

`create database prestashop_test;`

eso nos devolverá lo siguiente:

```mysql
Query OK, 1 row affected (0.00 sec)
```

para verificar que se ha creado nuestra DB con el nombre asignado, volvemos a escribir:

`show databases;`

y deberiamos ver lo siguiente:

```mysql
 mysql> show databases;
+--------------------+
| Database           |
+--------------------+
|db_tes1             |
|db_tes1.1           |
|db_tes2             |
|prestashop_test     |
+--------------------+
```

Hasta acá, ya tenemos preparada nuestra DB para continuar con la instalación y podemos salir de nuestra instancia MYSQL:

escribimos.

`\q`

```console
Bye 
```

## Instalación

Ahora que ya tenemos todo preparado para la instalación, debememos descomprimir nuestra Tienda prestaShop:

`sudo unzip prestashop.zip`

Luego que comienza a descomprimir, en algun punto nos pide reemplazar el archivo index.php existente:

```console
replace index.php? [y]es, [n]o, [A]ll, [N]one, [r]ename:
```

Y le decimos que si, presionando `y` **[y]es:**

En este punto, si todo ha salido bien, deberiamos ir a nuestro navegador y escribimos nuevamente:

`http://120.xx.xx.xx/ps_test/`

> Donde **120.xx.xx.xx** será la IP de nuestro servidor.

y automaticamente seremos redireccionados a la pagina de instalación:

`http://120.xx.xx.xx/ps_test/install/`

El cual nos muestra un asistente para continuar la configuración de la tienda:

-Seleccionamos el Idioma y presionamos **[NEXT]**.
-Aceptamos el License Agreements y presionamos  **[NEXT]**.

En este punto, probablemente nos muestra una ventana con algunos **Warning** relacionados con permisos de nuestros archivos.

Regresamos a nuestro terminal y nos regresamos al directorio principal para asignar los permisos necesarios:

`cd /var/www/html/`

escribimos los siguientes comandos:

`sudo chown -R www-data:www-data ps_test`

**Esto asigna el propietario y grupo del servidor web para obtener permisos de escritura.**

Si regresamos a nuestro navegador, presionamos **REFRESH** y deberia mostrar un cuadro verde con el siguiente mensaje:

**_PrestaShop compatibility with your system environment has been verified!_**

Presionamos **[NEXT]** y nos pedira los datos sobre nuestra tienda como el nombre, direccion, email, país, usuario administrador, etc.

completamos todos los datos y presionamos **[NEXT].**

**_NO OLVIDES LA CONTRASEÑA QUE LE COLOCASTE_**

## Conectando con la base de datos

En este punto, el sistema te solicita los datos para conectarte a la DB que creamos en el paso 2,

Los datos que solicita son los siguientes:

-**Database server address** podremos dejar como viene por defecto `127.0.0.1` o escribimos `localhost`.

-**Database name** acá escribimos el nombre de la db que hemos creado, en este ejemplo se usó `prestashop_test`

-**Database login** Aquí colocas el usuario que te haya asignado el Administador de Sistemas.

-**Database password** y Aca, el password que te haya asignador el Administador de Sistemas.

-**Tables prefix** hace referencia a prefijo que utilizaran las tablas creadas por PrestaShop, esto es mejor dejarlo extamente como está. por defecto es `ps_`

Presionamos **[NEXT]** y lograremos ver una barra de progreso realizando la instalación de nuestra tienda y si todo sale perfecto lograremos ver el siguiente mensaje:

_Your installation is finished! You have just finished installing your shop. Thank you for using PrestaShop! Please remember your login information:_
