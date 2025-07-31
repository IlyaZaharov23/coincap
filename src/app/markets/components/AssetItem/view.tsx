import { useState } from "react";

import { Th, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";

import { CoinsAddModal } from "components/CoinsAddModal";
import { ModalWrapper } from "components/ModalWrapper";
import { useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { USER_ID } from "services/constants";
import { darkGray, hoverGray, semiDarkGray } from "shared/constants/colors";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/assets.selectors";
import { addCoinToWallet, setAssetDetails } from "store/slices/assets/assets.thunks";
import { Asset } from "types/types";
import { getPriceArrowIcon } from "utils/helpers/price/getArrowIcon";
import { getPriceStatus } from "utils/helpers/price/status";
import { LocalStorageUtil } from "utils/localStorage";
import { PricesUtil } from "utils/prices";
import { StyleUtil } from "utils/style";
import { Toast } from "utils/toast";

import { styles } from "./styles";
import { AssetItemProps } from "./types";

export const AssetItem = ({ asset }: AssetItemProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [coinsCount, setCoinsCount] = useState<string>("");
    const wallet = useAppSelector(getWallet);

    const onSubmit = () => {
        try {
            if (wallet[asset.id]) {
                updatePortfolioCoins();
            } else {
                addCoinsToPortfolio();
            }
            setCoinsCount("");
            onClose();
            Toast.success(`${asset.name} has been successfully added to your portfolio.`);
        } catch (error) {
            console.log(error);
            Toast.error(`Something wrong while adding ${asset.name} to your portfolio. Please try again later.`);
        }
    };

    const updatePortfolioCoins = () => {
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const currentCoin = wallet[asset.id];
        const newAmount = currentCoin.amount + Number(coinsCount);
        const coinInfo = {
            ...currentCoin,
            amount: newAmount,
            cost: PricesUtil.solvePrice(String(newAmount), asset.priceUsd),
        };
        LocalStorageUtil.updatePortfolioCoin(userId, asset.id, coinInfo);
        dispatch(addCoinToWallet({ coinId: asset.id, coinInfo }));
    };

    const addCoinsToPortfolio = () => {
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const coinInfo = {
            name: asset.name,
            id: asset.id,
            symbol: asset.symbol,
            cost: PricesUtil.solvePrice(coinsCount, asset.priceUsd),
            price: asset.priceUsd,
            amount: Number(coinsCount),
        };
        LocalStorageUtil.updatePortfolioCoin(userId, asset.id, coinInfo);
        dispatch(addCoinToWallet({ coinId: asset.id, coinInfo }));
    };

    const navigateToCurrency = (asset: Asset) => {
        router.push(ROUTES.MARKET_ITEM(asset.id));
        dispatch(setAssetDetails(asset));
    };

    const handleChangeCoinsCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoinsCount(e.target.value);
    };

    const handleOpenAddModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isUserSignedIn) return;
        onOpen();
    };

    const isUserSignedIn = !!ApiWrapper.getToken();

    return (
        <>
            <Tr key={asset.id} onClick={() => navigateToCurrency(asset)} _hover={{ backgroundColor: hoverGray }}>
                <Th sx={styles.rowText("5vw")}>{Number(asset.rank)}</Th>
                <Th sx={styles.rowText("18vw")}>{asset.name}</Th>
                <Th sx={styles.rowText("11vw")}>{PricesUtil.formatAsCurrency(asset.vwap24Hr)}</Th>
                <Th
                    display="flex"
                    alignItems="center"
                    gap="0.25rem"
                    sx={{
                        ...styles.rowText("11vw"),
                        fontWeight: "500",
                        color: StyleUtil.getCurrencyPriceChangeColor(
                            getPriceStatus(asset.vwap24Hr, asset.changePercent24Hr),
                        ),
                    }}
                >
                    {asset.vwap24Hr ? PricesUtil.getVWAPChangeValue(asset.vwap24Hr, asset.changePercent24Hr) : "0"}
                    {getPriceArrowIcon(asset.vwap24Hr, asset.changePercent24Hr)}
                </Th>
                <Th sx={styles.rowText("14vw")}>{PricesUtil.formatLargeCurrency(asset.marketCapUsd)}</Th>
                <Th sx={styles.rowText("11vw")}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Th>
                <Tooltip
                    isDisabled={isUserSignedIn}
                    label="You need to sign in to add coin to the wallet. Please log in or create an account."
                >
                    <Th
                        sx={{
                            ...styles.rowText("5vw"),
                            color: isUserSignedIn ? darkGray : semiDarkGray,
                        }}
                        onClick={handleOpenAddModal}
                    >
                        +
                    </Th>
                </Tooltip>
            </Tr>
            <ModalWrapper
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={onSubmit}
                submitButtonText="Add"
                title="Add coins"
                assetSymbol={asset.symbol}
            >
                <CoinsAddModal
                    helper="Price"
                    assetSymbol={asset.symbol}
                    assetPrice={asset.priceUsd}
                    coinsAmount={coinsCount}
                    changeCoinsAmount={handleChangeCoinsCount}
                />
            </ModalWrapper>
        </>
    );
};
