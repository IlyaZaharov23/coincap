import { Spinner, Stack } from "@chakra-ui/react";

import { Header } from "components/Header";
import dynamic from "next/dynamic";

import { styles } from "./styles";

const DynamicCoinContent = dynamic(() => import("./components/CoinContent").then((mod) => mod.CoinContent), {
    loading: () => <Spinner />,
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
