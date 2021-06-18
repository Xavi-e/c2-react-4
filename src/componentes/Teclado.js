import PropTypes from "prop-types";
import { Tecla } from "./Tecla";

export const Teclado = (props) => {
    const teclas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const { llamando, anyadirDigito, borrarUltimoDigito, } = props;
    return (
        <div class="botones">
            <ol class="teclado">
                {teclas.map((tecla) => (
                    <li key={tecla}>
                        <Tecla
                            texto={`${tecla}`}
                            llamando={llamando}
                            accion={() => anyadirDigito(tecla)}
                        />
                    </li>
                ))}
                <li>
                    <Tecla
                        className="big"
                        texto="borrar"
                        llamando={llamando}
                        accion={borrarUltimoDigito}
                    />
                </li>
            </ol>
        </div>
    );
};

Teclado.propTypes = {
    llamando: PropTypes.bool.isRequired,
    anyadirDigito: PropTypes.func.isRequired,
    borrarUltimoDigito: PropTypes.func.isRequired,
};