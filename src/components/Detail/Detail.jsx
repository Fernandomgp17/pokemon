import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from './Detail.module.css';

const Detail = ({myCharacters}) => {

  const [character,setCharacter] = useState({})
  const {id} = useParams();

  useEffect(()=>{

    setCharacter(myCharacters?.find((char)=>char.id === +id))
    
  },[id])
  return (
    <div className={styled.containerDetail} >
      {
        character && (
          <div className={styled.containerPokemon}>
            <p className={styled.pokemonTittle} >{character.name}</p>
            <div className={styled.imageContainer} >
              <img className={styled.pokemonImage} src={character.image} alt={character.name} />
            </div>
            <div className={styled.fullDate} >
              <p>Height: {character.height}</p>
              {
                character.stats?.map((char,indice)=>{
                  return <p key={indice} >{char.name+': '+char.value}</p>
                })
              }
              <div className={styled.typePokemon} >
              <p>Tipos:</p>
              {
                character.types?.map((type,indice)=>{
                  return <p key={indice} >{type}</p>
                })
              }
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    myCharacters:state.myCharacters
  }
}

export default connect(mapStateToProps,null)(Detail);
