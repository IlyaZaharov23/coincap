import { HEADER_HEIGHT } from "components/Header/styles";

export const TOP_WRAPPER_MARGIN = 32;

export const styles = {
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        margin: `${TOP_WRAPPER_MARGIN}px`,
        marginBottom: "0",
    },
    contentWrapper: {
        marginTop: `${HEADER_HEIGHT}px`,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        width: "100vw",
    },
};
