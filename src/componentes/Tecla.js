import PropTypes from "prop-types";

export const Tecla = (props) => {
    const { texto, className, llamando, accion } = props;
    return (
        <li>
            <button className={className} onClick={accion} disabled={llamando}>
                {texto}
            </button>
        </li>
    );
};
Tecla.propTyoes = {
    texto: PropTypes.string.isRequired,
    className: PropTypes.string,
    llamando: PropTypes.bool.isRequired,
    accion: PropTypes.func.isRequired,
};