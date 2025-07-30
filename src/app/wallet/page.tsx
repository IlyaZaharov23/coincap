import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { CoinsList } from "./components/CoinsList";
import { styles } from "./styles";

export default function Wallet() {
    return (
        <Stack sx={styles.mainWrapper}>
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <CoinsList />
            </Stack>
        </Stack>
    );
}
