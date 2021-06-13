export const Tecla = (props) => {
    const { desactivar, numero, marcar } = props;
    return (
        <li>
            <button onClick={() => marcar(numero)} disabled={desactivar ? true : false}>
                {numero}
            </button>
        </li>
    );
};