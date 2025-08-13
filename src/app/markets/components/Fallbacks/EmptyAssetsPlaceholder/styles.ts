import { darkGray } from "shared/constants/colors";
import { responsive } from "utils/helpers/themeBreakpoints";

export const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "calc(100% - 41px)",
        padding: "1rem",
        marginTop: "2rem",
    },
    textWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3rem",
    },
    title: {
        fontSize: "1.125rem",
        fontWeight: "600",
        color: darkGray,
    },
    description: {
        fontSize: "1rem",
        fontWeight: "400",
        color: darkGray,
        textAlign: "center",
    },
    button: {
        width: responsive("100%", { md: "40%", xl: "30%" }),
        marginTop: "3rem",
    },
};
