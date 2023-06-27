import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './contexts/MovieContext';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';
import {Routes, Route } from "react-router-dom";
import MovieCard from './components/MovieCard';
import moviesdata from './contexts/data'

function App() {

  return (
       <div className="App">
            <MovieContextProvider>
              <Navbar/>
              <Routes>
              <Route path="/movielist" element={  <MovieList/>}/>
              <Route path="/NewMovieForm" element={  <NewMovieForm/>}/>
              <Route path="/MovieCard/:id" element={<MovieCard/>}/>
              </Routes>
            </MovieContextProvider>
       </div>
  );
}
export default App;