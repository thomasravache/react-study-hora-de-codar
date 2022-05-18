import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from  './components/List';
import './App.css';

function App() {
  const name = 'Thomas';

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <Frase />
      <HelloWorld />
      <SayMyName nome="Thomas"/>
      <SayMyName nome="Outro nome"/>
      <Pessoa 
        nome="Thomas"
        profissao="Desenvolvedor"
        foto={url}
      />
      <List />
    </div>
  );
}

export default App;
