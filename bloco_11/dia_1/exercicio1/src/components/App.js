import '../App.css';
import div from 'react';
import Task from './Task';

function App() {
  const list = [ 'Comrar abacaxi', 'estudar mais sobre react', 'dormir mais', 'comer bem', 'fazer mais exercicios' ]

  return (
    <div>
      <header></header>
      <menu></menu>

      <main>
        {list.map((task, index)=> <Task key={index} text={task} />)}
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
