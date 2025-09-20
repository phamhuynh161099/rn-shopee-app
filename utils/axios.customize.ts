import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://10.0.2.2:8080",
});

instance.interceptors.request.use(
    async (config) => {
        const access_token = await AsyncStorage.getItem("access_token");
        config.headers["Authorization"] = `Bearer ${access_token}`;
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
        config.headers["Access-Control-Allow-Origin"] = ["*"]

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
