// src/App.jsx
import Header from './components/Header';
import MovieList from './components/MovieList';
import { mockMovies } from './data/movies';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <MovieList movies={mockMovies} /> 
    </div>
  );
}