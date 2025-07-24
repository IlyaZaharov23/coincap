import { Stack } from "@chakra-ui/react";

import { Header } from "components/header/header.component";

import { Converter } from "./components/converter/app.converter.component";
import { Description } from "./components/description/app.description.component";
import { styles } from "./page.styles";

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
