import { black, bluePrimary, borderGray, darkGray, white } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const HEADER_PADDING_Y = 12;
export const HEADER_HEIGHT = 65;

export const styles = {
    headerWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        padding: responsive(`${HEADER_PADDING_Y}px`, { md: `${HEADER_PADDING_Y}px 32px` }),
        backgroundColor: white,
        borderBottom: `1px solid ${borderGray}`,
        height: `${HEADER_HEIGHT}px`,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    backIcon: {
        cursor: "pointer",
        width: "48px",
        height: "48px",
        color: bluePrimary,
        "&:hover": {
            color: black,
        },
    },
    pathname: {
        fontSize: "1.25rem",
        fontWeight: "600",
        color: darkGray,
        alignSelf: "center",
    },
};
