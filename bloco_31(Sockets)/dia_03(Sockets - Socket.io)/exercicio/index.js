const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

// socket
const io = require('socket.io')(http, {
  cors:{
    origin: 'http://localhost:3000',
    methods:[ 'POST', 'GET'],
  },
});

require('./sockets/feed')(io);

app.use(express.static(__dirname + '/public'));
app.use(cors());

//rotas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/feed.html');
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});