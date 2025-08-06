import { black } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    topAssetsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "2rem",
        marginTop: "1rem",
    },
    topWrapper: {
        display: "flex",
        flexDirection: "center",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    wrapperName: {
        fontSize: "1.5rem",
        fontWeight: "500",
        color: black,
    },
};
