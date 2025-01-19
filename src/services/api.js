import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:3005/api',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

const api = axios.create({
    baseURL: 'https://tallerback.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para añadir el token a las peticiones
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para manejar errores
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;