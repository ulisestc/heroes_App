# HeroesApp

Para este proyecto se ocupó la versión 16.2.16 de [Angular CLI](https://github.com/angular/angular-cli).

## Angular Material

La versión de Angular Material que ocupamos fue la 11.2.12.

## NVM

Para la compatibilidad con Angular debido a que es una herramienta para gestionar múltiples versiones de Node.js 

## NPX

Ocupamos NPX que se incluye con npm y nos permite ejecutar comandos de paquetes sin necesidad de instalarlos globalmente.

## Json-server

Ocupamos esta herramienta para simular un backend.

## Git 

Utilizado para el control de las versiones.

## Correr el servidor

Para correr el servdior utilizamos `npx ng serve` . Redirijiendonos a `http://localhost:4200/`. 

## Intruscciiones de instalación

Configuración de Angular:
1. Abrir una terminal (o Git Bash si estás en Windows).
2. Navega a la carpeta donde quieras descargar tu proyecto.
3. Usa el comando git clone con la URL del repositorio principal.

Configuración del servidor:
1. Descargar json-server con el comando npx npm install -g json-server@0.17.4
2. Crea una nueva carpeta paralela a heroes_App llamada heroes_server.
3. Descarga dentro de esta carpeta el archivo db.json que es la "base de datos" necesaria para este proyecto.

## Instrucciones de ejecución

Iniciar el backend:
1. Ejecutar el comando json-server --watch db.json

Iniciar el frontend:
1. Ejecutar el comando npx ng server -o
