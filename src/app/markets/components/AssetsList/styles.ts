import { TOP_WRAPPER_MARGIN } from "app/markets/styles";
import { HEADER_HEIGHT } from "components/Header/styles";
import { black } from "shared/constants/colors";

import { PAGINATION_WRAPPER_PADDING_BOTTOM, PAGINATION_WRAPPER_PADDING_TOP } from "../Pagination/styles";

const TABLE_MARGIN_TOP = 32;

const TABLE_HEADER_HEIGHT = 41;

export const styles = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        marginTop: `${TABLE_MARGIN_TOP}px`,
        width: "75vw",
        maxWidth: "100vw",
        height: `calc(100vh - ${HEADER_HEIGHT + TOP_WRAPPER_MARGIN + TABLE_HEADER_HEIGHT + PAGINATION_WRAPPER_PADDING_BOTTOM + PAGINATION_WRAPPER_PADDING_TOP + 128 + 40}px)`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    table: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
    headWrapper: {
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "white",
        width: "100%",
    },
    bodyWrapper: {
        flex: 1,
        overflowY: "auto",
        width: "100%",
    },
    headText: {
        th: {
            fontSize: "0.875rem",
            fontWeight: "400",
            color: black,
        },
    },
    headerItem: (width: string) => ({
        width,
    }),
};
