import { HEADER_PADDING_Y } from "components/header/styles";

export const styles = {
    contentWrapper: {
        height: `calc(100vh - ${HEADER_PADDING_Y * 2 + 50}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};
