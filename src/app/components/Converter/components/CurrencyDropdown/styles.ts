import { black, borderGray, darkGray, formGray, hoverGray, semiDarkGray, white } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    itemsWrapper: {
        gap: "0.5rem",
        maxHeight: "400px",
        overflowY: "auto",
        padding: "0.5rem 0",
        outline: "none",
        "&::-webkit-scrollbar": {
            width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: borderGray,
            borderRadius: "3px",
        },
        "&:focus": {
            outline: "none",
            boxShadow: `0 4px 12px ${black}3A, 0 2px 6px ${black}3A`,
        },
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: `1px solid ${borderGray}`,
        borderRadius: "0 6px 6px 0",
        cursor: "pointer",
        padding: "0.375rem 1rem",
        width: "100%",
        marginTop: "0.25rem",
        gap: "1rem",
    },
    buttonInfoWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonCoinName: {
        fontSize: "1rem",
        fontWeight: "500",
        color: darkGray,
    },
    arrowIcon: {
        width: "0.625rem",
        height: "0.625rem",
    },
    addCurrency: (isOpen: boolean) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        gap: "0.75rem",
        padding: "0.5rem 1rem",
        border: `1.5px solid ${borderGray}`,
        backgroundColor: isOpen ? white : formGray,
        marginTop: "0.5rem",
        marginLeft: responsive("0", { md: "3.5rem" }),
        // marginLeft: "3.5rem",
        borderRadius: "6px",
        borderColor: isOpen ? semiDarkGray : borderGray,
        color: isOpen ? darkGray : darkGray,
        "&:hover": {
            color: darkGray,
            backgroundColor: hoverGray,
            borderColor: borderGray,
        },
    }),
    addText: {
        fontSize: "1rem",
        fontWeight: "500",
        color: "inherit",
    },
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",
        padding: "0.25rem 1rem",
        gap: "1rem",
        backgroundColor: white,
        color: darkGray,
        "&:hover": {
            backgroundColor: hoverGray,
            color: darkGray,
        },
    },
    namesWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 0,
    },
    coinName: {
        fontSize: "0.875rem",
        fontWeight: "400",
        color: "inherit",
    },
    coinSymbol: {
        fontSize: "0.75rem",
        fontWeight: "300",
        color: "inherit",
    },
};
