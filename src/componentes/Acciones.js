import PropTypes from "prop-types";
import { Accion } from "./Accion"


export const Acciones = (props) => {
    const { activo, llamando, colgar, llamar } = props;
    return (
        <>
            {llamando ? (
                <Accion accion="colgar" activo={activo} accionClick={colgar} />
            ) : (
                <Accion accion="llamar" activo={activo} accionClick={llamar} />
            )}
        </>
    );
};

Acciones.propTypes = {
    activo: PropTypes.bool.isRequired,
    llamando: PropTypes.bool.isRequired,
    colgar: PropTypes.func.isRequired,
    llamar: PropTypes.func.isRequired,
};