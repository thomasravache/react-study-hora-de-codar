import Evento from './components/Evento';
import './App.css';

function App() {
  const name = 'Thomas';

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <Evento numero="1" />
      <Evento numero="2" />
    </div>
  );
}

export default App;
