import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BAKEND + 'api/',
});

export default instance;
