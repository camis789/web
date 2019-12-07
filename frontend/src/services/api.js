import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:44322/',
});

export default api;