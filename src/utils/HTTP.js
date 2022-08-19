import axios from 'axios';

const HTTP = axios.create();

HTTP.interceptors.request.use(
    config => config,
    error => {
        return Promise.reject(error);
    },
);

export default HTTP;
