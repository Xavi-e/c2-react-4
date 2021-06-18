import PropTypes from "prop-types";

export const Info = (props) => {

    const { mostrarMensaje } = props;

    return (
        <span className={`mensaje${mostrarMensaje ? "" : "of"}`}>
            Llamando...
        </span>
    );
};

Info.propTypes = {
    mostrarMensaje: PropTypes.bool.isRequired,
};