import { responsive } from "utils/helpers/themeBreakpoints/breakpoints";

import { MARKET_PADDING_X_MOB } from "../CoinContent/styles";

export const styles = {
    wrapper: {
        width: responsive(`calc(100vw - ${MARKET_PADDING_X_MOB * 2}px)`, { md: "403px", lg: "557px", xl: "863px" }),
        height: responsive("116px", { md: "156px" }),
    },
};
