import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { CoinMarketDescription } from "./components/CoinMarketDescription";
import { ConverterDescription } from "./components/ConverterDescription";
import { MarketsDescription } from "./components/MarketsDescription";
import { WalletDescription } from "./components/WalletDescription";
import { styles } from "./styles";

const AboutPage = () => {
    return (
        <Stack>
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <MarketsDescription />
                <CoinMarketDescription />
                <WalletDescription />
                <ConverterDescription />
            </Stack>
        </Stack>
    );
};

export default AboutPage;
