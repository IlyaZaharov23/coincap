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
    rowText: (width: string) => ({
        fontSize: "0.875rem",
        fontWeight: "500",
        color: darkGray,
        cursor: "pointer",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: width,
        width: width,
        maxHeight: `${ROW_HEIGHT}px`,
        padding: responsive("0.438rem 1rem", { md: "1rem 1.5rem" }),
    }),
};
