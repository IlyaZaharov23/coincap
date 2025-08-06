import { bluePrimary, blueSelected, darkGray, hoverGray, white } from "shared/constants/colors";

export const styles = {
    mainWrapper: (isSelected: boolean | undefined) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",
        padding: "0.25rem 1rem",
        gap: "1rem",
        backgroundColor: isSelected ? blueSelected : white,
        color: isSelected ? bluePrimary : darkGray,
        "&:hover": {
            backgroundColor: hoverGray,
            color: darkGray,
        },
    }),
    namesWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 0,
    },
    coinName: {
        fontSize: "0.875rem",
        fontWeight: "400",
        color: "inherit",
    },
    coinSymbol: {
        fontSize: "0.75rem",
        fontWeight: "300",
        color: "inherit",
    },
};
