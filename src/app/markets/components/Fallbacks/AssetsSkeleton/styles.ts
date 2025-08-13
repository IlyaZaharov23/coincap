import { TABLE_DATA_WIDTH } from "app/markets/constants/tableDataWidth";
import { responsive } from "utils/helpers/themeBreakpoints";

import { ROW_HEIGHT, ROW_HEIGHT_MOB } from "../../AssetItem/styles";

export const styles = {
    tableRow: {
        maxHeight: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
        height: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
        boxSizing: "border-box",
    },
    col1: {
        maxWidth: TABLE_DATA_WIDTH.COL_1,
        width: TABLE_DATA_WIDTH.COL_1,
        height: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
    },
    col2: {
        maxWidth: TABLE_DATA_WIDTH.COL_2,
        width: TABLE_DATA_WIDTH.COL_2,
        height: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
    },
    col3: {
        maxWidth: TABLE_DATA_WIDTH.COL_3,
        width: TABLE_DATA_WIDTH.COL_3,
        height: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
    },
    col4: {
        maxWidth: TABLE_DATA_WIDTH.COL_4,
        width: TABLE_DATA_WIDTH.COL_4,
        height: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
    },
    col5: {
        maxWidth: TABLE_DATA_WIDTH.COL_5,
        width: TABLE_DATA_WIDTH.COL_5,
        height: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
    },
    col6: {
        maxWidth: TABLE_DATA_WIDTH.COL_6,
        width: TABLE_DATA_WIDTH.COL_6,
        height: responsive(`${ROW_HEIGHT_MOB}px`, { md: `${ROW_HEIGHT}px` }),
    },
};
