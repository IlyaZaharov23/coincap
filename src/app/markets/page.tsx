import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { AssetsList } from "./components/AssetsList";
import { PortfolioOverview } from "./components/PortfolioOverview";
import { TopCurrencies } from "./components/TopCurrencies";
import { styles } from "./styles";

const PricesPage = () => {
    return (
        <Stack>
            <Header showNavbar showLogOut />
            <Stack>
                <Stack sx={styles.topWrapper}>
                    <TopCurrencies />
                    <PortfolioOverview />
                </Stack>
                <AssetsList />
            </Stack>
        </Stack>
    );
};

export default PricesPage;
