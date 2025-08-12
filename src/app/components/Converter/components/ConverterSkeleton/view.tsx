import { Skeleton, Stack } from "@chakra-ui/react";

import { styles } from "./styles";

export const ConverterSkeleton = () => {
    return (
        <Stack sx={styles.wrapper}>
            <Skeleton width="calc(100% - 64px)" height="77px" />
            <Skeleton width="calc(100% - 64px)" height="77px" />
            <Skeleton width="calc(100% - 64px)" height="76px" />
        </Stack>
    );
};
