import { darkGray, formGray, semiDarkGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: formGray,
        padding: "1rem 2rem",
        borderRadius: "20px",
    },
    infoWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "200px",
    },
    nameWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0.125rem",
    },
    priceWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "15%",
        marginRight: "4rem",
    },
    buttonsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    coinName: {
        fontSize: "1rem",
        fontWeight: "500",
        color: darkGray,
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
    },
    iconButton: {
        backgroundColor: formGray,
    },
};
