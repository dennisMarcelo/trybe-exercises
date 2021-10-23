module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    // o join parece criar uma sala
    socket.join(room);

    socket.emit('serverMessage', `Bem vindo ${username} a sala sobre ${room}`);

    socket.broadcast.to(room).emit('serverMessage', `${username} acabou de entrar na sala`);

    // e o 'io to'parece que serve para redirecionar tudo para a sala criado no join
    socket.on('roomClientMessage', ({ message, room}) => {
      io
        .to(room)
        .emit('serverMessage', `${username}: ${message}`)
    });
  });
});