const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// middleware
  //parsear as informações para um formato compreensível para o back-end, caso vai ser JSON.
  app.use(bodyParser.json());


// datas
const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

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
  app.get('/recipes', (_req, res)=>{
    const recipesSorted = recipes.sort((a, b) => funcSort(a, b));
    res.status(200).json(recipesSorted);
  });

  app.get('/drinks', (_req, res) => {
    const drinkSorted = drinks.sort((a, b) =>funcSort(a, b));
    res.status(200).json(drinkSorted);
  });


  // Rotas com POST (serve para criar)
  app.post('/recipes', (req, res) => {
    const { id, name, price, waitTime } = req.body;
    const {token} = req.headers;
    
    if(token !== "10Acla!20" ) return res.status(401)
      .json({message: "token invalido"});

    recipes.push({id, name, price, waitTime });
    res.status(201).json({message:"receita criada com sucesso"});
  })


  // Rotas com PUT (serve para atualizar)
  app.put('/recipes/:id', (req, res)=> {
    const { id } = req.params;
    const { name, price } = req.body;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
    
    if(recipeIndex === -1) return res.status(404)
      .json({message: 'Recipe not found!' })

    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price }; 
    res.status(204).json({message: "atualizado com sucesso" }); 
  });


  // Rotas delete (serve para deletar)  
  app.delete('/recipes/:id', function (req, res) {
    const { id } = req.params;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  
    if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  
    recipes.splice(recipeIndex, 1);
  
    res.status(204).end();
  });


  //Query String
    // rotas mais especificas devem ir primeiro por causo do express
    // para chamar: /drinks/search?name=Cerveja&price=4
  app.get('/drinks/search', (req, res) => {
    const { name, price } = req.query;
    console.log(typeof name, typeof price);
    const filteredDrink = drinks
      .filter((d) => d.name.includes(name) && d.price >= price);
    res.status(200).json(filteredDrink);
  });


  //Parâmetros de rotas
  app.get('/recipes/:id', (req, res)=> {
    const { id } = req.params;
    const findedRecipe = recipes.find((r) => r.id === Number(id))
    if (!findedRecipe) return res.status(404)
      .json({message: 'Recipe not found!'})  

    res.status(200).json(findedRecipe);
  })

  app.get('/drinks/:id', (req, res)=> {
    const { id } = req.params;
    const findedDrink = drinks.find((r) => r.id === Number(id))
    if (!findedDrink) return res.status(404)
      .json({message: 'Drink not found!'})  

    res.status(200).json(findedDrink);
  })
  
  
  //Trantando rotas que não Existem
  // essa rota tem que ir por ultimo para não dar problema nas outras
  app.all("*", (req, res) => res.status(404).json({message: `Rota '${req.path}' não existe!`}))



app.listen(3001, (req, res)=>{
  console.log('aplicação ouvindo na porta 3001')
});