import { borderGray, darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    mainWrapper: {
        border: `1px solid ${borderGray}`,
        borderRadius: "20px",
        margin: responsive("1rem 0", { lg: "2rem 4rem" }),
        padding: responsive("2rem 0.5rem", { md: "2rem" }),
        width: "100%",
    },
    price: {
        fontSize: responsive("2rem", { md: "2.5rem" }),
        fontWeight: "500",
        color: darkGray,
    },
    changes: (color: string) => ({
        fontSize: responsive("1rem", { md: "1.5rem" }),
        fontWeight: "400",
        color,
    }),
};
