import { TABLE_DATA_WIDTH } from "app/markets/constants/tableDataWidth";
import { darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const ROW_HEIGHT = 75;
export const ROW_HEIGHT_MOB = 59;

export const styles = {
    nameWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: responsive("0.5rem", { md: "1rem" }),
    },
    nameText: {
        fontSize: "0.875rem",
        fontWeight: "500",
        color: darkGray,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    symbolText: {
        fontSize: "0.875rem",
        fontWeight: "300",
        color: darkGray,
    },
    coinInfoWrapper: {
        gap: "0.25rem",
        maxWidth: responsive("90px", { md: "100px", lg: "100%" }),
    },
    rowText: {
        fontSize: "0.875rem",
        fontWeight: "500",
        color: darkGray,
        cursor: "pointer",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxHeight: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
        padding: responsive("0.438rem 1rem", { md: "1rem 1.5rem" }),
    },
    col1: {
        maxWidth: TABLE_DATA_WIDTH.COL_1,
        width: TABLE_DATA_WIDTH.COL_1,
    },
    col2: {
        maxWidth: TABLE_DATA_WIDTH.COL_2,
        width: TABLE_DATA_WIDTH.COL_2,
    },
    col3: {
        maxWidth: TABLE_DATA_WIDTH.COL_3,
        width: TABLE_DATA_WIDTH.COL_3,
    },
    col4: {
        maxWidth: TABLE_DATA_WIDTH.COL_4,
        width: TABLE_DATA_WIDTH.COL_4,
    },
    col5: {
        maxWidth: TABLE_DATA_WIDTH.COL_5,
        width: TABLE_DATA_WIDTH.COL_5,
    },
    col6: {
        maxWidth: TABLE_DATA_WIDTH.COL_6,
        width: TABLE_DATA_WIDTH.COL_6,
    },
};
