import { useCallback, useState } from "react";

import { Stack, Td, Text, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";

import { CoinsAddModal } from "components/CoinsAddModal";
import { CryptoIcon } from "components/CryptoIcon";
import { ModalWrapper } from "components/ModalWrapper";
import { useIsMobile, useIsTablet } from "hooks/useDevice";
import { useRouter } from "next/navigation";
import { ApiWrapper } from "services/ApiWrapper";
import { USER_ID } from "services/constants";
import { CURRENT_ASSETS_PAGE } from "services/constants";
import { darkGray, hoverGray, semiDarkGray } from "shared/constants/colors";
import { ROUTES } from "shared/constants/routes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/assets.selectors";
import { addCoinToWallet, setAssetDetails } from "store/slices/assets/assets.thunks";
import { Asset } from "types/types";
import { getPriceArrowIcon } from "utils/helpers/price/getArrowIcon";
import { getPriceStatus } from "utils/helpers/price/status";
import { InputValidationUtil } from "utils/inputValidation";
import { LocalStorageUtil } from "utils/localStorage";
import { PricesUtil } from "utils/prices";
import { StyleUtil } from "utils/style";
import { Toast } from "utils/toast";

import { styles } from "./styles";
import { AssetItemProps } from "./types";

export const AssetItem = ({ asset, currentPage }: AssetItemProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [coinsCount, setCoinsCount] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const wallet = useAppSelector(getWallet);
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const handleCloseModal = () => {
        setCoinsCount("");
        onClose();
    };

    const onSubmit = () => {
        try {
            setIsLoading(true);
            if (wallet[asset.id]) {
                updatePortfolioCoins();
            } else {
                addCoinsToPortfolio();
            }
            setCoinsCount("");
            handleCloseModal();
            Toast.success(`${asset.name} has been successfully added to your portfolio.`);
        } catch (error) {
            console.log(error);
            Toast.error(`Something wrong while adding ${asset.name} to your portfolio. Please try again later.`);
        } finally {
            setIsLoading(false);
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

    const onClickAsset = useCallback(
        (asset: Asset) => {
            router.push(ROUTES.MARKET_ITEM(asset.id));
            dispatch(setAssetDetails(asset));
            localStorage.setItem(CURRENT_ASSETS_PAGE, JSON.stringify(currentPage));
        },
        [router, dispatch, currentPage],
    );

    const handleChangeCoinsCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || InputValidationUtil.isDigit(inputValue)) {
            setCoinsCount(inputValue);
        }
    };

    const handleOpenAddModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isUserSignedIn) return;
        onOpen();
    };

    const isUserSignedIn = !!ApiWrapper.getToken();

    return (
        <>
            <Tr key={asset.id} onClick={() => onClickAsset(asset)} _hover={{ backgroundColor: hoverGray }}>
                <Td sx={{ ...styles.rowText, ...styles.nameWrapper, ...styles.col1 }}>
                    <CryptoIcon symbol={asset.symbol} size={40} />
                    <Stack sx={styles.coinInfoWrapper}>
                        <Text sx={styles.nameText}>{asset.name}</Text>
                        <Text sx={styles.symbolText}>{asset.symbol}</Text>
                    </Stack>
                </Td>
                {!isMobile && (
                    <Td sx={{ ...styles.rowText, ...styles.col2 }}>{PricesUtil.formatAsCurrency(asset.vwap24Hr)}</Td>
                )}
                <Td
                    sx={{
                        ...styles.rowText,
                        ...styles.col3,
                        color: StyleUtil.getCurrencyPriceChangeColor(
                            getPriceStatus(asset.vwap24Hr, asset.changePercent24Hr),
                        ),
                    }}
                >
                    <Stack display="flex" flexDirection="row" alignItems="center" gap="0.25rem">
                        <Text>
                            {asset.vwap24Hr
                                ? PricesUtil.getVWAPChangeValue(asset.vwap24Hr, asset.changePercent24Hr)
                                : "0"}
                        </Text>
                        {getPriceArrowIcon(asset.vwap24Hr, asset.changePercent24Hr)}
                    </Stack>
                </Td>
                {!isMobile && (
                    <Td sx={{ ...styles.rowText, ...styles.col4 }}>
                        {PricesUtil.formatLargeCurrency(asset.marketCapUsd)}
                    </Td>
                )}
                <Td sx={{ ...styles.rowText, ...styles.col5 }}>{PricesUtil.formatAsCurrency(asset.priceUsd)}</Td>
                {!isMobile && !isTablet && (
                    <Tooltip
                        isDisabled={isUserSignedIn}
                        label="You need to sign in to add coin to the wallet. Please log in or create an account."
                    >
                        <Td
                            sx={{
                                ...styles.rowText,
                                ...styles.col6,
                                color: isUserSignedIn ? darkGray : semiDarkGray,
                            }}
                            onClick={handleOpenAddModal}
                        >
                            +
                        </Td>
                    </Tooltip>
                )}
            </Tr>
            {isOpen && (
                <ModalWrapper
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                    onSubmit={onSubmit}
                    submitButtonText="Add"
                    title={`Add ${asset.name}`}
                    assetSymbol={asset.symbol}
                    isLoading={isLoading}
                >
                    <CoinsAddModal
                        helper="Price"
                        assetSymbol={asset.symbol}
                        assetPrice={asset.priceUsd}
                        coinsAmount={coinsCount}
                        changeCoinsAmount={handleChangeCoinsCount}
                    />
                </ModalWrapper>
            )}
        </>
    );
};
