import { Stack } from "@chakra-ui/react";

import { Header } from "components/Header";

import { AssetsList } from "./components/AssetsList";

const PricesPage = () => {
    return (
        <Stack>
            <Header showNavbar />
            <AssetsList />
        </Stack>
    );
};

export default PricesPage;
