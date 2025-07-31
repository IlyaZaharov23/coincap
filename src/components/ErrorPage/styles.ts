import { HEADER_HEIGHT } from "components/Header/styles";
import { black } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
    },
    mainTitle: {
        fontSize: "2rem",
        fontWeight: "600",
        color: black,
    },
    secondaryTitle: {
        fontSize: "1.5rem",
        fontWeight: "500",
        color: black,
    },
};
