"use client";

import { memo, useCallback, useMemo } from "react";

import { CloseIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";

import coinFallback from "assets/coinFallback.svg";
import { CryptoIcon } from "components/CryptoIcon";
import { Input } from "components/Input";
import { useConverterCalculations } from "hooks/useConverterCalculations";
import Image from "next/image";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { InputValidationUtil } from "utils/inputValidation";

import { ConverterSkeleton } from "./components/ConverterSkeleton";
import { CurrencyDropdown } from "./components/CurrencyDropdown";
import { ACTIVE_INPUT } from "./constants/activeInput";
import { styles } from "./styles";

const MemoizedCurrencyDropdown = memo(CurrencyDropdown);

export const Converter = () => {
    const topAssets = useAppSelector(topAssetsListGet);
    const initialQuoteAssets = useMemo(() => topAssets.filter((_, i) => i < 2), [topAssets]);

    const {
        baseInputValue,
        quoteInputValues,
        quoteAmounts,
        setBaseInputValue,
        setActiveInput,
        updateQuoteAmountsFromBase,
        updateFromQuoteInput,
        addQuoteAsset,
        removeQuoteAsset,
    } = useConverterCalculations(initialQuoteAssets);

    const handleChangeBaseValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (value === "" || InputValidationUtil.isDigit(value)) {
                setActiveInput(ACTIVE_INPUT.BASE);
                setBaseInputValue(value);
                updateQuoteAmountsFromBase(value);
            }
        },
        [setActiveInput, setBaseInputValue, updateQuoteAmountsFromBase],
    );

    const handleChangeQuoteValue = useCallback(
        (assetId: string, e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (value === "" || InputValidationUtil.isDigit(value)) {
                setActiveInput(assetId);
                updateFromQuoteInput(assetId, value);
            }
        },
        [setActiveInput, updateFromQuoteInput],
    );

    const quoteDropdownProps = useMemo(
        () => ({
            handleAddQuoteAsset: addQuoteAsset,
            quoteInputValues,
        }),
        [addQuoteAsset, quoteInputValues],
    );

    const showCloseIcon = quoteInputValues.length > 1;

    return (
        <Stack sx={styles.mainWrapper}>
            {quoteInputValues.length === 0 ? (
                <ConverterSkeleton />
            ) : (
                <>
                    <Stack sx={styles.baseInputWrapper}>
                        <Image src={coinFallback} alt="coin-fallback" width={40} />
                        <Input
                            sx={styles.input}
                            label="USD"
                            size={INPUT_SIZE.LARGE}
                            inputMode="decimal"
                            type="text"
                            value={baseInputValue}
                            onChange={handleChangeBaseValue}
                        />
                    </Stack>
                    <Stack sx={styles.topWrapper}>
                        {quoteInputValues.map((quote) => (
                            <Stack key={quote.id} sx={styles.quoteInputWrapper}>
                                <CryptoIcon size={40} symbol={quote.symbol} />
                                <Input
                                    sx={{ ...styles.input, ...styles.quoteInput(showCloseIcon) }}
                                    label={quote.symbol}
                                    size={INPUT_SIZE.LARGE}
                                    value={quoteAmounts[quote.id] || ""}
                                    onChange={(e) => handleChangeQuoteValue(quote.id, e)}
                                />
                                {showCloseIcon && (
                                    <CloseIcon sx={styles.closeIcon} onClick={() => removeQuoteAsset(quote.id)} />
                                )}
                            </Stack>
                        ))}
                    </Stack>
                </>
            )}
            <MemoizedCurrencyDropdown {...quoteDropdownProps} />
        </Stack>
    );
};
