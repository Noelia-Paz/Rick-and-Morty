import styles from './SearchBar.module.css';
import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const handleChange = event => {
    setId(event.target.value);
  };

  return (
    <div className={styles.bodySearch}>
      <input className={styles.input} type="search" onChange={handleChange} />
      <button className={styles.button} onClick={() => props.onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
