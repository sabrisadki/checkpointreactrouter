import uuid from 'uuid/v4';

export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          title: action.movie.title,
          description: action.movie.description,
          rating: action.movie.rating,
          imageUrl: action.movie.imageUrl,
          id: uuid(),
        },
      ];
    case 'SHOW_MOVIE':
      return state.map();
    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    case 'FILTER_MOVIES_BY_RATING':
      return state.filter(movie => movie.rating >= action.rating);
    case 'SEARCH_MOVIES':
        return state.filter(movie => movie.title.toLowerCase().includes(action.searchTerm.toLowerCase()));
    default:
      return state;
  }
};
