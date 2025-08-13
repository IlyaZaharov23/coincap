import { Stack, Text } from "@chakra-ui/react";

import emptyList from "assets/emptyList.svg";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import Image from "next/image";

import { styles } from "./styles";

export const EmptyAssetsPlaceholder = () => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    return (
        <Stack sx={styles.wrapper}>
            <Image src={emptyList} alt="empty-assets-table" width={isMobile ? 150 : isTablet ? 200 : 300} />
            <Stack sx={styles.textWrapper}>
                <Text sx={styles.title}>Failed to load data</Text>
                <Text sx={styles.description}>Please check your internet connection and try again.</Text>
            </Stack>
        </Stack>
    );
};
