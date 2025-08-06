import { bluePrimary, borderGray, darkGray } from "shared/constants/colors";

export const styles = {
    select: {
        borderRadius: "0 6px 6px 0",
        width: "100%",
        marginTop: "0.25rem",
        height: "42px",
        borderColor: borderGray,
        "&:focus": {
            borderColor: bluePrimary,
            boxShadow: `0 0 0 1px ${bluePrimary}`,
        },
    },
    itemsWrapper: {
        gap: "0.5rem",
        maxHeight: "400px",
        overflowY: "auto",
        padding: "0.5rem 0",
        "&::-webkit-scrollbar": {
            width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: borderGray,
            borderRadius: "3px",
        },
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: `1px solid ${borderGray}`,
        borderRadius: "0 6px 6px 0",
        cursor: "pointer",
        padding: "0.375rem 1rem",
        width: "100%",
        marginTop: "0.25rem",
        gap: "1rem",
    },
    buttonInfoWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonCoinName: {
        fontSize: "1rem",
        fontWeight: "500",
        color: darkGray,
    },
    arrowIcon: {
        width: "0.625rem",
        height: "0.625rem",
    },
};
