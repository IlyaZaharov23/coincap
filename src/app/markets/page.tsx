import { Stack } from "@chakra-ui/react";

import { FullscreenLoader } from "components/FullscreenLoader";
import { Header } from "components/Header";
import dynamic from "next/dynamic";

import { PortfolioOverview } from "./components/PortfolioOverview";
import { TopCurrencies } from "./components/TopCurrencies";
import { styles } from "./styles";

const DynamicAssetsList = dynamic(() => import("./components/AssetsList").then((mod) => mod.AssetsList), {
    loading: () => <FullscreenLoader />,
});

const PricesPage = () => {
    return (
        <Stack width="100vw" overflowX="hidden">
            <Header showNavbar />
            <Stack sx={styles.contentWrapper}>
                <Stack sx={styles.topWrapper}>
                    <TopCurrencies />
                    <PortfolioOverview />
                </Stack>
                <DynamicAssetsList />
            </Stack>
        </Stack>
    );
};

export default PricesPage;
