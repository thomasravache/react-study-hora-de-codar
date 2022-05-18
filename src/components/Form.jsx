import { useState } from 'react';

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('Cadastrou o usuário!');
        console.log('nome', name);
        console.log('senha', password)
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario} >
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        placeholder="Digite o seu nome"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        placeholder="Digite a sua senha"
                        name="senha"
                        id="senha"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;
