import { darkGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: "3rem",
        gap: "2rem",
    },
    coinsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "1.5rem",
    },
    mainHeader: {
        fontSize: "2.5rem",
        fontWeight: "500",
        color: darkGray,
    },
};
