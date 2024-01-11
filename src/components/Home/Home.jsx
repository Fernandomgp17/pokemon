import React from 'react';
import styled from './Home.module.css';

import Pokemons from '../Pokemons/Pokemons';

const Home = () => {
  return (
    <div className={styled.containerHome}>
      <Pokemons/>
    </div>
  );
}

export default Home;
