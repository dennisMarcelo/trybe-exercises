module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');

  socket.on('clientMessage', (message) => {
    // io envia para todos
    io.emit('serverMessage', message);

  });
  
  //  enviar uma mensagem para todos os outros clientes, exceto para quem disparou um evento
  socket.broadcast.emit('serverMessage', `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`);

  // envia menssagem quando usuário desconect
  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
  });

});