
import './App.css'
import Welcome from './components/Welcome/Welcome'
import Exo01 from './components/Exo/Exo01/Exo01'  
import PokemonTable from './components/PokemonTable/PokemonTable'
// import pokemons from './data/pokemon.json'
import Produits from './components/Exo/Exo02/Produits'
import produit from './data/produit.json'
import Exo03 from './components/Exo/Exo03/Exo03'

function App() {

  return (
    <>
     <h1>Demo React </h1>
     <Welcome name="Alice"/>

     <h4>Exercice 1</h4>
     <Exo01 number={0}/>
     <Exo01 number={42}/>
     <Exo01 number={17}/>

     <h4>Exercice 2</h4>
     {<Produits produits={produit}/>}

     <h3>Exercice 3</h3>
     <Exo03 compter ={0}/>

     {/* <h2>Demo collection</h2> */}
     {/* <PokemonTable pokemons={pokemons}/> */}
    </>
  )
}

export default App
