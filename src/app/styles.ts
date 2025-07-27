import { HEADER_PADDING_Y } from "components/Header/styles";

export const styles = {
    pageWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        gap: 0,
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: `calc(100vh - ${HEADER_PADDING_Y * 2 + 50}px)`,
    },
    topContentWrapper: {
        width: "60vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        gap: "3rem",
    },
};
