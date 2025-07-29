import { HEADER_HEIGHT } from "components/Header/styles";

export const styles = {
    contentWrapper: {
        marginTop: `${HEADER_HEIGHT}px`,
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        height: "auto",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        width: "100vw",
        marginBottom: "3rem",
    },
};
