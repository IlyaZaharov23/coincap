import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { Converter } from "./components/Converter";
import { Description } from "./components/Description";
import { styles } from "./styles";

export default function Home() {
    return (
        <Stack sx={styles.pageWrapper}>
            <Header showSignIn showSignUp showPopularCoins showNavbar />
            <Stack sx={styles.contentWrapper}>
                <Stack sx={styles.topContentWrapper}>
                    <Description />
                    <Converter />
                </Stack>
                <Stack>{/* Markets */}</Stack>
            </Stack>
        </Stack>
    );
}
