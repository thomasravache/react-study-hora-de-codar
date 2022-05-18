import Evento from './components/Evento';
import Form from './components/Form';
import './App.css';

function App() {
  const name = 'Thomas';

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <Evento numero="1" />
      <Form />
    </div>
  );
}

export default App;
