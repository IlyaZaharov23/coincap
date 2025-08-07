import { useCallback, useEffect, useState } from "react";

import { Asset } from "types/types";
import { PricesUtil } from "utils/prices";

export const useConverterCalculations = (initialQuoteAssets: Asset[] = []) => {
    const [baseInputValue, setBaseInputValue] = useState<string>("");
    const [quoteInputValues, setQuoteInputValues] = useState<Asset[]>(initialQuoteAssets);
    const [quoteAmounts, setQuoteAmounts] = useState<Record<string, string>>({});
    const [activeInput, setActiveInput] = useState<"base" | string>("base");

    const initializeQuoteValues = useCallback((assets: Asset[]) => {
        setQuoteInputValues(assets);
        const initialAmounts = Object.fromEntries(assets.map((asset) => [asset.id, ""]));
        setQuoteAmounts(initialAmounts);
    }, []);

    const updateQuoteAmountsFromBase = useCallback(
        (value: string) => {
            const newAmounts = Object.fromEntries(
                quoteInputValues.map((asset) => [asset.id, PricesUtil.convertBaseToQuoteValue(value, asset.priceUsd)]),
            );
            setQuoteAmounts(newAmounts);
        },
        [quoteInputValues],
    );

    const findAssetById = useCallback(
        (assetId: string) => quoteInputValues.find((a) => a.id === assetId),
        [quoteInputValues],
    );

    const handleEmptyValue = useCallback(() => {
        setBaseInputValue("");
        const clearedAmounts = Object.fromEntries(quoteInputValues.map(({ id }) => [id, ""]));
        setQuoteAmounts(clearedAmounts);
    }, [quoteInputValues]);

    const calculateNewBaseValue = useCallback((asset: Asset, quoteValue: string) => {
        return PricesUtil.convertQuoteToBaseValue(quoteValue, asset.priceUsd);
    }, []);

    const updateOtherQuoteValues = useCallback(
        (changedAssetId: string, newBaseValue: string) => {
            const updatedAmounts = { ...quoteAmounts };

            quoteInputValues.forEach(({ id }) => {
                if (id !== changedAssetId) {
                    const asset = findAssetById(id);
                    if (asset) {
                        updatedAmounts[id] = PricesUtil.convertBaseToQuoteValue(newBaseValue, asset.priceUsd);
                    }
                }
            });

            return updatedAmounts;
        },
        [quoteAmounts, quoteInputValues, findAssetById],
    );

    const updateFromQuoteInput = useCallback(
        (assetId: string, value: string) => {
            const asset = findAssetById(assetId);
            if (!asset) return;

            if (value === "") {
                handleEmptyValue();
                return;
            }

            const newBaseValue = calculateNewBaseValue(asset, value);
            const updatedAmounts = updateOtherQuoteValues(assetId, newBaseValue);
            updatedAmounts[assetId] = value;

            setBaseInputValue(newBaseValue);
            setQuoteAmounts(updatedAmounts);
        },
        [findAssetById, handleEmptyValue, calculateNewBaseValue, updateOtherQuoteValues],
    );

    const addQuoteAsset = useCallback(
        (asset: Asset) => {
            setQuoteInputValues((prev) => [...prev, asset]);
            setQuoteAmounts((prev) => ({
                ...prev,
                [asset.id]: PricesUtil.convertBaseToQuoteValue(baseInputValue, asset.priceUsd),
            }));
        },
        [baseInputValue],
    );

    const removeQuoteAsset = useCallback((id: string) => {
        setQuoteInputValues((prev) => prev.filter((asset) => asset.id !== id));
        setQuoteAmounts((prev) => {
            const newAmounts = { ...prev };
            delete newAmounts[id];
            return newAmounts;
        });
    }, []);

    useEffect(() => {
        if (quoteInputValues.length === 0 && initialQuoteAssets.length > 0) {
            initializeQuoteValues(initialQuoteAssets);
        }
    }, [initialQuoteAssets, quoteInputValues.length, initializeQuoteValues]);

    return {
        baseInputValue,
        quoteInputValues,
        quoteAmounts,
        activeInput,
        setBaseInputValue,
        setActiveInput,
        updateQuoteAmountsFromBase,
        updateFromQuoteInput,
        addQuoteAsset,
        removeQuoteAsset,
    };
};
