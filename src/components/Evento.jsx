function Evento({ numero }) {
    const meuEvento = () => {
        console.log(`Evento ${numero}`);
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar! {numero}</button>
        </div>
    );
}

export default Evento;
