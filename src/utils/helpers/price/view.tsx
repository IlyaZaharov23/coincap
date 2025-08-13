import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

import { errorRed, green } from "shared/constants/colors";

import { shouldShowDownArrow, shouldShowUpArrow } from "./status";

export const getPriceArrowIcon = (vwap24Hr: string | undefined, changePercent24Hr: string | undefined) => {
    if (shouldShowUpArrow(vwap24Hr, changePercent24Hr)) {
        return <ArrowUpIcon sx={{ color: green }} />;
    }

    if (shouldShowDownArrow(vwap24Hr, changePercent24Hr)) {
        return <ArrowDownIcon sx={{ color: errorRed }} />;
    }

    return null;
};
