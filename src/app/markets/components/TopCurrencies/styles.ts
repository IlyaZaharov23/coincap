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
    assetWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "0",
    },
    textWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    wrapperName: {
        fontSize: "1.25rem",
        fontWeight: "500",
        color: black,
    },
    currencyName: {
        fontSize: "1rem",
        fontWeight: "600",
        color: black,
    },
    currencyPrice: (priceStatus: string) => ({
        fontSize: "0.875rem",
        fontWeight: "400",
        color:
            priceStatus === PRICE_STATUS.INCREASED
                ? green
                : priceStatus === PRICE_STATUS.DECREASED
                  ? errorRed
                  : darkGray,
    }),
};
