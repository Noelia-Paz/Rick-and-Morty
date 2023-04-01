import Card from '../Card/Card';
import styles from './Cards.module.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions/action';

export default function Cards(props) {
  const { characters } = props;
  const { onClose } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  return (
    <div className={styles.divBody}>
      <div className={styles.divChar}>
        {characters.map(character => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}
