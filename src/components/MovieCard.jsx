// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';

export default function MovieCard({ title, genre, poster, id, index }) {
  return (
    <Link to={`/film/${id}`} className="block group relative">
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300 relative">
        <img
          src={poster}
          alt={title}
          className="w-full h-48 object-cover"
        />
        
        {/* Nomor urut besar di pojok kiri bawah */}
        <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{index + 1}</span>
        </div>
        
        {/* Overlay saat hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold text-sm">
             Play
          </button>
        </div>
        
        {/* Info di bawah poster */}
        <div className="p-3 bg-gray-900">
          <h3 className="text-white font-semibold text-sm line-clamp-1">{title}</h3>
          <p className="text-gray-400 text-xs mt-1">{genre}</p>
        </div>
      </div>
    </Link>
  );
}