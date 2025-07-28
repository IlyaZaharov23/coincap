import { HEADER_HEIGHT } from "components/Header/styles";

export const styles = {
    contentWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0",
        marginTop: `${HEADER_HEIGHT}px`,
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        height: "auto",
        overflowY: "auto",
    },
};
