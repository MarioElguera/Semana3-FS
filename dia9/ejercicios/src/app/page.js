import Image from "next/image";
import App from "../components/ej1";
import Product from "../components/ej2";
import App3 from "../components/ej3";
import App4 from "../components/ej4";
import App5 from "../components/ej5";
import App6 from "../components/ej6";
import Saludo from "../components/ej7";
import Tarea from "../components/ej8";
import Avatar from "../components/ej9";
import App10 from "../components/ej10";
import Lista from "../components/ej11";
import Ej12 from "../components/ej12";

export default function Home() {
  const avatarUrl = '/ej9.jpg';
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    <div>
      <App />
      <hr></hr>
      <Product props={{ name: "MousePad", price: "$48" }} />
      <hr></hr>
      <App3 />
      <hr></hr>
      <App4 />
      <hr></hr>
      <App5 />
      <hr></hr>
      <App6 />
      <hr></hr>
      <Saludo nombre="Gustavo" />
      <hr></hr>
      <Tarea texto="Estudiar React" completada={true} />
      <Tarea texto="Comprar víveres" completada={false} />
      <hr></hr>
      <Avatar url={avatarUrl} />
      <hr></hr>
      <App10 />
      <hr></hr>
      <Lista>
        {items.map((item, index) => (
          <li key={index}>-   {item}</li>
        ))}
      </Lista>
      <hr></hr>
      <Ej12 />
    </div>
  );
}
