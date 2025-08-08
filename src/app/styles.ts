import { HEADER_HEIGHT } from "components/Header/styles";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    pageWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        gap: 0,
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        marginTop: `${HEADER_HEIGHT}px`,
        height: "auto",
        overflowY: "auto",
        padding: "20px 0",
    },
    topContentWrapper: {
        width: responsive("100vw", { md: "100vw", lg: "100vw", xl: "70vw" }),
        display: "flex",
        flexDirection: responsive("column", { md: "column", lg: "row" }),
        alignItems: "center",
        justifyContent: "space-between",
        padding: responsive("0 3rem", { md: "0 3rem", lg: "0 3rem" }),
        gap: responsive("1.5rem", { xl: "3rem" }),
    },
    topMarketsWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: responsive("100vw", { md: "100vw", lg: "100vw", xl: "70vw" }),
    },
};
