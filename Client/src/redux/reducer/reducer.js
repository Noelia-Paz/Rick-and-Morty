import {
  CLEAN_DETAIL,
  GET_CHARACTER_DETAIL,
  GET_FAVORITES,
  REMOVE_FAVORITES,
} from '../actions/action';

const initialState = {
  myFavorites: [],
  characterDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          char => char.id !== action.payload
        ),
      };
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    case GET_FAVORITES:
      return { ...state, myFavorites: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
