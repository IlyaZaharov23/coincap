import { black, borderGray, formGray, white } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: responsive("none", { md: `2px solid ${borderGray}` }),
        borderRadius: "10px",
        backgroundColor: responsive(white, { md: formGray }),
        padding: responsive("0 2rem", { md: "2rem" }),
        boxShadow: responsive("none", { md: `0 4px 12px ${black}3A, 0 2px 6px ${black}3A` }),
    },
    text: {
        fontSize: "2rem",
        fontWeight: "700",
        color: black,
        marginBottom: "1rem",
    },
    textButtonWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    helperText: {
        fontSize: "1rem",
        fontWeight: "500",
        color: black,
    },
    confirmButton: {
        marginTop: "1rem",
        width: "300px",
    },
    textButton: {
        padding: 0,
    },
    secondaryButton: {
        width: "300px",
    },
};
