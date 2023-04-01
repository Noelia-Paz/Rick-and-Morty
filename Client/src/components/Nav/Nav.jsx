import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
export default function Nav(props) {
  return (
    <div>
      <nav className={styles.nav}>
        <SearchBar onSearch={props.onSearch} />
        <div className={styles.links}>
          <Link to="/about">
            <h3>ABOUT</h3>
          </Link>
          <Link to="/home">
            <h3>HOME</h3>
          </Link>
          <Link to="/favorites">
            <h3>FAVORITES</h3>
          </Link>
        </div>
        <div className={styles.divButton}>
          <button className={styles.button} onClick={() => props.logout(false)}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
