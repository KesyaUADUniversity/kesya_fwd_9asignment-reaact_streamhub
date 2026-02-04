// src/components/TrendingSection.jsx
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function TrendingSection() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
        const res = await fetch(`${API_BASE_URL}/api/films`);
        const data = await res.json();
        setFilms(data);
      } catch (error) {
        console.error('Gagal load films:', error);
      }
    };
    loadFilms();
  }, []);

  return (
    <section className="py-8 px-4 bg-black">
      <h2 className="text-2xl font-bold mb-6 text-white">Trending Now</h2>
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {films.map((film, index) => (
          <MovieCard 
            key={film.id} 
            id={film.id} 
            title={film.title} 
            genre={film.genre.join(', ')} 
            poster={film.image} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
}