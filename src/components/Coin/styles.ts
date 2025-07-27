import { black, borderGray, darkGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${borderGray}`,
        padding: "0.5rem 1rem",
        borderRadius: "20px",
        gap: "1rem",
        cursor: "pointer",
        "&:hover": {
            borderColor: darkGray,
        },
    },
    coinWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    priceWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0.25rem",
    },
    nameWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0.25rem",
        marginLeft: "0.5rem",
    },
    priceCountWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: "1rem",
        fontWeigth: "400",
        color: black,
    },
    price: {
        fontSize: "1rem",
        fontWeight: "500",
    },
};
