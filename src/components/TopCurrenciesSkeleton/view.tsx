import { Skeleton, Stack } from "@chakra-ui/react";

import { Divider } from "components/Divider";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { black } from "shared/constants/colors";
import { DIVIDER_ORIENTATION, DIVIDER_SIZE } from "shared/constants/divider";

import { styles } from "./styles";

export const TopCurrenciesSkeleton = ({ count }: { count: number }) => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const skeletonList = Array.from({ length: count });
    return (
        <>
            {skeletonList.map((_, index) => (
                <Stack key={index} sx={styles.wrapper}>
                    <Skeleton height="52px" width="90px" />
                    {!isMobile && !isTablet && (
                        <Divider orientation={DIVIDER_ORIENTATION.VERTICAL} color={black} size={DIVIDER_SIZE.MEDIUM} />
                    )}
                    {!isMobile && !isTablet && <Skeleton height="52px" width="82px" />}
                </Stack>
            ))}
        </>
    );
};
