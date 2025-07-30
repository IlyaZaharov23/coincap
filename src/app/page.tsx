import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { Converter } from "./components/Converter";
import { Description } from "./components/Description";
import { Markets } from "./components/Markets";
import { styles } from "./styles";

export default function Home() {
    return (
        <Stack sx={styles.pageWrapper}>
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <Stack sx={styles.topContentWrapper}>
                    <Description />
                    <Converter />
                </Stack>
                <Stack>
                    <Markets />
                </Stack>
            </Stack>
        </Stack>
    );
}
