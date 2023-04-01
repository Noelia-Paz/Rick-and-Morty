import React from 'react';
import { useState } from 'react';
import styles from './Form.module.css';
import validation from './validation';

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = event => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }, errors));
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.login(userData);
    alert('Usuario creado con éxito');
  };

  return (
    <div className={styles.bodyForm}>
      <h1 className={styles.h1}>Ingresa a tu cuenta!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <hr />
        <label htmlFor="username" className={styles.label}>
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          className={styles.input}
        />
        <p className={styles.danger}>{errors.username}</p>
        <hr />
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={styles.input}
        />
        <p className={styles.danger}>{errors.password}</p>
        <hr />
        <button className={styles.boton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
