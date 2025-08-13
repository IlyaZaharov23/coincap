import { darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: responsive("1rem", { md: "2rem", lg: "3rem" }),
        gap: responsive("1rem", { md: "2rem" }),
    },
    coinsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: responsive("0.75rem", { lg: "1rem", xl: "1.5rem" }),
    },
    mainHeader: {
        fontSize: responsive("2rem", { md: "2.5rem" }),
        fontWeight: "500",
        color: darkGray,
    },
};
