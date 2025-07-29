import { black, bluePrimary, borderGray, white } from "shared/constants/colors";

export const HEADER_PADDING_Y = 12;
export const HEADER_HEIGHT = 65;

export const styles = {
    headerWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        padding: `${HEADER_PADDING_Y}px 32px`,
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
        width: "50vw",
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
};
