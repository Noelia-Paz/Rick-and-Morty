import React from 'react';
import useCharacter from '../../hooks/useCharacter';
import styles from './Detail.module.css';
import { Link } from 'react-router-dom';

export default function Detail() {
  const character = useCharacter();

  return (
    <div className={styles.divDetail}>
      <Link to={'/home'}>
        <button className={styles.button}>Home</button>
      </Link>
      {character.name ? (
        <div className={styles.divDetailCar}>
          <h2 className={styles.h2}>Name: {character.name}</h2>
          <h2 className={styles.h2}>Gender: {character.gender}</h2>
          <h2 className={styles.h2}>Specie: {character.species}</h2>
          <h2 className={styles.h2}>Origin: {character.origin?.name}</h2>
          <img className={styles.image} src={character.image} alt="img" />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
