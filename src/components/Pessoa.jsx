function Pessoa({foto, nome, profissao}) {
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;
