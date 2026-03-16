import { black, borderGray, darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: `1px solid ${borderGray}`,
        padding: "0.5rem",
        borderRadius: "20px",
        gap: "1rem",
        width: responsive("100%", { md: "325px", lg: "350px" }),
        cursor: "pointer",
        "&:hover": {
            borderColor: darkGray,
        },
    },
    coinWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: responsive("100%", { md: "325px", lg: "350px" }),
    },
    priceWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0.25rem",
    },
    priceCountWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: responsive("131px", { md: "150x" }),
    },
    nameWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 0,
        width: responsive("131px", { md: "150px" }),
    },
    name: {
        fontSize: "0.938rem",
        fontWeigth: "400",
        color: black,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    price: {
        fontSize: "0.938rem",
        fontWeight: "500",
    },
};
