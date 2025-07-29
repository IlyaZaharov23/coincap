import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { CoinContent } from "./components/CoinContent";
import { styles } from "./styles";

export default function MarketItem() {
    return (
        <Stack>
            <Header showBack showNavbar showLogOut />
            <Stack sx={styles.contentWrapper}>
                <CoinContent />
            </Stack>
        </Stack>
    );
}
