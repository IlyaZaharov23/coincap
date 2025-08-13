import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    wrapper: {
        width: responsive("90vw", { md: "85vw", lg: "80vw", xl: "70vw" }),
        height: responsive("205px", { md: "134px", lg: "158px", xl: "212px", "2xl": "90px" }),
    },
};
