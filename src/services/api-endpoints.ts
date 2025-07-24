const API_BASE = "https://api.coincap.io/v2";
const AUTH_BASE = "https://todo-redev.herokuapp.com/";

export const COIN_CAP_API = {
    ASSETS: {
        GET_ALL: (limit: number, offset: number = 0) => `${API_BASE}/assets?limit=${limit}&offset=${offset}`,
        GET_BY_ID: (id: string) => `${API_BASE}/assets/${id}`,
        GET_HISTORY: (id: string, interval: string = "d1") => `${API_BASE}/assets/${id}/history?interval=${interval}`,
        GET_MARKETS: (id: string) => `${API_BASE}/assets/${id}/markets`,
    },
    RATES: {
        GET_ALL: `${API_BASE}/rates`,
        GET_BY_ID: (id: string) => `${API_BASE}/rates/${id}`,
    },
    EXCHANGES: {
        GET_ALL: `${API_BASE}/exchanges`,
        GET_BY_ID: (id: string) => `${API_BASE}/exchanges/${id}`,
    },
    MARKETS: {
        GET_ALL: `${API_BASE}/markets`,
        GET_BY_EXCHANGE: (exchangeId: string) => `${API_BASE}/markets?exchangeId=${exchangeId}`,
        GET_BY_BASE_QUOTE: (baseSymbol: string, quoteSymbol: string) =>
            `${API_BASE}/markets?baseSymbol=${baseSymbol}&quoteSymbol=${quoteSymbol}`,
    },
    CANDLES: {
        GET: (exchange: string, interval: string, baseId: string, quoteId: string) =>
            `${API_BASE}/candles?exchange=${exchange}&interval=${interval}&baseId=${baseId}&quoteId=${quoteId}`,
    },
};

export const USER_AUTH = {
    LOGIN: `${AUTH_BASE}/api/auth/login`,
    REGISTRATION: `${AUTH_BASE}/api/users/register`,
};
