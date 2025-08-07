import { useCallback, useMemo } from "react";

import { AddIcon } from "@chakra-ui/icons";
import { Popover, PopoverContent, PopoverTrigger, Stack, Text, useDisclosure } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { Asset } from "types/types";

import { styles } from "./styles";
import { CurrencyDropdownProps } from "./types";

export const CurrencyDropdown = ({ handleAddQuoteAsset, quoteInputValues }: CurrencyDropdownProps) => {
    const topAssets = useAppSelector(topAssetsListGet);
    const { isOpen, onClose, onOpen } = useDisclosure();

    const getAvaildableAssets = useMemo(() => {
        const quoteIds = quoteInputValues.map((quote) => quote.id);
        return topAssets.filter((asset) => !quoteIds.includes(asset.id));
    }, [quoteInputValues, topAssets]);

    const handleItemClick = useCallback(
        (asset: Asset) => {
            handleAddQuoteAsset(asset);
            onClose();
        },
        [handleAddQuoteAsset, onClose],
    );

    return (
        <Popover matchWidth isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
            <PopoverTrigger>
                {quoteInputValues.length < 5 ? (
                    <Stack sx={styles.addCurrency(isOpen)}>
                        <Stack>
                            <AddIcon />
                        </Stack>
                        <Text sx={styles.addText}>Add Currency</Text>
                    </Stack>
                ) : (
                    <span />
                )}
            </PopoverTrigger>
            <PopoverContent sx={styles.itemsWrapper}>
                {getAvaildableAssets.map((asset) => (
                    <Stack key={asset.id} sx={styles.mainWrapper} onClick={() => handleItemClick(asset)}>
                        <CryptoIcon size={32} symbol={asset.symbol} />
                        <Stack sx={styles.namesWrapper}>
                            <Text sx={styles.coinName}>{asset.name}</Text>
                            <Text sx={styles.coinSymbol}>{asset.symbol}</Text>
                        </Stack>
                    </Stack>
                ))}
            </PopoverContent>
        </Popover>
    );
};
