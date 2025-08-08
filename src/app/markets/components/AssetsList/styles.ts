import { TOP_WRAPPER_MARGIN } from "app/markets/styles";
import { HEADER_HEIGHT } from "components/Header/styles";
import { black } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

import { PAGINATION_WRAPPER_PADDING_BOTTOM, PAGINATION_WRAPPER_PADDING_TOP } from "../Pagination/styles";

const TABLE_MARGIN_TOP = 32;
const TABLE_HEADER_HEIGHT = 41;

export const styles = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    container: (coefficient: number) => ({
        marginTop: `${TABLE_MARGIN_TOP}px`,
        width: responsive("100vw", { md: "100vw", xl: "90vw", "2xl": "75vw" }),
        maxWidth: "100vw",
        height: `calc(100vh - ${
            HEADER_HEIGHT +
            TOP_WRAPPER_MARGIN +
            TABLE_HEADER_HEIGHT +
            PAGINATION_WRAPPER_PADDING_BOTTOM +
            PAGINATION_WRAPPER_PADDING_TOP +
            coefficient +
            40
        }px)`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    }),
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
        width: responsive("100vw", { xl: "100%" }),
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
    col1: {
        maxWidth: responsive("34vw", { md: "26vw", "2xl": "23vw" }),
        width: responsive("34vw", { md: "26vw", "2xl": "23vw" }),
    },
    col2: {
        maxWidth: responsive("0", { md: "18vw", "2xl": "11vw" }),
        width: responsive("0", { md: "18vw", "2xl": "11vw" }),
    },
    col3: {
        maxWidth: responsive("38vw", { md: "19vw", "2xl": "11vw" }),
        width: responsive("38vw", { md: "19vw", "2xl": "11vw" }),
    },
    col4: {
        maxWidth: responsive("0", { md: "20vw", "2xl": "14vw" }),
        width: responsive("0", { md: "20vw", "2xl": "14vw" }),
    },
    col5: {
        maxWidth: responsive("28vw", { md: "17vw", "2xl": "11vw" }),
        width: responsive("28vw", { md: "17vw", "2xl": "11vw" }),
    },
    col6: {
        maxWidth: responsive("0", { md: "0", "2xl": "5vw" }),
        width: responsive("0", { md: "0", "2xl": "5vw" }),
    },
};
