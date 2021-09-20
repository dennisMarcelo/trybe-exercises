const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const error = require('./middlewares/error');
const file = require('./api/controller/fileController');

const app = express();
const PORT = 8080;

//config do multer
const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    //Colocar uma mensagem de erro na requisição
    req.fileValidationError = true;

    //Rejeitar o arquivo e não cai no 'storage'
    return cb(null, false);
  }

  //Aceitar o arquivo
  cb(null, true);
}
const storage = multer.diskStorage({
  destination: (req, file, callback) =>{callback(null, 'public/uploads')},
  filename: (req, file, callback) => {
    console.log('funciona');
    const newFileName = `${Date.now()} - ${file.originalname}`
    callback(null, newFileName)
  }
});


const upload = multer({ fileFilter, storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), file.upload);

app.use(error)
app.listen(PORT, () => console.log('servidor rodadndo.'));

// parei no 7 .2