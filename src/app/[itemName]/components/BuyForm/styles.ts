import { black, borderGray } from "shared/constants/colors";

export const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        border: `2px solid ${borderGray}`,
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: `0 4px 12px ${black}3A, 0 2px 6px ${black}3A`,
    },
};
