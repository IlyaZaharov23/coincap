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
        borderRadius: "20px",
        textDecoration: "none",
        borderBottom: () => "none",
    },
    [BUTTON_VARIANT.SECONDARY]: {
        backgroundColor: blueSecondary,
        color: black,
        hover: {
            backgroundColor: hoverGray,
            color: black,
        },
        borderRadius: "20px",
        textDecoration: "none",
        borderBottom: () => "none",
    },
    [BUTTON_VARIANT.TEXT]: {
        backgroundColor: white,
        color: bluePrimary,
        hover: {
            backgroundColor: white,
            color: bluePrimary,
        },
        borderRadius: "20px",
        textDecoration: "underline",
        borderBottom: () => "none",
    },
    [BUTTON_VARIANT.TAB]: {
        backgroundColor: white,
        color: black,
        hover: {
            backgroundColor: white,
            color: bluePrimary,
        },
        borderRadius: "0",
        textDecoration: "none",
        borderBottom: (isActive?: boolean) => (isActive ? `1.5px solid ${bluePrimary}` : "none"),
    },
};
