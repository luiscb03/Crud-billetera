import './App.css';
import { Header } from './componentes/Header';
import { Mostrador } from './componentes/Mostrador';
import { Sidebar } from './componentes/Sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Mostrador></Mostrador>
    </div>
  );
}

export default App;
