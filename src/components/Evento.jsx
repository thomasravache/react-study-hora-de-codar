import Button from './evento/Button';

function Evento({ numero }) {
    const meuEvento = () => {
        console.log(`Evento ${numero}`);
    }

    function segundoEvento() {
        console.log('Ativando segundo evento');
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />

        </div>
    );
}

export default Evento;
