// src/components/TrendingSection.jsx

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TrendingSection = () => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/films')
        if (!response.ok) throw new Error('Gagal mengambil data')
        const data = await response.json()
        
        // Tambahkan URL penuh untuk gambar
        const filmsWithFullImage = data.map(film => ({
          ...film,
          image: `http://localhost:8000${film.image}` // ← TAMBAHKAN INI!
        }))

        setFilms(filmsWithFullImage)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchFilms()
  }, [])

  if (loading) return <div className="py-10 px-6 text-center text-white">Loading...</div>

  return (
    <section className="py-10 px-6 bg-black">
      <h2 className="text-xl font-bold mb-6 text-white">Sedang Tren Sekarang</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {films.map((film) => (
          <div
            key={film.id}
            className="relative flex-shrink-0 w-48 group cursor-pointer"
            onClick={() => navigate(`/film/${film.id}`)}
          >
            <img
              src={film.image} // ← Sekarang ini akan jadi: http://localhost:8000/images/sore.jpg
              alt={film.title}
              className="w-full h-auto rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 bg-black bg-opacity-70 text-white text-4xl font-bold p-2 rounded-tl-md">
              {film.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingSection