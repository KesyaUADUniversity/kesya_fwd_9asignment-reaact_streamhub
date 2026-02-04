// src/lib/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = {
  getFilms: async () => {
    const res = await fetch(`${API_BASE_URL}/api/films`);
    if (!res.ok) throw new Error('Gagal load films');
    return res.json();
  }
};