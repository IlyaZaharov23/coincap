import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { Converter } from "./components/Converter";
import { DynamicDescription } from "./components/DynamicDescription";
import { Markets } from "./components/Markets";
import { styles } from "./styles";

export default function Home() {
    return (
        <Stack sx={styles.pageWrapper}>
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <Stack sx={styles.topContentWrapper}>
                    <DynamicDescription />
                    <Converter />
                </Stack>
                <Stack sx={styles.topMarketsWrapper}>
                    <Markets />
                </Stack>
            </Stack>
        </Stack>
    );
}
