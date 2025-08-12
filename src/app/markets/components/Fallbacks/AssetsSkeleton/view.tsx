import { Skeleton, Td, Tr } from "@chakra-ui/react";

import { useIsMobile, useIsTablet } from "hooks/useDevice";

import { styles } from "./styles";

export const AssetsSkeleton = () => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const skeletonList = Array.from({ length: 10 });
    return (
        <>
            {skeletonList.map((_, index) => (
                <Tr key={index} sx={styles.tableRow}>
                    <Td sx={styles.col1}>
                        <Skeleton height="100%" />
                    </Td>
                    {!isMobile && (
                        <Td sx={styles.col2}>
                            <Skeleton height="100%" />
                        </Td>
                    )}
                    <Td sx={styles.col3}>
                        <Skeleton height="100%" />
                    </Td>
                    {!isMobile && (
                        <Td sx={styles.col4}>
                            <Skeleton height="100%" />
                        </Td>
                    )}
                    <Td sx={styles.col5}>
                        <Skeleton height="100%" />
                    </Td>
                    {!isMobile && !isTablet && (
                        <Td sx={styles.col6}>
                            <Skeleton height="100%" />
                        </Td>
                    )}
                </Tr>
            ))}
        </>
    );
};
