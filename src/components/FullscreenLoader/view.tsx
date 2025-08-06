import { CircularProgress, Stack } from "@chakra-ui/react";

import { bluePrimary } from "shared/constants/colors";

import { styles } from "./styles";

export const FullscreenLoader = () => {
    return (
        <Stack sx={styles.wrapper}>
            <CircularProgress isIndeterminate color={bluePrimary} />
        </Stack>
    );
};
