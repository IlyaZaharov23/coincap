import { useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { USER_ID } from "services/constants";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAssetDetails, getWallet } from "store/slices/assets/assets.selectors";
import { addCoinToWallet } from "store/slices/assets/assets.thunks";
import { InputValidationUtil } from "utils/inputValidation";
import { LocalStorageUtil } from "utils/localStorage";
import { PricesUtil } from "utils/prices";
import { Toast } from "utils/toast";

import { styles } from "./styles";

export const BuyForm = () => {
    const assetDetails = useAppSelector(getAssetDetails);
    const wallet = useAppSelector(getWallet);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>("");

    if (!assetDetails) return null;

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || InputValidationUtil.isDigit(inputValue)) {
            setValue(inputValue);
        }
    };

    const updatePortfolioCoins = () => {
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const currentCoin = wallet[assetDetails?.id];
        const newAmount = currentCoin.amount + Number(value);
        const coinInfo = {
            ...currentCoin,
            amount: newAmount,
            cost: PricesUtil.solvePrice(String(newAmount), assetDetails.priceUsd),
        };
        LocalStorageUtil.updatePortfolioCoin(userId, assetDetails.id, coinInfo);
        dispatch(addCoinToWallet({ coinId: assetDetails.id, coinInfo }));
    };

    const addCoinsToPortfolio = () => {
        const userId = localStorage.getItem(USER_ID);
        if (!userId) return;
        const coinInfo = {
            name: assetDetails.name,
            id: assetDetails.id,
            symbol: assetDetails.symbol,
            cost: PricesUtil.solvePrice(value, assetDetails.priceUsd),
            price: assetDetails.priceUsd,
            amount: Number(value),
        };
        LocalStorageUtil.updatePortfolioCoin(userId, assetDetails.id, coinInfo);
        dispatch(addCoinToWallet({ coinId: assetDetails.id, coinInfo }));
    };

    const onSubmit = () => {
        try {
            if (wallet[assetDetails?.id]) {
                updatePortfolioCoins();
            } else {
                addCoinsToPortfolio();
            }
            setValue("");
            Toast.success(`${assetDetails.name} has been successfully added to your portfolio.`);
        } catch (error) {
            console.log(error);
            Toast.error(`Something wrong while adding ${assetDetails.name} to your portfolio. Please try again later.`);
        }
    };

    return (
        <Stack sx={styles.wrapper}>
            <Input
                label={`${assetDetails?.symbol} amount:`}
                size={INPUT_SIZE.MEDIUM}
                width={300}
                value={value}
                onChange={handleChangeValue}
                type="text"
                inputMode="decimal"
            />
            <Text>Total price: {PricesUtil.solvePrice(value, assetDetails?.priceUsd)}</Text>
            <Button variant={BUTTON_VARIANT.SECONDARY} width={150} onClick={onSubmit}>
                Buy
            </Button>
        </Stack>
    );
};
