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

Establecer el puerto serial a la que estara conectado la Placa Arduino

```js
// server/index.js
const PORT = "COM4"; // linea 11
```

```console
node server/index.js
```

Abrir en el navegador [server/index.html](server/index.html)
