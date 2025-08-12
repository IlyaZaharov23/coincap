import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    buttonsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: responsive("16px", { md: "8px" }),
    },
    button: {
        display: responsive("none", { md: "inline-flex" }),
    },
};
