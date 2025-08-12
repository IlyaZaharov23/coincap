import { HEADER_HEIGHT } from "components/Header/styles";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const TOP_WRAPPER_MARGIN = 32;

export const styles = {
    topWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: responsive("flex-end", { xl: "flex-end" }),
        justifyContent: "space-between",
        margin: responsive(`${TOP_WRAPPER_MARGIN}px 0`, { xl: `${TOP_WRAPPER_MARGIN}px 0` }),
        marginBottom: "0",
        padding: "0 1rem",
        width: responsive("100%", { xl: "90vw", "2xl": "75vw" }),
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
        marginTop: `${HEADER_HEIGHT}px`,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        overflowY: "hidden",
        width: "100vw",
    },
};
