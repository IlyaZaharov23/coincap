import { black, bluePrimary, blueSecondary, hoverGray, white } from "shared/constants/colors";

import { BUTTON_VARIANT } from "../../shared/constants/button-variants";

export const buttonVariantsMap = {
    [BUTTON_VARIANT.PRIMARY]: {
        backgroundColor: bluePrimary,
        color: white,
        hover: {
            backgroundColor: blueSecondary,
            color: black,
        },
        textDecoration: "none",
    },
    [BUTTON_VARIANT.SECONDARY]: {
        backgroundColor: white,
        color: black,
        hover: {
            backgroundColor: hoverGray,
            color: black,
        },
        textDecoration: "none",
    },
    [BUTTON_VARIANT.TEXT]: {
        backgroundColor: white,
        color: bluePrimary,
        hover: {
            backgroundColor: white,
            color: bluePrimary,
        },
        textDecoration: "underline",
    },
    [BUTTON_VARIANT.TAB]: {
        backgroundColor: white,
        color: black,
        hover: {
            backgroundColor: white,
            color: bluePrimary,
        },
    },
};
