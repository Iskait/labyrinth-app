import './styles/all.scss'
import Labyrinth from './components/Labyrinth';
import Path from './components/Path';
function App() {
  return (
    <div className="wrapper">
      <Labyrinth />
      <Path />
    </div>
  )
}

export default App;
