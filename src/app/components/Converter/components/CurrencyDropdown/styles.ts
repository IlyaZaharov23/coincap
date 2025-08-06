import { bluePrimary, borderGray } from "shared/constants/colors";

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
};
