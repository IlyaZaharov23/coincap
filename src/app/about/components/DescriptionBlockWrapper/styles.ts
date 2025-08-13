import { darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    blockWrapper: {
        width: responsive("100%", { md: "95vw", lg: "80vw", xl: "75vw" }),
        padding: responsive("1rem", { md: "1.5rem", lg: "2rem" }),
    },
    mainTitle: {
        fontSize: responsive("1.5rem", { md: "2rem", lg: "2.5rem" }),
        fontWeight: "600",
        color: darkGray,
        marginBottom: responsive("0.75rem", { md: "1rem", lg: "1.5rem" }),
    },
    description: {
        fontSize: responsive("1rem", { lg: "1.125rem" }),
        fontWeight: "400",
        color: darkGray,
        marginBottom: "1rem",
    },
    listWrapper: {
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
    },
    listTitle: {
        fontSize: responsive("1rem", { md: "1.25rem", lg: "1.5rem" }),
        fontWeight: "700",
        color: darkGray,
        marginTop: "1rem",
    },
    listItemTitle: {
        fontSize: responsive("0.75rem", { md: "1rem", lg: "1.25rem" }),
        fontWeight: "500",
        color: darkGray,
    },
};
