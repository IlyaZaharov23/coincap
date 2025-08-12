import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const styles = {
    wrapper: {
        width: responsive("302px", { md: "468px", lg: "418px", xl: "339px", "2xl": "468px" }),
        gap: "1rem",
    },
    topItem: {
        width: "100%",
        height: responsive("96px", { md: "144px" }),
    },
    bottomItem: {
        width: "100%",
        height: responsive("48px", { md: "72px" }),
    },
};
