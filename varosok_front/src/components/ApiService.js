import axios from 'axios';

const API_URL = "http://localhost:8080";

export const handleApiError = (err) => {
  const status = err.response?.status;
  switch (status) {
    case 400: return "Hiányzó adat!";
    case 404: return "Nem található!";
    case 409: return "Ütközés! (Pl. a városhoz még tartozik lakos)";
    case 422: return "Érvénytelen adat!";
    case 500: return "Szerverhiba!";
    default: return "Ismeretlen hiba történt!";
  }
};

export const api = axios.create({ baseURL: API_URL });