import React from 'react';
import { connect } from 'react-redux';
import Pokemon from '../Pokemon/Pokemon';
import styled from './Pokemons.module.css';

const Pokemons = ({myCharacters}) => {


  return (
    <div className={styled.containerPokemons} >
      {
        myCharacters?.map((character)=>{
          return <Pokemon
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  types={character.types}
                  stats={character.stats}
                 />
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myCharacters: state.myCharacters
  }
}


export default connect(mapStateToProps,null)(Pokemons);