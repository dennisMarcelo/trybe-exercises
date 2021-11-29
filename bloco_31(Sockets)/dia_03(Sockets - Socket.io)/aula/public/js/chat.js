/* Note que na linha 1, mudamos a chamada da função io() para window.io() , isso serve para enfatizar que a função io é uma função injetada ao objeto window do DOM da página. Dessa forma, conseguimos seguir utilizando nosso socket, mas agora em um arquivo separado. */

// por padrão ele se conecta ao servidor onde esta rodando, caso queira rodar em um sevidor diferente, basta passar a url como parametro do 'io()'; 
const socket = window.io();

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', inputMessage.value);
  inputMessage.value = '';
  return false;
});

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

socket.on('serverMessage', (message) => createMessage(message));

// Força o encerramento de uma conexão socket.
window.onbeforeunload = function(event) {
  socket.disconnect();
};
