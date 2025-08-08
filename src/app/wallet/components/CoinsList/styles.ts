import { darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    wrapper: {
        width: "100%",
        padding: responsive("1rem", { lg: "2rem" }),
        height: "100%",
        gap: "1rem",
    },
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: responsive("flex-end", { md: "center" }),
        justifyContent: "space-between",
        margin: responsive("0 1rem", { lg: "0.5rem 2rem", "2xl": "1rem 3rem" }),
    },
    title: {
        fontSize: responsive("1.5rem", { md: "2rem", xl: "2.5rem" }),
        fontWeight: "500",
        color: darkGray,
    },
    totalWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0",
        marginTop: "1rem",
    },
    totalTitle: {
        fontSize: responsive("1rem", { xl: "1.25rem" }),
        fontWeight: "300",
        color: darkGray,
    },
    totalValue: {
        fontSize: responsive("1rem", { xl: "1.25rem" }),
        fontWeight: "500",
        color: darkGray,
    },
};
