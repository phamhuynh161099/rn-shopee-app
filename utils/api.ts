import axios from "@/utils/axios.customize";

export const registerAPI = (email: string, password: string, name: string) => {
    const url = `http://10.0.2.2:8080/api/v1/auth/register`;
    return axios.post(url, { email, password, name });
};

