// src/pages/Register.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    
    if (res.ok) {
      localStorage.setItem('token', data.token)
      navigate('/films')
    } else {
      alert('Daftar gagal')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Daftar ke Dinetflix</h2>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-gray-800 rounded"
          required
        />
        <button type="submit" className="w-full bg-red-600 py-3 rounded font-bold">
          Daftar
        </button>
        <p className="mt-4 text-center">
          Sudah punya akun?{' '}
          <a href="/login" className="text-red-500">Masuk sekarang</a>
        </p>
      </form>
    </div>
  )
}