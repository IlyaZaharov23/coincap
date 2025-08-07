import { black, bluePrimary } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        cursor: "pointer",
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
