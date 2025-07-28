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
        justifyContent: "center",
        gap: "2rem",
    },
    wrapperName: {
        fontSize: "1.25rem",
        fontWeight: "500",
        color: black,
    },
};
