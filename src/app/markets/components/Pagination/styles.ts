import { bluePrimary, darkGray, white } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const PAGINATION_WRAPPER_PADDING_BOTTOM = 32;
export const PAGINATION_WRAPPER_PADDING_TOP = 16;

export const styles = {
    paginationWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: responsive(`${PAGINATION_WRAPPER_PADDING_TOP}px 8px ${PAGINATION_WRAPPER_PADDING_BOTTOM}px`, {
            md: `${PAGINATION_WRAPPER_PADDING_TOP}px 16px ${PAGINATION_WRAPPER_PADDING_BOTTOM}px`,
        }),
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
    button: (isCurrentPage: boolean) => ({
        color: isCurrentPage ? bluePrimary : darkGray,
        fontWeight: isCurrentPage ? "600" : " 400",
        padding: responsive("0.625rem", { md: "1rem" }),
        width: "auto",
        minWidth: responsive("20px", { md: "40px" }),
    }),
};
