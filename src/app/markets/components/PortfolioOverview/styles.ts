import { black, bluePrimary } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: responsive("0.25rem", { md: "0.5rem", lg: "1rem" }),
        cursor: "pointer",
        paddingBottom: responsive("1rem", { lg: "1.125rem" }),
    },
    textWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0",
        minWidth: "170px",
    },
    total: {
        fontSize: "1rem",
        fontWeight: "500",
        color: black,
    },
    price: {
        fontSize: "1rem",
        fontWeight: "700",
        color: bluePrimary,
    },
};
