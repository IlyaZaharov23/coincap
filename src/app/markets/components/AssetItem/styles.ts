import { darkGray } from "shared/constants/colors";

export const styles = {
    rowText: (width: string) => ({
        fontSize: "0.875rem",
        fontWeight: "400",
        color: darkGray,
        cursor: "pointer",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: width,
        width: width,
    }),
};
