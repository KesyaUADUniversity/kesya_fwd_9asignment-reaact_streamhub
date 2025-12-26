// src/components/MovieList.jsx
import MovieCard from './MovieCard'; 

export default function MovieList({ movies }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            poster={movie.poster}
          />
        ))}
      </div>
    </div>
  );
}