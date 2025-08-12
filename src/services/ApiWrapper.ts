import axios, { AxiosInstance, AxiosResponse } from "axios";
import { apiToken } from "shared/constants/apiToken";

import { API_BASE } from "./apiEndpoints";
import { AUTH_TOKEN, USER_EMAIL } from "./constants";

export class ApiWrapper {
    private static instance: AxiosInstance = axios.create({
        baseURL: API_BASE,
    });
    static getHeaders() {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        };

        return { headers };
    }
    static setToken(token: string) {
        if (typeof window !== "undefined") {
            localStorage.setItem(AUTH_TOKEN, token);
        }
    }

    static deleteToken() {
        localStorage.removeItem(AUTH_TOKEN);
    }

    static getToken() {
        if (typeof window !== "undefined") {
            return localStorage.getItem(AUTH_TOKEN);
        }
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

    static get<T>(url: string): Promise<AxiosResponse<T>> {
        return this.instance.get<T>(url, this.getHeaders());
    }

    static post(url: string, bodyObj: unknown = {}) {
        return axios.post(url, JSON.stringify(bodyObj), this.getHeaders());
    }
}
