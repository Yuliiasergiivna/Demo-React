
import './App.css'
import Welcome from './components/Welcome/Welcome'
import Exo01 from './components/Exo/Exo01'  

function App() {

  return (
    <>
     <h1>Demo React </h1>
     <Welcome name="Alice"/>

     <h4>Exercice 1</h4>
     <Exo01 number={0}/>
     <Exo01 number={42}/>
     <Exo01 number={17}/>
    </>
  )
}

export default App
