export const ROUTES = {
    HOME: "/",
    SIGN_UP: "/sign-up",
    SIGN_IN: "/sign-in",
    MARKETS: "/markets",
    MARKET_ITEM: (itemName: string) => `/${itemName}-price`,
    ABOUT: "/about",
    CONVERTER: "/converter",
    PORTFOLIO: "/portfolio",
};
