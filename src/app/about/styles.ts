import { HEADER_HEIGHT } from "components/Header/styles";

export const styles = {
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: `${HEADER_HEIGHT}px`,
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        height: "auto",
        overflowY: "auto",
        gap: 0,
        width: "100vw",
        marginBottom: "3rem",
    },
};
