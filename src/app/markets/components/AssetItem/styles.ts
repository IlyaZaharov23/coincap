import { darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const ROW_HEIGHT = 75;

export const styles = {
    nameWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: responsive("0.5rem", { md: "1rem" }),
    },
    nameText: {
        fontSize: "0.875rem",
        fontWeight: "500",
        color: darkGray,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    symbolText: {
        fontSize: "0.875rem",
        fontWeight: "300",
        color: darkGray,
    },
    coinInfoWrapper: {
        gap: "0.25rem",
        maxWidth: responsive("90px", { md: "100px", lg: "100%" }),
    },
    rowText: {
        fontSize: "0.875rem",
        fontWeight: "500",
        color: darkGray,
        cursor: "pointer",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxHeight: `${ROW_HEIGHT}px`,
        padding: responsive("0.438rem 1rem", { md: "1rem 1.5rem" }),
    },
    col1: {
        maxWidth: responsive("37vw", { md: "26vw", xl: "21vw", "2xl": "23vw" }),
        width: responsive("37vw", { md: "26vw", xl: "21vw", "2xl": "23vw" }),
    },
    col2: {
        maxWidth: responsive("0", { md: "18vw", xl: "16vw", "2xl": "11vw" }),
        width: responsive("0", { md: "18vw", xl: "16vw", "2xl": "11vw" }),
    },
    col3: {
        maxWidth: responsive("37vw", { md: "20vw", xl: "17vw", "2xl": "11vw" }),
        width: responsive("37vw", { md: "20vw", xl: "17vw", "2xl": "11vw" }),
    },
    col4: {
        maxWidth: responsive("0", { md: "20vw", xl: "18vw", "2xl": "14vw" }),
        width: responsive("0", { md: "20vw", xl: "18vw", "2xl": "14vw" }),
    },
    col5: {
        maxWidth: responsive("26vw", { md: "17vw", xl: "12vw", "2xl": "11vw" }),
        width: responsive("26vw", { md: "17vw", xl: "12vw", "2xl": "11vw" }),
    },
    col6: {
        maxWidth: responsive("0", { md: "0", xl: "6vw", "2xl": "5vw" }),
        width: responsive("0", { md: "0", xl: "6vw", "2xl": "5vw" }),
    },
};
