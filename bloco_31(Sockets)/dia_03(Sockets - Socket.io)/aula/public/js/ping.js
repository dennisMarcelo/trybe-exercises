/* Note que na linha 1, mudamos a chamada da função io() para window.io() , isso serve para enfatizar que a função io é uma função injetada ao objeto window do DOM da página. Dessa forma, conseguimos seguir utilizando nosso socket, mas agora em um arquivo separado. */

// por padrão ele se conecta ao servidor onde esta rodando, caso queira rodar em um sevidor diferente, basta passar a url como parametro do 'io()'; 
const socket = window.io();

const button = document.querySelector('#pingButton');
button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

// cria uma `li` e coloca dentro da `ul` com `id` mensagens
const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

// Quando nosso evento `ola` for emitido, vamos pegar a string mensagem enviada pelo nosso evento e passar para a função `createMessage`
socket.on('ola', (mensagem) => createMessage(mensagem));
socket.on('pong', (mensagem) => createMessage(mensagem));