import { HEADER_HEIGHT } from "components/Header/styles";
import { white } from "shared/constants/colors";

const WALLET_CONTENT_MARGIN_TOP = 48;
const WALLET_CONTENT_PADDING_BOTTOM = 48;
export const WALLET_CONTENT_SUMMARY = WALLET_CONTENT_MARGIN_TOP + WALLET_CONTENT_PADDING_BOTTOM + HEADER_HEIGHT;

export const styles = {
    mainWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    contentWrapper: {
        marginTop: `${HEADER_HEIGHT + WALLET_CONTENT_MARGIN_TOP}px`,
        backgroundColor: white,
        paddingBottom: `${WALLET_CONTENT_PADDING_BOTTOM}px`,
        width: "70vw",
        minHeight: `calc(100vh - ${WALLET_CONTENT_SUMMARY}px)`,
        overflowY: "auto",
        height: "auto",
    },
};
