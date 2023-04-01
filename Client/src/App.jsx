import './App.css';
import Cards from './components/Cards/Cards';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '123456';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = id => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = 'a72cf9216cc1.8afed9cea69939dcff57';

    if (characters.find(character => character.id === id)) {
      return alert('Personaje repetido');
    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          alert('No hay personajes con ese ID');
        }
      });
  };

  const onClose = id => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: '25px' }}>
      {!!access && <Nav onSearch={onSearch} logout={setAccess} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
