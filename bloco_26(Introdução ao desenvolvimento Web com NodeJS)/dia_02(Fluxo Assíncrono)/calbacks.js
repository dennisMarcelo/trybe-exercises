const fs = require('fs');

fs.readFile('./texto.txt', (err, resoponse)=> {
  if (err) {
    console.log(`Erro ao ler aqruivo: ${err.message}`);
  }

  console.log(`Arquivo lido com sucesso. conteúdo: `)
  console.log(`------------------------------------`)
  console.log(resoponse.toString('utf-8'))
});



// --------------------------- para baixo é tudo callback-----------------------

// fs.readFile('./texto.txt', (err, file1Content) => {
//   if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

//   console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

//   fs.readFile('./texto.txt', (err, file2Content) => {
//     if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

//     console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

//     fs.readFile('./texto.txt', (err, file3Content) => {
//       if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

//       console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
//     });
//   });
// });

// const file3Callback = (err, file3Content) => {
//   if (err) return console.log(`Erro ao ler o arquivo 3: ${err.message}`);

//   console.log(`Lido file3.txt com ${file3Content.byteLength} bytes`);
// };

// const file2Callback = (err, file2Content) => {
//   if (err) return console.log(`Erro ao ler o arquivo 2: ${err.message}`);

//   console.log(`Lido file2.txt com ${file2Content.byteLength} bytes`);

//   fs.readFile('./texto.txt', file3Callback);
// };

// const file1Callback = (err, file1Content) => {
//   if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);

//   console.log(`Lido file1.txt com ${file1Content.byteLength} bytes`);

//   fs.readFile('./texto.txt', file2Callback);
// };

// fs.readFile('./texto.txt', file1Callback);