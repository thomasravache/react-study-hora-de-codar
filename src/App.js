import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {
  const name = 'Thomas';

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Thomas"/>
      <SayMyName nome="Outro nome"/>
      <Pessoa 
        nome="Thomas"
        profissao="Desenvolvedor"
        foto={url}
      />
    </div>
  );
}

export default App;
