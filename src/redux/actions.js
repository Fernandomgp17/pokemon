import axios from "axios"
import { ADD_CHARACTER,ADD_FAVORITE,REMOVE_CHARACTER, REMOVE_FAVORITE,FILTER,ORDER } from "./action-types";

const addCharacter = (id) => {
  return async(dispatch)=>{
      const newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response=>response.data)
      .then(pokemon=>{
        const id = pokemon.id
        const name = pokemon.name
        const image = pokemon.sprites.other.dream_world.front_default
        const height = pokemon.height
        const stats = pokemon.stats.map((poke)=>({
          name:poke.stat.name,
          value:poke.base_stat
        }))
        const types = pokemon.types.map((poke)=>poke.type.name)

        return {id,name,image,height,stats,types}

      })
      dispatch({type:ADD_CHARACTER,payload:newPokemon})
  }
}

const removeCharacter = (id) => {
  return {type:REMOVE_CHARACTER,payload:id}
}

const addFavorite = (character) => {
  return {type:ADD_FAVORITE,payload:character}
}

const removeFavorite = (id) => {
  return {type:REMOVE_FAVORITE,payload:id}
}

const filterCards = (type) => {
  return {type:FILTER,payload:type}
}

const orderCards = (order) => {
  return {type:ORDER,payload:order}
}

export {addCharacter,removeCharacter,addFavorite,removeFavorite,filterCards,orderCards};