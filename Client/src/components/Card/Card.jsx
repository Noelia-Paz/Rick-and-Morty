import styles from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { removeFavorite, getFavorites } from '../../redux/actions/action';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';

const Card = props => {
  const [isFav, setIsFav] = useState(false);
  const onClose = props.onClose;

  const dispatch = useDispatch();

  const addFavorite = character => {
    axios
      .post('http://localhost:3001/rickandmorty/fav', character)
      .then(res => console.log('ok'));
  };

  const removeFavorite = async id => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites);
    alert('Eliminado con exito');
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(props.id);
    } else {
      setIsFav(true);
      addFavorite(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach(fav => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.bodyCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.botonBorrar} onClick={() => onClose(props.id)}>
        X
      </button>
      <img src={props.image} alt="" />
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.name}>{props.name}</h2>
      </Link>
      <h2 className={styles.info}>Species: {props.species}</h2>
      <h2 className={styles.info}>Gender: {props.gender}</h2>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFavorite: id => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
