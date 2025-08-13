import { Skeleton, Stack } from "@chakra-ui/react";

import { styles } from "./styles";

export const DescriptionSkeleton = () => {
    return (
        <Stack sx={styles.wrapper}>
            <Skeleton sx={styles.topItem} />
            <Skeleton sx={styles.bottomItem} />
        </Stack>
    );
};
