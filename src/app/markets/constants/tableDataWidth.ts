import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

export const TABLE_DATA_WIDTH = {
    COL_1: responsive("37vw", { md: "26vw", xl: "21vw", "2xl": "23vw" }),
    COL_2: responsive("0", { md: "18vw", xl: "16vw", "2xl": "11vw" }),
    COL_3: responsive("37vw", { md: "20vw", xl: "17vw", "2xl": "11vw" }),
    COL_4: responsive("0", { md: "20vw", xl: "18vw", "2xl": "14vw" }),
    COL_5: responsive("26vw", { md: "17vw", xl: "12vw", "2xl": "11vw" }),
    COL_6: responsive("0", { md: "0", xl: "6vw", "2xl": "5vw" }),
};
