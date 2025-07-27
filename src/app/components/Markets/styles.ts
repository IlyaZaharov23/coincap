import { black, darkGray, errorRed, green } from "shared/constants/colors";
import { PRICE_STATUS } from "shared/constants/priceStatus";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    topAssetsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
    },
    wrapperName: {
        fontSize: "1.25rem",
        fontWeight: "500",
        color: black,
    },
};
