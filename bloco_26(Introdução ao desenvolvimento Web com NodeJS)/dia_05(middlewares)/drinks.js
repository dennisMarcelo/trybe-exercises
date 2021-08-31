const express = require('express');
const router = express.Router();

// datas
const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0, alcolic:false },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0, alcolic:false },
  { id: 3, name: 'Suco 300ml', price: 4.0, alcolic:false },
  { id: 4, name: 'Suco 1l', price: 10.0, alcolic:false },
  { id: 5, name: 'Cerveja Lata', price: 4.5, alcolic:true },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0, alcolic:false },
  { id: 7, name: 'Cerveja garrafa 500 ml', price: 3.0, alcolic: true },
];


// functions
function funcSort (a, b) {
  if(a.name < b.name){
    return -1 
  } else if( a.name > b.name) {
    return 1
  } else {
    0
  }
}

// routes
  // rotas normais
  router.get('/', (_req, res) => {
    const drinkSorted = drinks.sort((a, b) =>funcSort(a, b));
    res.status(200).json(drinkSorted);
  });

  // Rotas com PUT (serve para atualizar)
  router.put('/:id', (req, res)=> {
    const { id } = req.params;
    const { name, price, alcolic } = req.body;
    const username = req.user; // usuário q veio do middleware.

    const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));
    if(drinkIndex === -1) 
      return res.status(404).json({message: 'Recipe not found!' })

    drinks[drinkIndex] = {
      ...drinks[drinkIndex],
      name,
      price,
      alcolic,
      updatedBy: username.username
    };

    res.status(204).json({message: "atualizado com sucesso" }); 
  });


module.exports = router;