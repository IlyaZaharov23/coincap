import { darkGray } from "shared/constants/colors";

export const ROW_HEIGHT = 75;

export const styles = {
    nameWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
    },
    nameText: {
        fontSize: "0.875rem",
        fontWeight: "500",
        color: darkGray,
    },
    symbolText: {
        fontSize: "0.875rem",
        fontWeight: "300",
        color: darkGray,
    },
    rowText: (width: string) => ({
        fontSize: "0.875rem",
        fontWeight: "500",
        color: darkGray,
        cursor: "pointer",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: width,
        width: width,
        maxHeight: `${ROW_HEIGHT}px`,
        paddgin: "0 1.5rem",
    }),
};
