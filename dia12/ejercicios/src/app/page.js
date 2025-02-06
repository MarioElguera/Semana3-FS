'use client';
import Image from "next/image";
import App from '../components/ej1';
import App2 from '../components/ej2';
import App3 from '../components/ej3';
import App4 from '../components/ej4';
import App5 from '../components/ej5';
import App6 from '../components/ej6';
import App7 from '../components/ej7';


export default function Home() {
  return (
    <div>
      {/* {Ejercicio 1} */}
      <App />
      <br></br>
      <hr></hr>
      {/* {Ejercicio 2} */}
      <App2 />
      <br></br>
      <hr></hr>
      {/* {Ejercicio 3} */}
      <App3 />
      <br></br>
      <hr></hr>
      {/* {Ejercicio 4} */}
      <App4 />
      <br></br>
      <hr></hr>
      {/* {Ejercicio 5} */}
      <App5 />
      <br></br>
      <hr></hr>
      {/* {Ejercicio 6} */}
      <App6 />
      <br></br>
      <hr></hr>
      {/* {Ejercicio 7} */}
      <App7 />
      <br></br>
      <hr></hr>
    </div>
  );
}
