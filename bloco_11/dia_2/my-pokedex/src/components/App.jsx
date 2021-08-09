import '../App.css';
import data from '../data'
import PokemonCard from './PokemonCard'

function App() {
  return (
    <div className="app">
      <h1>PokeDex</h1>
      <div className="pokedex">
        {data.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} /> )}
      </div>
    </div>
  );
}

export default App;
