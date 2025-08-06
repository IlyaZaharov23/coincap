import { HEADER_HEIGHT } from "components/Header/styles";

export const TOP_WRAPPER_MARGIN = 32;

export const styles = {
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: `${TOP_WRAPPER_MARGIN}px`,
        marginBottom: "0",
        padding: "0 1rem",
        width: "75vw",
    },
    contentWrapper: {
        marginTop: `${HEADER_HEIGHT}px`,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
        width: "100vw",
    },
};
