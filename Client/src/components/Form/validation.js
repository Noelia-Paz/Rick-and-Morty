const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (state, errorsState) => {
  const errors = { ...errorsState };

  if (!state.username) errors.username = 'El campo no puede estar vacio';
  else if (state.username.length > 35)
    errors.username = 'No puede tener mas de 35 caracteres';
  else if (!regexEmail.test(state.username)) errors.username = 'Email invalido';
  else errors.username = '';

  if (state.password.length < 6 || state.password.length > 10)
    errors.password = 'La contraseña debe ser entre 6 y 10 caracteres';
  else if (!/\d/.test(state.password))
    errors.password = 'La contraseña debe contener al menos un numero';
  else errors.password = '';

  return errors;
};

export default validation;
