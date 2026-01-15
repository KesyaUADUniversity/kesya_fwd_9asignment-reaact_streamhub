const ReasonsSection = () => {
  const reasons = [
    {
      title: "Nikmati di TV-mu",
      desc: "Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi."
    },
    {
      title: "Download serial untuk menontonnya secara offline",
      desc: "Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton."
    },
    {
      title: "Tonton di mana pun",
      desc: "Streaming film dan serial TV tanpa batas di ponsel, tablet, laptop, dan TV-mu."
    },
    {
      title: "Buat profil untuk anak",
      desc: "Kirim anak-anak untuk bertualang bersama karakter favorit di dunia yang dibuat khusus untuk mereka — gratis dengan keanggotaanmu."
    }
  ]

  return (
    <section className="py-10 px-6 bg-black">
      <h2 className="text-xl font-bold mb-6">Alasan Lainnya untuk Bergabung</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-900 to-indigo-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
            <p className="text-sm text-gray-300">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReasonsSection