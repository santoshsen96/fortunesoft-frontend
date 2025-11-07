import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';

export const fetchMovies = () => {
  return axios.get(`${API_BASE}/api/movies`, {
    headers: { Authorization: 'Bearer FSMovies2023' }
  }).then(r => r.data);
};
