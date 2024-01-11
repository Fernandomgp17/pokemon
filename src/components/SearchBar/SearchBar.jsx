import React from 'react';
import { useState } from 'react';
import {connect } from 'react-redux';
import { addCharacter } from '../../redux/actions';
import styled from './SearchBar.module.css';

const SearchBar = ({addCharacter}) => {

  const [id,setId] = useState('')

  const handleClick = () => {
    addCharacter(id)
    setId('')
  }
  
  const handleChange = (event) => {
    setId(event.target.value);
  }
  return (
    <div className={styled.containerSearchBar} >
      <input type="text" onChange={handleChange} value={id} />
      <button className={styled.buttonSearchBar} onClick={handleClick} >Find</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter:(character)=>dispatch(addCharacter(character))
  }
}

export default connect(null,mapDispatchToProps)(SearchBar);
