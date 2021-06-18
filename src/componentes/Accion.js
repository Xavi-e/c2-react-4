import PropTypes from "prop-types";

export const Accion = (props) => {
    const { accion, activo, accionClick } = props;
    const onClick = (e) => {
        e.preventDefault();
        accionClick();
    };
    return (
        <a
            href={accion}
            className={`${accion}${activo ? " activo" : ""}`}
            onClick={onClick}
        >
            {accion.charAt(0).toUpperCase() + accion.slice(1)}
        </a>
    );
};

Accion.propTypes = {
    accion: PropTypes.string.isRequired,
    activo: PropTypes.bool.isRequired,
    accionClick: PropTypes.func.isRequired,
};
