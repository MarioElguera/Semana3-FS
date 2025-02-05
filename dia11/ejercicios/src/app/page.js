'use client';
import Image from "next/image";
import ChangeColorButton from "../components/ej1";
import ChangeColorDiv from "../components/ej2";
import ModoOscuro from "../components/ej3";
import List from "../components/ej4";
import Card from "../components/ej5";
import ProgressBar from "../components/ej6";


export default function Home() {
  return (
    <div>
      <ChangeColorButton />
      <br></br>
      <ChangeColorDiv />
      <br></br>
      <ModoOscuro />
      <br></br>
      <List />
      <br></br>
      <Card />
      <div style={{ textAlign: 'left' }}>
        <ProgressBar />
      </div>
    </div>
  );
}
