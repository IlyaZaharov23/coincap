import { HEADER_HEIGHT } from "components/Header/styles";

export const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        width: "100%",
        flexDirection: "column",
    },
};
