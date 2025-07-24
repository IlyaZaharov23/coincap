import { apiToken } from "shared/constants/api-token";

export class ApiWrapper {
    static getHeaders() {
        const headers = {
            "Content-Type": "application/json",
            Authorization: apiToken,
        };

        return { headers };
    }
    static setToken(token: string) {
        localStorage.setItem("authToken", token);
    }

    static deleteToken() {
        localStorage.removeItem("authToken");
    }

    static getToken() {
        return localStorage.getItem("authToken");
    }

    static setEmail(email: string) {
        sessionStorage.setItem("userEmail", email);
    }

    static get(url: string) {
        return axios.get(url, this.getHeaders());
    }

    static post(url: string, bodyObj: unknown = {}) {
        return axios.post(url, JSON.stringify(bodyObj), this.getHeaders());
    }
}
