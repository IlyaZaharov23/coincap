import { Popover, PopoverContent, PopoverTrigger, useDisclosure } from "@chakra-ui/react";

import { Button } from "components/Button";
import { CryptoIcon } from "components/CryptoIcon";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { useAppSelector } from "store/hooks";
import { topAssetsListGet } from "store/slices/assets/assets.selectors";

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
    return (
        <Popover matchWidth isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
            <PopoverTrigger>
                <Button
                    sx={styles.select}
                    variant={BUTTON_VARIANT.SELECT}
                    leftIcon={<CryptoIcon size={28} symbol={selectedCoin?.symbol} />}
                >
                    {selectedCoin?.name}
                </Button>
            </PopoverTrigger>
            <PopoverContent sx={styles.itemsWrapper}>
                {getSelectableAssets()?.map((asset) => (
                    <CurrencyDropdownItem
                        key={asset.id}
                        asset={asset}
                        handleSelectQuoteCoin={handleSelectQuoteCoin}
                        handleSelectBaseCoin={handleSelectBaseCoin}
                        baseCoin={baseCoin}
                        quoteCoin={quoteCoin}
                        isBaseCoin={isBaseCoin}
                        isQuoteCoin={isQuoteCoin}
                        // onClose={onClose}
                    />
                ))}
            </PopoverContent>
        </Popover>
    );
};
