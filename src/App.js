import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Thomas';

  const sum = (a, b) => a + b;

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Site em React</h1>
      <p>Olá, {name}</p>
      <p>{name.toUpperCase()}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
