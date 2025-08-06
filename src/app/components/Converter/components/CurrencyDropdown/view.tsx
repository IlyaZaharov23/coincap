import { TriangleDownIcon } from "@chakra-ui/icons";
import { Popover, PopoverContent, PopoverTrigger, Stack, Text, useDisclosure } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";
import { Asset } from "types/types";

import { CurrencyDropdownItem } from "../CurrencyDropdownItem";
import { styles } from "./styles";
import { CurrencyDropdownProps } from "./types";

export const CurrencyDropdown = ({
    baseCoin,
    quoteCoin,
    handleSelectBaseCoin,
    handleSelectQuoteCoin,
    isBaseCoin,
    isQuoteCoin,
}: CurrencyDropdownProps) => {
    const topAssets = useAppSelector(topAssetsListGet);
    const { isOpen, onClose, onOpen } = useDisclosure();
    const selectedCoin = isBaseCoin ? baseCoin : quoteCoin;

    const getSelectableAssets = () => {
        if (isBaseCoin) {
            return topAssets.filter((asset) => asset.id !== quoteCoin?.id);
        }
        if (isQuoteCoin) {
            return topAssets.filter((asset) => asset.id !== baseCoin?.id);
        }
    };

    const handleClickItem = (coin: Asset) => {
        if (isBaseCoin) {
            handleSelectBaseCoin?.(coin);
        }
        if (isQuoteCoin) {
            handleSelectQuoteCoin?.(coin);
        }
        onClose();
    };
    return (
        <Popover matchWidth isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
            <PopoverTrigger>
                <Stack sx={styles.buttonWrapper}>
                    <Stack sx={styles.buttonInfoWrapper}>
                        <CryptoIcon size={28} symbol={selectedCoin?.symbol} />
                        <Text sx={styles.buttonCoinName}>{selectedCoin?.name}</Text>
                    </Stack>
                    <TriangleDownIcon sx={styles.arrowIcon} />
                </Stack>
            </PopoverTrigger>
            <PopoverContent sx={styles.itemsWrapper}>
                {getSelectableAssets()?.map((asset) => (
                    <CurrencyDropdownItem
                        key={asset.id}
                        asset={asset}
                        handleItemClick={handleClickItem}
                        baseCoin={baseCoin}
                        quoteCoin={quoteCoin}
                        isBaseCoin={isBaseCoin}
                        isQuoteCoin={isQuoteCoin}
                    />
                ))}
            </PopoverContent>
        </Popover>
    );
};
