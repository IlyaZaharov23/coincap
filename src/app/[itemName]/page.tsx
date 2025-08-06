import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";
import { FullscreenLoader } from "components/Header/components/FullscreenLoader";
import dynamic from "next/dynamic";

import { styles } from "./styles";

const DynamicCoinContent = dynamic(() => import("./components/CoinContent").then((mod) => mod.CoinContent), {
    loading: () => <FullscreenLoader />,
});

export default function MarketItem() {
    return (
        <Stack>
            <Header showBack showNavbar />
            <Stack sx={styles.contentWrapper}>
                <DynamicCoinContent />
            </Stack>
        </Stack>
    );
}
