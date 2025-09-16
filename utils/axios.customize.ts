import axios from "axios";

const instance = axios.create({
    baseURL: "http://10.0.2.2:8080",
});

instance.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        if (response.data) return response.data
        return response;
    },
    (error) => {
        // debugger
        console.log(">>> run error in here")
        return error.response.data;
    }
);

export default instance;
