export const ROUTES = {
    HOME: "/",
    SIGN_UP: "/signUp",
    SIGN_IN: "/signIn",
    MARKETS: "/markets",
    MARKET_ITEM: (itemName: string) => `/${itemName}-price`,
    ABOUT: "/about",
    CONVERTER: "/converter",
    PORTFOLIO: "/portfolio",
};
