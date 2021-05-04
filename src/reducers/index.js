const initialState = {
  movies: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIE_DETAIL': {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }
    case 'ADD_MOVIE_FAVORITE': {
      return {
        ...state,
        movies: state.movies.concat(action.payload),
      };
    }
    case 'REMOVE_MOVIE_FAVORITE': {
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    }
    case 'GET_MOVIES': {
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
