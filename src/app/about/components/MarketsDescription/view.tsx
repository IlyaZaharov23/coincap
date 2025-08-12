import Markets from "assets/about/Markets.png";

import { DescriptionBlockWrapper } from "../DescriptionBlockWrapper";

const featuresList = [
    {
        title: "Live Market Tracking",
        description: "Monitor price movements and market trends in real time",
    },
    {
        title: "Comprehensive Metrics",
        description: "Access detailed market data including VWAP, market caps and daily price fluctuations",
    },
    {
        title: "User-Friendly Interface",
        description: "Clean, organized presentation of complex market data for easy analysis",
    },
];

export const MarketsDescription = () => {
    return (
        <DescriptionBlockWrapper
            mainTitle="Markets"
            mainDescription="This application provides real-time cryptocurrency market data, displaying current prices, 24-hour
                 changes, market capitalizations and trading volumes for top digital assets including Bitcoin (BTC),
                 Ethereum (ETH), XRP, and major stablecoins like USDT and USDC."
            listTitle="Key Features"
            descriptionList={featuresList}
            icon={Markets}
        />
    );
};
