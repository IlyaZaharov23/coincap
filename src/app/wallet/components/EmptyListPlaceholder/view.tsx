import { Stack, Text } from "@chakra-ui/react";

import EmptyWallet from "assets/emptyWallet.svg";
import { Button } from "components/Button";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { ROUTES } from "shared/constants/routes";

import { styles } from "./styles";

export const EmptyListPlaceholder = () => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const router = useRouter();

    const navigateToAssets = () => {
        router.push(ROUTES.MARKETS);
    };

    return (
        <Stack sx={styles.wrapper}>
            <Image src={EmptyWallet} alt="empty-wallet" width={isMobile ? 250 : isTablet ? 300 : 400} />
            <Stack sx={styles.textWrapper}>
                <Text sx={styles.title}>Nothing here yet!</Text>
                <Text sx={styles.description}>Start building your portfolio by adding cryptocurrencies</Text>
            </Stack>
            <Button variant={BUTTON_VARIANT.PRIMARY} sx={styles.button} onClick={navigateToAssets}>
                Get Some Assets
            </Button>
        </Stack>
    );
};
