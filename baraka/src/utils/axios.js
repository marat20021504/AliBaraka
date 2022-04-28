import axios from "axios";

const defaultOptions = {
    baseURL: "https://alibaraka.pythonanywhere.com/api",
    headers: {
        'Content-Type': 'application/json',
    },
};

let API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
    const token = localStorage.getItem('user-token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default API;