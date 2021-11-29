module.exports = (io) => io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);

  let contLik = 0;
  let countStart = 0

  socket.on('likePost', () => {
    contLik++
    io.emit('likes', contLik)
  });

  socket.on('starPost', () => {
    countStart++
    io.emit('stars', countStart)
  })
});