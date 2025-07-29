import { useState } from "react";

import { Stack, Text, useDisclosure } from "@chakra-ui/react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { ModalWrapper } from "components/ModalWrapper";
import { COINS_PORTFOLIO } from "services/constants";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getAssetDetails, getPortfolioPrice } from "store/slices/assets/assets.selectors";
import { setPortfolioPrice } from "store/slices/assets/assets.thunks";
import { InputValidationUtil } from "utils/inputValidation";
import { PricesUtil } from "utils/prices";

import { CoinBuyContent } from "../CoinBuyContent";
import { styles } from "./styles";

export const BuyForm = () => {
    const assetDetails = useAppSelector(getAssetDetails);
    const dispatch = useAppDispatch();
    const total = useAppSelector(getPortfolioPrice);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState<string>("0");
    const [price, setPrice] = useState<number>(0);
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || InputValidationUtil.isDigit(inputValue)) {
            setValue(inputValue);
            setPrice(Number(inputValue) * Number(assetDetails?.priceUsd));
        }
    };

    const addCoinsToPortfolio = () => {
        dispatch(setPortfolioPrice({ coinId: assetDetails?.id, amount: price }));
        localStorage.setItem(COINS_PORTFOLIO, JSON.stringify(total));
        onClose();
        setValue("0");
        setPrice(0);
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
            <Button variant={BUTTON_VARIANT.SECONDARY} width={150} onClick={onOpen}>
                Buy
            </Button>
            <ModalWrapper
                title="Add coins"
                submitButtonText="Add"
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={addCoinsToPortfolio}
            >
                <CoinBuyContent
                    coinName={assetDetails?.name}
                    coinSymbol={assetDetails?.symbol}
                    coinsAmount={value}
                    changeCoinsAmount={handleChangeValue}
                />
            </ModalWrapper>
        </Stack>
    );
};
