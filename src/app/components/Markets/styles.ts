import { black } from "shared/constants/colors";

export const styles = {
    mainWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    // TODO: переделать с добавлением кнопок для скролла (как рекомендации в GABBIAN)
    topAssetsWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "2rem",
        marginTop: "1rem",
    },
    wrapperName: {
        fontSize: "2rem",
        fontWeight: "500",
        color: black,
    },
};
