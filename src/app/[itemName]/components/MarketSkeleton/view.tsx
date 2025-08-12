import { Skeleton, Stack } from "@chakra-ui/react";

import { styles } from "./styles";

export const MarketSkeleton = () => {
    return (
        <Stack sx={styles.wrapper}>
            <Skeleton width="100%" height="100%" />
            <Skeleton width="100%" height="100%" />
        </Stack>
    );
};
