export type RegistrationRespData = {
    id: number;
    username: string;
    email: string;
    gender: string;
    age: number;
};

export interface RegRequestData {
    password: string;
    username: string;
    email: string;
    gender: string;
    age: number;
}

export interface AuthRequestData {
    email: string;
    password: string;
}

export type AuthRespData = { token: string };
