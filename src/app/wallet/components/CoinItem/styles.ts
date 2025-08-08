import { darkGray, formGray, semiDarkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: formGray,
        padding: responsive("1rem", { md: "1rem 2rem" }),
        borderRadius: "20px",
    },
    infoSummaryWrapper: {
        display: "flex",
        flexDirection: responsive("column", { md: "row" }),
        alignItems: responsive("flex-start", { md: "center" }),
        justifyContent: "space-between",
        width: responsive("67%", { md: "60%" }),
        gap: responsive("0.25rem", { md: "20%", xl: "45%" }),
    },
    infoWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    nameWrapper: {
        display: "flex",
        flexDirection: responsive("row", { md: "column" }),
        alignItems: responsive("center", { md: "flex-start" }),
        justifyContent: responsive("flex-start", { md: "center" }),
        gap: responsive("0.5rem", { md: "0.125rem" }),
        width: responsive("42vw", { md: "250px" }),
    },
    priceWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: responsive("2rem", { md: "0" }),
        gap: "0.25rem",
        width: responsive("51vw", { md: "250px" }),
    },
    buttonsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "0",
        width: responsive("33%", { md: "40%" }),
    },
    coinName: {
        fontSize: "1rem",
        fontWeight: "500",
        color: darkGray,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    coinSymbol: {
        fontSize: "1rem",
        fontWeight: "300",
        color: darkGray,
    },
    coinPrice: {
        fontSize: "1rem",
        fontWeight: "500",
        color: semiDarkGray,
        whiteSpace: "nowrap",
    },
    coinCount: {
        fontSize: "1rem",
        fontWeight: "500",
        color: semiDarkGray,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    iconButton: {
        backgroundColor: formGray,
    },
};
