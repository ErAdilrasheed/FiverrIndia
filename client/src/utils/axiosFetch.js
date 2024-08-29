import axios from "axios";

const axiosFetch = axios.create({
    baseURL: 'https://fiverrindia.vercel.app/api/',
    withCredentials: true
});

export default axiosFetch;
