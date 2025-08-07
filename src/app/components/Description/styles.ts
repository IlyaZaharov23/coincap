import { black, bluePrimary } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    mainWrapper: {
        gap: "1rem",
        padding: "1rem",
        width: responsive("100%", { md: "500px !important", lg: "500px !important" }),
    },
    mainTitle: {
        fontSize: responsive("2rem", { md: "3rem" }),
        fontWeight: "500",
        color: black,
    },
    secondaryTitle: {
        fontSize: responsive("1rem", { md: "1.5rem" }),
        fontWeight: "400",
        color: black,
    },
    actionButton: {
        fontSize: "1.25rem",
        fontWeight: "400",
        color: bluePrimary,
        cursor: "pointer",
    },
};
