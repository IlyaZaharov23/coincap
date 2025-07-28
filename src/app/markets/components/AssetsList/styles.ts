import { TOP_WRAPPER_MARGIN } from "app/markets/styles";
import { HEADER_HEIGHT } from "components/Header/styles";
import { black, darkGray, hoverGray } from "shared/constants/colors";

const TABLE_MARGIN_TOP = 32;

const TABLE_HEADER_HEIGHT = 41;

export const TABLE_BODY_MAX_HEIGHT = `calc(100vh - ${HEADER_HEIGHT + TOP_WRAPPER_MARGIN + TABLE_HEADER_HEIGHT}px)`;

export const styles = {
    container: {
        borderTop: `1px solid ${hoverGray}`,
        marginTop: `${TABLE_MARGIN_TOP}px`,
        width: "100%",
        maxWidth: "100vw",
        height: `calc(100vh - ${HEADER_HEIGHT + TOP_WRAPPER_MARGIN + TABLE_HEADER_HEIGHT}px)`,
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
        boxShadow: `0 2px 4px ${black}3A`,
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
            fontWeight: "600",
            color: black,
        },
    },
    headerItem: (width: string) => ({
        width,
    }),
    rowText: (width: string) => ({
        fontSize: "0.875rem",
        fontWeight: "400",
        color: darkGray,
        cursor: "pointer",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: width,
        width: width,
    }),
};
