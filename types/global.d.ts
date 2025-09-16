declare module "*.png" {
    const value: import("react-native").ImageSourcePropType;
    export = value;
}

declare module "*.jpg" {
    const value: import("react-native").ImageSourcePropType;
    export = value;
}

// declare module 'axios' {
//     export interface AxiosResponse<T = any> extends Promise<T> { }
// }