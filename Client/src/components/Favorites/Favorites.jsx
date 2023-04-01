import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';
import { orderCards, filterCards } from '../../redux/actions/action';

const Favorites = () => {
  const favorites = useSelector(state => state.myFavorites);

  const onChangeOrder = event => {
    dispatch(orderCards(event.target.value));
  };

  const onChangeFilter = event => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={styles.divFav}>
      <div>
        <select name="name" className={styles.select} onChange={onChangeOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <select name="name" className={styles.select} onChange={onChangeFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.divCard}>
        {favorites?.map(character => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
