import { ADD_CHARACTER, ADD_FAVORITE, REMOVE_CHARACTER, REMOVE_FAVORITE,FILTER, ORDER } from "./action-types";

const initialState = {
  myCharacters:[],
  myFavorites:[],
  allCharactersFav:[]
}

const reducer = (state=initialState,action) => {

  switch(action.type){
    case REMOVE_FAVORITE:
      console.log('removefav');
      return {
        ...state,
        myFavorites:state.myFavorites.filter((favorite)=>favorite.id !== action.payload)
      }
      case ADD_CHARACTER:
        console.log('charadd')
        return {
          ...state,
          myCharacters:[...state.myCharacters,action.payload]
        }
      case ADD_FAVORITE:
        console.log('add')
        console.log(action.payload)
      return {
        ...state,
        myFavorites:[...state.allCharactersFav,action.payload],
        allCharactersFav:[...state.allCharactersFav,action.payload]
      }
      case REMOVE_CHARACTER:
        console.log('remove')
        return {
          ...state,
          myFavorites:state.myFavorites.filter((favorite)=>favorite.id!==action.payload),
          myCharacters:state.myCharacters.filter((character)=>character.id !== action.payload)
        }
      case FILTER:
        console.log('filter')
        const filteredCharacters = state.allCharactersFav.filter(character => {
          return character.types?.includes(action.payload);
        });
      return{
        ...state,
        myFavorites:filteredCharacters
      }
        break
      case ORDER:
        console.log('order')
        const allCharacterFavCopy = [...state.allCharactersFav];

        return {
          ...state,
          myFavorites:
            action.payload === 'A'
            ? allCharacterFavCopy.sort((a,b)=>a.id - b.id)
            : allCharacterFavCopy.sort((a,b)=>b.id - a.id)
        }
    default:
      return{
      ...state
    }
  }
}


export default reducer;