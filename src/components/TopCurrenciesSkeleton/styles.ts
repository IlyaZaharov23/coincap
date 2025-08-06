import { borderGray } from "shared/constants/colors";

export const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${borderGray}`,
        padding: "0.5rem 1rem",
        borderRadius: "20px",
        gap: "1rem",
    },
};
