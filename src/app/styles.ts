import { HEADER_HEIGHT } from "components/Header/styles";

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
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        marginTop: `${HEADER_HEIGHT}px`,
        height: "auto",
        overflowY: "auto",
        padding: "20px 0",
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
    topMarketsWrapper: {
        margin: "0 3rem",
    },
};
