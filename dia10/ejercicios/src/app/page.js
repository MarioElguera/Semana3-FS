'use client';
import Image from "next/image";
import Contador from "../components/ej1";
import ObtenerDatosAPI from "../components/ej2";
import AlternarEstado from "../components/ej3";
import Formulario from "../components/ej4";
import Temporizador from "../components/ej5";
import CambiarColorFondo from "../components/ej6";
import ListaConElementos from "../components/ej7";
import DetectarTecla from "../components/ej8";
import RandomCounter from "../components/ej9";
import ShowAlert from "../components/ej10";
import TextInput from "../components/ej11";
import HoverDiv from "../components/ej12";

export default function Home() {
  return (
    <div style={{ padding: '2% 10%' }}>
      {/* Ejercicio 1 */}
      <Contador />
      <br></br>
      <hr></hr>

      {/* Ejercicio 2 */}
      <ObtenerDatosAPI />
      <br></br>
      <hr></hr>

      {/* Ejercicio 3 */}
      <AlternarEstado />
      <br></br>
      <hr></hr>

      {/* Ejercicio 4 */}
      <Formulario />
      <br></br>
      <hr></hr>

      {/* Ejercicio 5 */}
      <Temporizador />
      <br></br>
      <hr></hr>

      {/* Ejercicio 6 */}
      <CambiarColorFondo />
      <br></br>
      <hr></hr>

      {/* Ejercicio 7 */}
      <ListaConElementos />
      <br></br>
      <hr></hr>

      {/* Ejercicio 8 */}
      <DetectarTecla />
      <br></br>
      <hr></hr>

      {/* Ejercicio 9 */}
      <RandomCounter />
      <br></br>
      <hr></hr>

      {/* Ejercicio 10 */}
      <ShowAlert />
      <br></br>
      <hr></hr>

      {/* Ejercicio 11 */}
      <TextInput />
      <br></br>
      <hr></hr>

      {/* Ejercicio 12 */}
      <HoverDiv />
      <br></br>
      <hr></hr>
    </div>
  );
}
