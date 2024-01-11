import React from 'react';
import { Link } from 'react-router-dom';
import styled from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styled.containerNavBar} >
      <Link to='/home' > 
        <button className={styled.containerButton} >Home</button>
      </Link>
      <Link to='/favorites' >
        <button className={styled.containerButton} >Favorites</button>
      </Link>
      <Link to='/about'>
        <button className={styled.containerButton} >About</button>
      </Link>
    </div>
  );
}

export default NavBar;
