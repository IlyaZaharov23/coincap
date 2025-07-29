import { darkGray, semiDarkGray } from "shared/constants/colors";

export const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
    },
    name: {
        fontSize: "2.5rem",
        fontWeight: "500",
        color: darkGray,
    },
    symbol: {
        fontSize: "2.5rem",
        fontWeight: "500",
        color: semiDarkGray,
    },
};
