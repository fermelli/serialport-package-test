# Pruebas del paquete Serial-Port para comunicacion con Arduino

Para el ejemplo se utiliza una Placa Arduino que mediante un Modulo Bluetooh permite a una aplicacion de celular controlar un contador con visualizador de 7 segmentos.

Esta es una prueba de concepto para verificar que se recibe a travez del paquete de [Puerto Serial](https://serialport.io/) de Node y con Express se puede realizar una Aplicacion Web.

## Codigo para la Placa Arduino

[Archivo .ino](./codigo_arduino/contador_con_visualizador_controlado_por_bluetooh/contador_con_visualizador_controlado_por_bluetooh.ino)

## Dependencias

```console
npm install
```

## Funcionamiento

Establecer el puerto para la aplicacion de Express

```js
// server/index.js
const PORT = 3000; //linea 11
```

Establecer el puerto serial a la que esta conectada la Placa Arduino

```js
// server/index.js
const SERIAL_PORT = "COM6"; // linea 12
```

Iniciar la aplicacion de Express

```console
node server/index.js
```

Abrir en el navegador [http://127.0.0.1:3000/](http://127.0.0.1:3000/) o en el puerto en el cual se establecio
