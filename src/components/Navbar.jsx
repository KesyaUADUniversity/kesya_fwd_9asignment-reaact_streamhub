// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../lib/auth';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUser();
    setCurrentUser(user);
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
    const API_URL = `${API_BASE_URL}/api/login`;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setCurrentUser(data.user);
        alert('Login berhasil!');
        setIsModalOpen(false);
      } else {
        const error = await res.json();
        alert(`Login gagal: ${error.message || 'Cek email/password'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menghubungi server. Cek koneksi atau backend.');
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-red-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">DINETFLIX</div>
          <div className="flex gap-4 items-center">
            <select
              className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
              defaultValue="id"
            >
              <option value="id">Bahasa Indonesia</option>
              <option value="en">English</option>
            </select>
            
            {currentUser ? (
              <div className="flex items-center gap-2">
                <span className="text-white">Halo, {currentUser.name}</span>
                <button
                  onClick={() => window.location.href = '/logout'}
                  className="bg-red-700 hover:bg-red-800 px-3 py-1 rounded text-sm transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-700 hover:bg-red-800 px-4 py-1 rounded font-medium transition"
              >
                Masuk
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Modal Sign In */}
      {isModalOpen && !currentUser && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Masuk ke Dinetflix</h2>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-bold transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;