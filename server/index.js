const path = require("path");
const express = require("express");
const http = require("http");
const SocketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = SocketIo(server, {});

// settings
const PORT = 3000;
const SERIAL_PORT = "COM6";

// routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// static files
// app.use(express.static(path.join(__dirname, "public")));

const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

const mySerial = new SerialPort(SERIAL_PORT, {
  baudRate: 38400, //Serial.begin(38400)
});

mySerial.pipe(parser);

mySerial.on("open", function () {
  console.log("Opened Port.");
});

io.on("connection", (socket) => {
  console.log("Conected Client.");
});

mySerial.on("data", function (data) {
  let value = data.toString();
  console.log(value);
  io.emit("arduino:data", {
    value,
  });
});

mySerial.on("error", function (err) {
  console.log(err.message);
});

server.listen(PORT, () => {
  console.log("Server on port" + PORT);
});
