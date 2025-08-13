import { black } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: responsive("100vw", { md: "85vw", xl: "100%" }),
        margin: responsive("0.75rem 0", { md: "2rem" }),
    },
    topAssetsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: responsive("center", { xl: "flex-start" }),
        gap: responsive("0.5rem", { lg: "2rem" }),
        marginTop: "0.5rem",
    },
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: responsive("0 1.5rem", { md: "0 1rem", lg: "0 2rem", xl: "0", "2xl": "0 1rem" }),
    },
    wrapperName: {
        fontSize: "1.5rem",
        fontWeight: "500",
        color: black,
    },
};
