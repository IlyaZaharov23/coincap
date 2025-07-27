import { borderGray, white } from "shared/constants/colors";

export const HEADER_PADDING_Y = 12;

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
    },
    contentWrapper: {
        width: "50vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
};
