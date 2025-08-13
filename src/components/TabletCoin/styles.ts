import { black, borderGray, darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${borderGray}`,
        padding: "0.5rem",
        borderRadius: "20px",
        gap: "1rem",
        cursor: "pointer",
        "&:hover": {
            borderColor: darkGray,
        },
    },
    coinWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    nameWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0",
        marginLeft: 0,
        width: responsive("120px", { md: "86px", lg: "110px" }),
    },
    name: {
        fontSize: "0.938rem",
        fontWeigth: "400",
        color: black,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "100%",
    },
    price: {
        fontSize: "0.938rem",
        fontWeight: "500",
    },
};
