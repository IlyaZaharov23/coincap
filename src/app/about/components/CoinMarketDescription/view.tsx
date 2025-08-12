import CoinMarket from "assets/about/CoinMarket.png";

import { DescriptionBlockWrapper } from "../DescriptionBlockWrapper";

const coinItemFeatures = [
    {
        title: "Detailed Asset Analytics",
        description: "View complete statistics and price history for any cryptocurrency",
    },
    {
        title: "Interactive Charts",
        description: "Analyze price movements through visual historical data",
    },
    {
        title: "Portfolio Integration",
        description: "Easily add tracked assets to your personal portfolio",
    },
    {
        title: "Comprehensive Metrics",
        description: "Access all essential market indicators in one place",
    },
];

export const CoinMarketDescription = () => {
    return (
        <DescriptionBlockWrapper
            mainTitle="Coins Market"
            mainDescription="You'll find detailed statistics and interactive price charts for every cryptocurrency, complete with essential metrics like market cap, trading volume, circulating supply and market ranking - all customizable to your preferred timeframe."
            listTitle="Key Features"
            descriptionList={coinItemFeatures}
            icon={CoinMarket}
        />
    );
};
