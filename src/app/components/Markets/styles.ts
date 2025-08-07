import { black } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: responsive("90vw", { md: "90vw", lg: "95vw", xl: "100%" }),
        margin: responsive("1.5rem", { md: "2rem" }),
    },
    topAssetsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: responsive("center", { xl: "flex-start" }),
        gap: "1rem",
        marginTop: "0.5rem",
    },
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: responsive("0 1.5rem", { md: "0 2rem", xl: "0" }),
    },
    wrapperName: {
        fontSize: "1.5rem",
        fontWeight: "500",
        color: black,
    },
};
