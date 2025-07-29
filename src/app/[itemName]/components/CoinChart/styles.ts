import { borderGray, darkGray } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        border: `1px solid ${borderGray}`,
        borderRadius: "20px",
        margin: "2rem 4rem",
        padding: "2rem",
        width: "100%",
    },
    price: {
        fontSize: "2.5rem",
        fontWeight: "500",
        color: darkGray,
    },
    changes: (color: string) => ({
        fontSize: "1.5rem",
        fontWeight: "400",
        color,
    }),
};
