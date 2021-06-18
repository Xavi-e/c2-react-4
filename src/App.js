import { Teclado } from "./componentes/Teclado";
import { Info } from "./componentes/Info";
import { Display } from "./componentes/Display";
import { Acciones } from "./componentes/Acciones";
import { useState, useRef } from "react";
function App() {

  const [numero, setNumero] = useState("");
  const [llamando, setLlamando] = useState(false);
  const timer = useRef(null);
  const numeroCompleto = numero.length === 9;

  const llamar = () => {
    if (!numeroCompleto) {
      return;
    } setLlamando(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      colgar();
    }, 5000);
  };
  const colgar = () => {
    clearTimeout(timer.current);
    setNumero("");
    setLlamando(false);
  };
  const añadirDigito = (digito) => {
    if (numeroCompleto) {
      return;
    } setNumero(numero + digito);
  };
  const borrarUltimoDigito = () => {
    setNumero(numero.slice(0, -1));
  };


  return (
    <div className="contenedor">
      <Info mostrarMensaje={llamando} />
      <main className="telefono">
        <Teclado
          llamando={llamando}
          añadirDigito={añadirDigito}
          borrarUltimoDigito={borrarUltimoDigito}
        />
        <div className="acciones">
          <Display numerosMarcados={numero} />
          <Acciones
            activo={numeroCompleto}
            llamando={llamando}
            colgar={colgar}
            llamar={llamar}
          />
        </div>
      </main>
    </div>
  )
}

export default App;
