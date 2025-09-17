import axios from "@/utils/axios.customize";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const printAsyncStorage = async () => {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys!, (error, stores) => {
            let asyncStorage: any = {}
            stores?.map((result, i, store) => {
                asyncStorage[store[i][0]] = store[i][1]
            })
            console.log(JSON.stringify(asyncStorage, null, 2))
        })
    })
};

