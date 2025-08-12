export const API_BASE = "https://rest.coincap.io/v3";
const AUTH_BASE = "https://todo-redev.herokuapp.com";

export const COIN_CAP_API = {
    ASSETS: {
        GET_ALL: (limit: number, offset: number = 0) => `${API_BASE}/assets?limit=${limit}&offset=${offset}`,
        GET_BY_ID: (id: string) => `${API_BASE}/assets/${id}`,
        GET_HISTORY: (id: string, interval: string = "d1", start: number, end: number) =>
            `${API_BASE}/assets/${id}/history?interval=${interval}&start=${start}&end=${end}`,
        GET_MARKETS: (id: string) => `${API_BASE}/assets/${id}/markets`,
    },
    MARKETS: {
        GET_ALL: `${API_BASE}/markets`,
    },
};

export const USER_AUTH = {
    LOGIN: `${AUTH_BASE}/api/auth/login`,
    REGISTRATION: `${AUTH_BASE}/api/users/register`,
};
