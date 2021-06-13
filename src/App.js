import { Teclado } from "./componentes/Teclado";
import { Info } from "./componentes/Info";


function Teléfono() {

  return (
    <div className="contenedor">
      <Info activarInfo={activarInfo} />
      <main className="telefono">
        <Teclado desactivar={activarInfo} marcar={marcar} borrar={borrar} />
        <div className="acciones">
          <span className="numero">667359961</span>
          <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras -->
          <a href="#" className="llamar">Llamar</a>
          <!-- Sólo se tiene que ver un botón u otro -->
          <a href="#" className="colgar activo">Colgar</a>
        </div>
      </main>
    </div>
  )
}

export default App;
