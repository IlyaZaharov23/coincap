import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const MARKET_PADDING_X_MOB = 16;

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: responsive("100vw", { xl: "70vw" }),
        padding: responsive("0 1rem", { md: "0 3rem", xl: "0" }),
    },
    topWrapper: {
        display: "flex",
        flexDirection: responsive("column", { lg: "row" }),
        justifyContent: "space-between",
        alignItems: "center",
        margin: responsive("1.5rem 0", { lg: "3rem 0" }),
        width: "100%",
        gap: responsive("2rem", { lg: "0.5rem" }),
    },
};
