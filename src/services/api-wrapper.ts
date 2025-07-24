import axios from "axios";
import { apiToken } from "shared/constants/api-token";

import { AUTH_TOKEN, USER_EMAIL } from "./api.wrapper.constants";

export class ApiWrapper {
    static getHeaders() {
        const headers = {
            "Content-Type": "application/json",
            Authorization: apiToken,
        };

        return { headers };
    }
    static setToken(token: string) {
        localStorage.setItem(AUTH_TOKEN, token);
    }

    static deleteToken() {
        localStorage.removeItem(AUTH_TOKEN);
    }

    static getToken() {
        return localStorage.getItem(AUTH_TOKEN);
    }

    static setEmail(email: string) {
        sessionStorage.setItem(USER_EMAIL, email);
    }

    static getEmail() {
        return sessionStorage.getItem(USER_EMAIL);
    }

    static removeEmail() {
        sessionStorage.removeItem(USER_EMAIL);
    }

    static get(url: string) {
        return axios.get(url, this.getHeaders());
    }

    static post(url: string, bodyObj: unknown = {}) {
        return axios.post(url, JSON.stringify(bodyObj), this.getHeaders());
    }
}
