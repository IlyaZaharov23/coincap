import { HEADER_PADDING_Y } from "components/Header/header.styles";
import { black } from "shared/constants/colors";

export const styles = {
    contentWrapper: {
        height: `calc(100vh - ${HEADER_PADDING_Y * 2 + 48}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "700",
        color: black,
        marginBottom: "1rem",
    },
};
