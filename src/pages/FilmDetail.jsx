// src/pages/FilmDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const loadFilm = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
        const res = await fetch(`${API_BASE_URL}/api/film/${id}`);
        
        if (!res.ok) {
          throw new Error('Film tidak ditemukan');
        }
        
        const data = await res.json();
        setFilm(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    loadFilm();
  }, [id]);

  if (!film) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${film.image})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        
        <button 
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-red-500 hover:text-red-400 transition-all group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium text-lg">Kembali</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="md:w-1/3 flex-shrink-0">
            <img 
              src={film.image} 
              alt={film.title} 
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Info */}
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">{film.title}</h1>
            
            {film.subtitle && (
              <p className="text-gray-300 text-xl md:text-2xl">{film.subtitle}</p>
            )}

            <div className="flex items-center gap-6 text-lg">
              <span className="text-yellow-400">⭐ {film.rating}</span>
              <span className="text-gray-400">{film.year}</span>
            </div>

            <p className="text-gray-200 leading-relaxed text-lg max-w-2xl">
              {film.description}
            </p>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-400 mr-2">Genre:</span>
              {Array.isArray(film.genre) ? (
                film.genre.map((genre, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-gray-700"
                  >
                    {genre}
                  </span>
                ))
              ) : (
                <span className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
                  {film.genre}
                </span>
              )}
            </div>

            {/* Tombol Mulai Menonton - Merah seperti Netflix */}
            <button className="mt-6 bg-red-600 hover:bg-red-700 px-10 py-4 rounded font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-900/30">
              Mulai Menonton
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}