const path = require("path");
const express = require("express");
const http = require("http");
const SocketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = SocketIo(server, {});

// settings

// routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// static files
app.use(express.static(path.join(__dirname, "public")));

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

const mySerial = new SerialPort("COM4", {
  baudRate: 38400,
});

mySerial.pipe(parser);

mySerial.on("open", function () {
  console.log("Opened Port.");
});

io.on("connection", (socket) => {
  // socket.emit("hello", "world");
  console.log("cliente conectado");
});

mySerial.on("data", function (data) {
  console.log(data.toString());
  // console.log(parseInt(data));
  // console.log(data.toString());
  io.emit("arduino:data", {
    value: data.toString(),
  });
});

mySerial.on("error", function (err) {
  console.log(err.message);
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});
