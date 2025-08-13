import { darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    componentWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        gap: responsive("1rem", { md: "2rem" }),
        marginTop: responsive("1rem", { md: "2rem", lg: "3rem" }),
    },
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: responsive("100%", { md: "60%" }),
    },
    itemsWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: responsive("1rem", { md: "2rem" }),
    },
    priceWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    mainHeader: {
        fontSize: responsive("2rem", { md: "2.5rem" }),
        fontWeight: "500",
        color: darkGray,
    },
    itemHeader: {
        fontSize: responsive("0.75rem", { md: "1rem" }),
        fontWeight: "400",
        color: darkGray,
    },
    price: {
        fontSize: responsive("1rem", { md: "1.25rem" }),
        fontWeight: "500",
        color: darkGray,
    },
};
