const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const controllers = require('./controllers/controllers');
const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/uploads'));
app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  })
);

app.get('/ping', controllers.ping);

/* Cria uma instância do`multer`configurada. O`multer`recebe um objeto que,
nesse caso, contém o destino do arquivo enviado. */
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now()+ "-"+file.originalname);
  }});

const upload = multer({ storage });

app.post('/upload', upload.single('arquivo'), (req, res) => {
  console.log(req);
  res.status(200).json({ message: 'ok', file: req.file })
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});