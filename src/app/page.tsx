import { Stack, Text } from "@chakra-ui/react";

import { Header } from "components/header/header.component";
import { bluePrimary } from "shared/constants/colors";

import { Description } from "./components/description/app.description.component";
import { Exchange } from "./components/exchange/app.exchange.component";
import { styles } from "./page.styles";

export default function Home() {
    return (
        <Stack sx={styles.pageWrapper}>
            <Header showSignIn showSignUp showPopularCoins showNavbar />
            <Stack sx={styles.contentWrapper}>
                <Stack sx={styles.topContentWrapper}>
                    <Description />
                    <Exchange />
                </Stack>
                <Stack>{/* Markets */}</Stack>
            </Stack>
        </Stack>
    );
}
