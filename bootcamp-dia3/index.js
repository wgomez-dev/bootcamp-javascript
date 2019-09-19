const express = require("express");
const app = express();
const port = 3000;

const usuarios = [
  { nombre: "usuario0" },
  { nombre: "usuario1" },
  { nombre: "usuario2" },
  { nombre: "usuario3" },
  { nombre: "usuario4" },
  { nombre: "usuario5" },
  { nombre: "usuario6" }
];

app.get("/", function(req, res) {
  res.send("hola soy la ruta raíz");
});

app.get("/usuarios", function(req, res) {
  res.send(usuarios);
});

app.get("/usuarios/:index", function(req, res) {
  if (usuarios[req.params.index]) {
    res.send(usuarios[req.params.index]);
  } else {
    res.send(`no existe usuario con index = ${req.params.index}`);
  }
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});