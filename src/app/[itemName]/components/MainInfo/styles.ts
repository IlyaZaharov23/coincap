import { darkGray, semiDarkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        maxWidth: responsive("92vw", { md: "100%", lg: "50vw" }),
    },
    name: {
        fontSize: responsive("2rem", { md: "2.5rem" }),
        fontWeight: "500",
        color: darkGray,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    symbol: {
        fontSize: responsive("2rem", { md: "2.5rem" }),
        fontWeight: "500",
        color: semiDarkGray,
    },
};
