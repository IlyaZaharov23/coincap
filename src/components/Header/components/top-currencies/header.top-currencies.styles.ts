import { black } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 1rem",
        gap: "2rem",
    },
    currencyWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 0,
    },
    currency: {
        fontSize: "0.75rem",
        fontWeight: "600",
        color: black,
    },
    price: {
        fontSize: "0.75rem",
        fontWeight: "400",
        color: black,
    },
};
