const server = require('net').createServer();

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
server.on('connection', (socket) => {
  console.log('Cliente conectado');

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  server.getConnections((err, count) => {
    console.log('QTD de cliente conectados:' +count);
  })

  socket.on('data', function(data) {
    socket.write(data);
  });

  /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  socket.write('Mensagem do servidor!\r\n');
  socket.pipe(socket);
})


/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});