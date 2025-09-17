import axios from "@/utils/axios.customize";

export const registerAPI = (email: string, password: string, name: string) => {
    const url = `http://10.0.2.2:8080/api/v1/auth/register`;
    return axios.post(url, { email, password, name });
};

export const verifyCode = (email: string, code: string) => {
    const url = `http://10.0.2.2:8080/api/v1/auth/verify-code`;
    return axios.post(url, { email, code });
};

export const loginAPI = (email: string, password: string) => {
    const url = `http://10.0.2.2:8080/api/v1/auth/login`;
    return axios.post(url, { username: email, password });
};

