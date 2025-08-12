import Wallet from "assets/about/Wallet.png";

import { DescriptionBlockWrapper } from "../DescriptionBlockWrapper";

const descriptionList = [
    {
        title: "Flexible Asset Management",
        description: "Easily add new cryptocurrencies or modify existing holdings",
    },
    {
        title: "Real-Time Valuation",
        description: "See up-to-date conversions of your crypto to fiat value",
    },
    {
        title: "Portfolio Analytics",
        description: "Track your total wallet value and individual asset performance",
    },
    {
        title: "Customizable View",
        description: "Clean, organized presentation of all your holdings",
    },
];

export const WalletDescription = () => {
    return (
        <DescriptionBlockWrapper
            mainTitle="Personal Portfolio"
            mainDescription="Complete control over your digital asset portfolio, letting you track and adjust your cryptocurrency holdings with precision. The interface displays your current balance across multiple coins with clear valuation in both crypto and fiat amounts, giving you an instant overview of your investments."
            listTitle="Key Features"
            icon={Wallet}
            descriptionList={descriptionList}
        />
    );
};
