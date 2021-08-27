import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.113.163.96:3333/vacinometro'
    
});

export default api;