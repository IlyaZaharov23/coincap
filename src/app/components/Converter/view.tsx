"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";

import { Stack } from "@chakra-ui/react";

import { Input } from "components/Input";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { Asset } from "types/types";
import { InputValidationUtil } from "utils/inputValidation";
import { PricesUtil } from "utils/prices";

import { CurrencyDropdown } from "./components/CurrencyDropdown";
import { ACTIVE_INPUT } from "./constants/activeInput";
import { styles } from "./styles";

const MemoizedCurrencyDropdown = memo(CurrencyDropdown);

export const Converter = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const [baseCoin, setBaseCoin] = useState<Asset | null>(null);
    const [quoteCoin, setQuoteCoin] = useState<Asset | null>(null);
    const [baseInputValue, setBaseInputValue] = useState<string>("");
    const [quoteInputValue, setQuoteInputValue] = useState<string>("");
    const [activeInput, setActiveInput] = useState<string>(ACTIVE_INPUT.BASE);

    const handleChangeBaseValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || InputValidationUtil.isDigit(inputValue)) {
            setActiveInput(ACTIVE_INPUT.BASE);
            setBaseInputValue(inputValue);
        }
    }, []);

    const handleChangeQuoteValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || InputValidationUtil.isDigit(inputValue)) {
            setActiveInput(ACTIVE_INPUT.QUOTE);
            setQuoteInputValue(inputValue);
        }
    }, []);

    const handleSelectBaseCoin = useCallback((coin: Asset) => {
        setBaseCoin(coin);
        setActiveInput(ACTIVE_INPUT.BASE);
    }, []);

    const handleSelectQuoteCoin = useCallback((coin: Asset) => {
        setQuoteCoin(coin);
        setActiveInput(ACTIVE_INPUT.QUOTE);
    }, []);

    useMemo(() => {
        if (!baseCoin?.priceUsd || !quoteCoin?.priceUsd) return;

        if (activeInput === ACTIVE_INPUT.BASE && baseInputValue) {
            const calculatedQuoteValue = PricesUtil.convertBaseToQuoteValue(
                baseInputValue,
                baseCoin.priceUsd,
                quoteCoin.priceUsd,
            );
            setQuoteInputValue(calculatedQuoteValue);
        } else if (activeInput === ACTIVE_INPUT.QUOTE && quoteInputValue) {
            const calculatedBaseValue = PricesUtil.convertBaseToQuoteValue(
                quoteInputValue,
                quoteCoin.priceUsd,
                baseCoin.priceUsd,
            );
            setBaseInputValue(calculatedBaseValue);
        }
    }, [baseInputValue, quoteInputValue, baseCoin?.priceUsd, quoteCoin?.priceUsd, activeInput]);

    const baseDropdownProps = useMemo(
        () => ({
            baseCoin,
            quoteCoin,
            handleSelectCoin: handleSelectBaseCoin,
            isBaseCoin: true,
        }),
        [baseCoin, quoteCoin, handleSelectBaseCoin],
    );

    const quoteDropdownProps = useMemo(
        () => ({
            baseCoin,
            quoteCoin,
            handleSelectCoin: handleSelectQuoteCoin,
            isQuoteCoin: true,
        }),
        [baseCoin, quoteCoin, handleSelectQuoteCoin],
    );

    useEffect(() => {
        if (topAssets.length > 0) {
            setBaseCoin(topAssets[0]);
            setQuoteCoin(topAssets[1]);
        }
    }, [topAssets]);

    return (
        <Stack sx={styles.mainWrapper}>
            <Stack sx={styles.topWrapper}>
                <Input
                    sx={styles.input}
                    label="Spend"
                    size={INPUT_SIZE.LARGE}
                    inputMode="decimal"
                    type="text"
                    value={baseInputValue}
                    onChange={handleChangeBaseValue}
                />
                <MemoizedCurrencyDropdown {...baseDropdownProps} />
            </Stack>
            <Stack sx={styles.topWrapper}>
                <Input
                    sx={styles.input}
                    label="Receive"
                    size={INPUT_SIZE.LARGE}
                    inputMode="decimal"
                    type="text"
                    value={quoteInputValue}
                    onChange={handleChangeQuoteValue}
                />
                <MemoizedCurrencyDropdown {...quoteDropdownProps} />
            </Stack>
        </Stack>
    );
};
