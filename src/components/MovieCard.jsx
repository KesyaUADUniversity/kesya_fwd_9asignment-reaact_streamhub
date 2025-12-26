// src/components/MovieCard.jsx
export default function MovieCard({ title, genre, poster }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-200">
      <img
        src={poster}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{genre}</p>
      </div>
    </div>
  );
}