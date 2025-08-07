import { black, bluePrimary, borderGray } from "shared/constants/colors";

const QUOTE_INPUT_WRAPPER_GAP = 16;
const ICON_SIZE = 16;

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        border: `1px solid ${borderGray}`,
        borderRadius: "20px",
        padding: "1.5rem 2rem",
        boxShadow: `0 4px 12px ${black}3A, 0 2px 6px ${black}3A`,
        width: "500px",
        gap: 0,
    },
    topWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 0,
        width: "100%",
    },
    baseInputWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: `${QUOTE_INPUT_WRAPPER_GAP}px`,
    },
    quoteInputWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: `${QUOTE_INPUT_WRAPPER_GAP}px`,
    },
    input: {
        width: `calc(100% - ${QUOTE_INPUT_WRAPPER_GAP + ICON_SIZE}px)`,
        borderColor: borderGray,
        "&:focus": {
            borderColor: bluePrimary,
            boxShadow: `0 0 0 1px ${bluePrimary}`,
        },
    },
    quoteInput: (showQuoteIcon: boolean) => ({
        width: showQuoteIcon ? "100%" : `calc(100% - ${QUOTE_INPUT_WRAPPER_GAP + ICON_SIZE}px)`,
    }),
    closeIcon: {
        cursor: "pointer",
        width: `${ICON_SIZE}px`,
        height: `${ICON_SIZE}px`,
        "&:hover": {
            color: bluePrimary,
        },
    },
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
    fullWidthSelect: {
        width: "100%",
        height: "42px",
        borderColor: borderGray,
        borderRadius: "6px",
    },
    bottomWrapper: {
        width: "100%",
    },
    button: {
        marginTop: "1rem",
        width: "100%",
    },
    helperText: {
        fontSize: "0.75rem",
        fontWeight: "500",
        color: black,
    },
};
