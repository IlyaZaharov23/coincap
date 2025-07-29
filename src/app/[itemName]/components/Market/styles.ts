import { darkGray } from "shared/constants/colors";

export const styles = {
    componentWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        gap: "2rem",
        marginTop: "3rem",
    },
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
    },
    itemsWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2rem",
    },
    priceWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    mainHeader: {
        fontSize: "2.5rem",
        fontWeight: "500",
        color: darkGray,
    },
    itemHeader: {
        fontSize: "1rem",
        fontWeight: "400",
        color: darkGray,
    },
    price: {
        fontSize: "1.25rem",
        fontWeight: "500",
        color: darkGray,
    },
};
