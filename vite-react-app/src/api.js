import axios from "axios";
import { getAccessToken, setAccessToken } from "./tokenStore";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true
});

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers["Authorization"] = "Bearer " + token;
  return config;
});

// RESPONSE (TOKEN REFRESH)
let refreshing = false;
let queue = [];

function processQueue(err, token = null) {
  queue.forEach(prom => err ? prom.reject(err) : prom.resolve(token));
  queue = [];
}

api.interceptors.response.use(
  res => res,
  async (err) => {
    const original = err.config;

    //Ne próbáljuk refresh-elni a login endpointot
    if (original.url.includes("/auth/login")) {
      return Promise.reject(err); // → catch a komponensben fut
    }

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;

      if (refreshing) {
        return new Promise((resolve, reject) =>
          queue.push({ resolve, reject })
        ).then((token) => {
          original.headers["Authorization"] = "Bearer " + token;
          return api(original);
        });
      }

      refreshing = true;

      try {
        const { data } = await api.post("/auth/refresh");
        setAccessToken(data.accessToken);
        processQueue(null, data.accessToken);
        return api(original);
      } catch (e) {
        processQueue(e, null);
        throw e;
      } finally {
        refreshing = false;
      }
    }

    throw err;
  }
);

export default api;
