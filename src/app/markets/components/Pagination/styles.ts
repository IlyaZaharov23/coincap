import { bluePrimary, darkGray, white } from "shared/constants/colors";

export const PAGINATION_WRAPPER_PADDING_BOTTOM = 32;
export const PAGINATION_WRAPPER_PADDING_TOP = 16;

export const styles = {
    paginationWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: `${PAGINATION_WRAPPER_PADDING_TOP}px 16px ${PAGINATION_WRAPPER_PADDING_BOTTOM}px`,
        paddingTop: "0",
        width: "100%",
        gap: "0rem",
    },
    arrowIcon: {
        width: "24px",
        height: "24px",
        color: darkGray,
        cursor: "pointer",
        "&:hover": {
            color: bluePrimary,
        },
    },
    unavailableArrowIcon: {
        width: "24px",
        height: "24px",
        color: white,
    },
};
