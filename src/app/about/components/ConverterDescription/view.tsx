import Converter from "assets/about/Converter.png";

import { DescriptionBlockWrapper } from "../DescriptionBlockWrapper";

const converterFeatures = [
    {
        title: "Multi-Currency Support",
        description: "Convert between major cryptocurrencies (BTC, ETH) and fiat (USD)",
    },
    {
        title: "Instant Calculations",
        description: "Get conversion results immediately after selecting currencies",
    },
    {
        title: "Flexible Pairings",
        description: "Easily switch base and target currencies with dropdown menus",
    },
    {
        title: "Minimalist Design",
        description: "Focused functionality without unnecessary clutter",
    },
];

export const ConverterDescription = () => {
    return (
        <DescriptionBlockWrapper
            mainTitle="Coins Converter"
            mainDescription="This simple yet powerful converter allows you to quickly calculate exchange values between different cryptocurrencies and fiat currencies. The clean interface lets you select any asset pair to see real-time conversion rates."
            listTitle="Key Features"
            descriptionList={converterFeatures}
            icon={Converter}
        />
    );
};
