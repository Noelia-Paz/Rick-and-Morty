import React from 'react';
import imagen from "../../img/img2.jpeg";
import styles from "./About.module.css"

export default function About() {
  return (
    <div>
      <h1>Esta App fue creada por Noelia Paz</h1>
      <p>
        En esta App podes realizar diferentes funciones como agregar , eliminar
        personajes de Rick and Morty.
      </p>
      <img src={imagen}  className={styles.imagen}/>
    </div>
  );
}
