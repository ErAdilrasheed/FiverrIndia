import axios from "axios";

const axiosFetch = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials: true
});

export default axiosFetch;