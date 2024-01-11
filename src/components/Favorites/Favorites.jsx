import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from './Favorites.module.css';
import Pokemon from '../Pokemon/Pokemon';

import { filterCards,orderCards } from '../../redux/actions';

const Favorites = ({myFavorites}) => {

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }
  
  return (
    <div className={styled.containerFavorites} >
      <select onChange={handleOrder} className={styled.optionFavorites}>
        <option value="D">Descendente</option>
        <option value="A">Ascendente</option>
      </select>
      <select onChange={handleFilter} className={styled.optionFavorites}>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="fairy">Fairy</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option>
      </select>
      <div className={styled.pokemonsFavorites} >
      {
        myFavorites?.map((favorite)=>{
          return <Pokemon
                    key={favorite.id}
                    id={favorite.id}
                    name={favorite.name}
                    image={favorite.image}
                    types={favorite.types}
                 />
        })
      }
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    myFavorites:state.myFavorites
  }
}

export default connect(mapStateToProps,null)(Favorites);
