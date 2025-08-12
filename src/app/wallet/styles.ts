import { HEADER_HEIGHT } from "components/Header/styles";
import { white } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

const WALLET_CONTENT_MARGIN_TOP_MOB = 16;
const WALLET_CONTENT_MARGIN_TOP_TAB = 24;
const WALLET_CONTENT_MARGIN_TOP_DESK = 48;
const WALLET_CONTENT_PADDING_BOTTOM_MOB = 48;
const WALLET_CONTENT_PADDING_BOTTOM_TAB = 48;
const WALLET_CONTENT_PADDING_BOTTOM_DESK = 48;
const WALLET_CONTENT_SUMMARY_MOB = WALLET_CONTENT_MARGIN_TOP_MOB + WALLET_CONTENT_PADDING_BOTTOM_MOB + HEADER_HEIGHT;
const WALLET_CONTENT_SUMMARY_TAB = WALLET_CONTENT_MARGIN_TOP_TAB + WALLET_CONTENT_PADDING_BOTTOM_TAB + HEADER_HEIGHT;
const WALLET_CONTENT_SUMMARY_DESK = WALLET_CONTENT_MARGIN_TOP_DESK + WALLET_CONTENT_PADDING_BOTTOM_DESK + HEADER_HEIGHT;

export const styles = {
    mainWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 0,
        marginTop: responsive(`${HEADER_HEIGHT + WALLET_CONTENT_MARGIN_TOP_MOB}`, {
            md: `${HEADER_HEIGHT + WALLET_CONTENT_MARGIN_TOP_TAB}`,
            xl: `${HEADER_HEIGHT + WALLET_CONTENT_MARGIN_TOP_DESK}px`,
        }),
        backgroundColor: white,
        paddingBottom: responsive(`${WALLET_CONTENT_PADDING_BOTTOM_MOB}px`, {
            md: `${WALLET_CONTENT_PADDING_BOTTOM_TAB}px`,
            xl: `${WALLET_CONTENT_PADDING_BOTTOM_DESK}px`,
        }),
        width: responsive("100vw", { xl: "90vw", "2xl": "70vw" }),
        minHeight: responsive(`calc(100vh - ${WALLET_CONTENT_SUMMARY_MOB}px)`, {
            md: `calc(100vh - ${WALLET_CONTENT_SUMMARY_TAB}px)`,
            xl: `calc(100vh - ${WALLET_CONTENT_SUMMARY_DESK}px)`,
        }),
        overflowY: "auto",
        height: "auto",
    },
};
