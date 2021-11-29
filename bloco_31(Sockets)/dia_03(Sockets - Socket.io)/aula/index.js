const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

//socket
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

app.use(express.static(__dirname + '/public'));
app.use(cors());

require('./sockets/ping')(io);
require('./sockets/chat')(io);
require('./sockets/room')(io);

//rotas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/ping.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
