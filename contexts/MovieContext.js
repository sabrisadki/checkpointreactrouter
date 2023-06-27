import React, { createContext,  useReducer,/* useEffect*/ } from 'react';
import { movieReducer } from '../reducers/movieReducer';
import moviesdata from './data'
import MovieDetails from '../components/MovieDetails';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movie , dispatch] = useReducer( movieReducer, moviesdata) 
        /*  () => {
          const localData = localStorage.getItem('movie');
          return localData ? JSON.parse(localData) : [];
          }
          );
          useEffect(() => {
            localStorage.setItem('movie', JSON.stringify(movie));
          }, [movie]);*/
      return (
        <MovieContext.Provider value={{ movie, dispatch }} >
          {props.children}
        </MovieContext.Provider>
      );
}
 
export default MovieContextProvider;