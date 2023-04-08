import React from 'react';
import imagen from '../../img/img2.jpeg';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Esta App fue creada por Noelia Paz</h1>
      <p className={styles.p}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
        debitis, dolore expedita nulla culpa cum voluptas sequi possimus dolorum
        modi perspiciatis, veniam ab illum, cupiditate fuga laborum iste
        voluptates. Nostrum debitis, consectetur voluptates in dolorum molestias
        autem? Praesentium, vel ex facere, facilis fugit aut harum impedit odio
        unde hic veniam!
      </p>
      <img src={imagen} className={styles.imagen} />
    </div>
  );
}
