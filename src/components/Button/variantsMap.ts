import { black, bluePrimary, blueSecondary, hoverGray, white } from "shared/constants/colors";

import { BUTTON_VARIANT } from "../../shared/constants/buttonVariants";

export const buttonVariantsMap = {
    [BUTTON_VARIANT.PRIMARY]: {
        backgroundColor: bluePrimary,
        color: () => white,
        hover: {
            backgroundColor: blueSecondary,
            color: black,
        },
        borderRadius: "20px",
        textDecoration: "none",
    },
    [BUTTON_VARIANT.SECONDARY]: {
        backgroundColor: blueSecondary,
        color: () => black,
        hover: {
            backgroundColor: hoverGray,
            color: black,
        },
        borderRadius: "20px",
        textDecoration: "none",
    },
    [BUTTON_VARIANT.TEXT]: {
        backgroundColor: "transparent",
        color: () => bluePrimary,
        hover: {
            backgroundColor: "transparent",
            color: bluePrimary,
        },
        borderRadius: "20px",
        textDecoration: "underline",
    },
    [BUTTON_VARIANT.TAB]: {
        backgroundColor: white,
        color: (isActive?: boolean) => (isActive ? bluePrimary : black),
        hover: {
            backgroundColor: white,
            color: bluePrimary,
        },
        borderRadius: "0",
        textDecoration: "none",
    },
};
