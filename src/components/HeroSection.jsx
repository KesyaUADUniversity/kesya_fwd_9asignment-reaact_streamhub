// components/HeroSection.jsx

import sore from '../assets/images/sore.jpg'
import jumbo from '../assets/images/jumbo.jpg'
import mensRea from '../assets/images/mens-rea.jpg'
import ibuAyah from '../assets/images/ibu-ayah.jpg'
import theGreatFlood from '../assets/images/the-great-flood.jpg'


const posters = [
  sore,
  jumbo,
  mensRea,
  ibuAyah,
  theGreatFlood,
  sore,
  jumbo,
  mensRea,
  ibuAyah,
  theGreatFlood,
  sore,
  jumbo,
  mensRea,
  ibuAyah,
  theGreatFlood,
  sore,
  jumbo,
  mensRea,
  ibuAyah,
  theGreatFlood,
  sore,
  jumbo,
  mensRea,
  ibuAyah,
]

const HeroSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    if (email) {
      alert(`Email terkirim: ${email}\nNanti akan dikirim ke backend.`)
    }
  }

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background Grid Poster - Full Coverage */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 w-full h-full p-4">
          {posters.map((poster, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-all duration-300 shadow-lg scale-95 hover:scale-105"
            >
              <img
                src={poster}
                alt={`Poster ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Gelap — tapi lebih ringan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten Teks & Form */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 h-full">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-xl">
            Film dan serial TV <br /> tanpa batas, dan lebih banyak lagi
          </h1>
          <p className="text-lg mb-6 text-gray-200 drop-shadow">
            Harga mulai dari Rp54.000. Batalkan kapan pun.
          </p>
          <p className="text-sm mb-6 text-gray-300 drop-shadow">
            Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              name="email"
              type="email"
              placeholder="Alamat email"
              required
              className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-bold transition flex items-center gap-1 justify-center"
            >
              Mulai {'>'}
            </button>
          </form>
        </div>
      </div>

      {/* Garis Bawah Melengkung */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 transform translate-y-1"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-red-500 transform translate-y-2"></div>
    </div>
  )
}

export default HeroSection