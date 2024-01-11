import React, { useEffect, useState } from 'react';
import styled from './Pokemon.module.css';
import { connect } from 'react-redux';
import { removeCharacter, removeFavorite, addFavorite } from '../../redux/actions';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Pokemon = ({id,name,image,types,removeCharacter,addFavorite,removeFavorite,myFavorites}) => {

  const [isFav,setIsFav] = useState(false);
  const {pathname}=useLocation();

  const handleClick = () => {
    removeCharacter(id)
  }

  const handleClickFavorite  = () => {
    if(isFav){
      setIsFav(false);
      removeFavorite(id)
    }else{
      setIsFav(true);
      addFavorite({id,name,image,types})
    }
  }

  useEffect(()=>{
    myFavorites?.forEach((favorite)=>{
      if(favorite.id===id){
        setIsFav(true)
      }
    })
  },[myFavorites])
  
  return (
    <div className={styled.containerPokemon} >
      <div className={styled.titlePokemon}>
        {
          isFav === true ? (
            <button className={styled.button1Pokemon} onClick={handleClickFavorite}>💖</button>
          ):(
            <button className={styled.button1Pokemon} onClick={handleClickFavorite}>🤍</button>
          )
        }
        <NavLink className={styled.namePokemon} to={`/detail/${id}`} >
          {name}
        </NavLink>
        {
          (pathname === '/home') && (<button className={styled.button2Pokemon} onClick={handleClick}>X</button>)
        }
        
      </div>
      <img className={styled.imagePokemon} src={image} alt={image} />
      <div className={styled.typesPokemon} >
        <p>Tipe:</p>
        {
          types?.map((type,indice)=>{
            return <p key={indice} className={styled.typePokemon} >{type}</p>
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites:state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCharacter:  (id)=>{dispatch(removeCharacter(id))},
    addFavorite: (character)=>{dispatch(addFavorite(character))},
    removeFavorite:(id)=>{dispatch(removeFavorite(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pokemon);
