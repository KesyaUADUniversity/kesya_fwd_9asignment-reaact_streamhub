// src/pages/FilmDetail.jsx

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function FilmDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [film, setFilm] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:8000/api/film/${id}`)
      .then(res => res.json())
      .then(data => {
        setFilm(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="p-6 text-white">Loading...</div>
  if (!film) return <div className="p-6 text-red-500">Film tidak ditemukan</div>

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 text-red-500 hover:text-red-400"
      >
        ← Kembali
      </button>
      
      <div className="max-w-4xl mx-auto">
        <img 
          src={film.image} 
          alt={film.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-3xl font-bold mb-2">{film.title}</h1>
        <p className="text-gray-400 mb-4">{film.subtitle}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-gray-700 px-3 py-1 rounded">{film.year}</span>
          <span className="bg-gray-700 px-3 py-1 rounded">{film.rating}</span>
          {film.genre?.map((g, i) => (
            <span key={i} className="bg-gray-700 px-3 py-1 rounded">{g}</span>
          ))}
        </div>
        
        <p className="text-gray-300 mb-6">{film.description}</p>
        
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-bold">
          Mulai Menonton
        </button>
      </div>
    </div>
  )
}