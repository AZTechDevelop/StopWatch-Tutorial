import Afisare from './Afisare';
import './App.css';
import StopWatch from './Final';
import FolosireaUseEffect from './FolosireaUseEffect';
import FolosireaUseState from './FolosireaUseState';
import FunctiiStatus from './FunctiiStatus';
import Configurarea from './Start'
function App() {
  return (
    <>
    <StopWatch />
    <div >
    <h2 style={{margin:'auto',textAlign:'center'}}>In acest acticol veti afla cum sa creeaza un cronometru, dar si logica din spatele codului</h2>
    <p>Pentru inceput avem nevoie de codespaces de pe <a href="https://github.com/github/codespaces-react">GitHub</a></p>
    <p>Dati click pe `Use this template' -- create a new repository</p>
    <p>Dupa aceea intrati pe noul repository creat, dati click pe `Code` -- `codespaces` -- la `animated space sniffle`
      dati pe cele 3 puncte si dati click unde a-ti dori sa deschideti proiectul
    </p>
    </div>
    <FolosireaUseState />
    <FolosireaUseEffect />
    <FunctiiStatus />
    <Afisare />
    <Configurarea />
    </>
  );
}

export default App;
