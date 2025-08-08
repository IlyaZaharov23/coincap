import { darkGray, semiDarkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
    },
    name: {
        fontSize: responsive("2rem", { md: "2.5rem" }),
        fontWeight: "500",
        color: darkGray,
    },
    symbol: {
        fontSize: responsive("2rem", { md: "2.5rem" }),
        fontWeight: "500",
        color: semiDarkGray,
    },
};
