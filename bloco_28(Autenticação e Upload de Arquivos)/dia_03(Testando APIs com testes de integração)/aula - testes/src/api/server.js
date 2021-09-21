const port = process.env.PORT || 8080;
const app = require('./api');

app.listen(port);
console.log('conectado na porta ' + port);