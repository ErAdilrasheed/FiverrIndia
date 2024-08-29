import axios from "axios";

const axiosFetch = axios.create({
    baseURL: 'https://fiverrindia.onrender.com/api/',
    withCredentials: true
});

export default axiosFetch;
