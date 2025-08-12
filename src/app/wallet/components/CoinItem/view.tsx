import { useMemo } from "react";

import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";

import { IconButton, Stack, Text, Tooltip } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { useCoinActions } from "hooks/useCoinActions";
import { useIsMobile } from "hooks/useDevice";
import { useRouter } from "next/navigation";
import { ROUTES } from "shared/constants/routes";

import { AddCoinsDrawer } from "../Overlays/drawers/AddCoinsDrawer";
import { DeleteCoinsDrawer } from "../Overlays/drawers/DeleteCoinsDrawer";
import { SellCoinsDrawer } from "../Overlays/drawers/SellCoinsDrawer";
import { AddCoinsModal } from "../Overlays/modals/AddCoinsModal";
import { DeleteCoinsModal } from "../Overlays/modals/DeleteCoinsModal";
import { SellCoinsModal } from "../Overlays/modals/SellCoinsModal";
import { styles } from "./styles";
import { CoinItemProps } from "./types";

export const CoinItem = ({ symbol, name, amount, price, id, cost }: CoinItemProps) => {
    const isMobile = useIsMobile();
    const router = useRouter();

    const {
        coinsCount,
        isLoading,
        isAddOpen,
        isSellOpen,
        isDeleteOpen,
        onAddOpen,
        onSellOpen,
        onDeleteOpen,
        handleCloseAddModal,
        handleCloseDeleteModal,
        handleCloseSellModal,
        deleteCoins,
        sellCoins,
        addCoins,
        handleChangeCoinsCount,
    } = useCoinActions({ id, name, price, amount, symbol });

    const addCoinsComponent = useMemo(() => {
        const props = {
            assetSymbol: symbol,
            assetPrice: price,
            helper: "Price",
            coinsCount,
            handleChangeCoinsCount,
            isOpen: isAddOpen,
            onClose: handleCloseAddModal,
            onSubmit: addCoins,
            modalButtonText: "Add",
            modalTitle: "Add Coins",
            isLoading,
        };
        return isMobile ? <AddCoinsDrawer {...props} /> : <AddCoinsModal {...props} />;
    }, [
        isMobile,
        symbol,
        price,
        coinsCount,
        isAddOpen,
        isLoading,
        addCoins,
        handleCloseAddModal,
        handleChangeCoinsCount,
    ]);

    const sellCoinsComponent = useMemo(() => {
        const props = {
            assetSymbol: symbol,
            assetPrice: price,
            helper: "Payout",
            coinsCount,
            handleChangeCoinsCount,
            isOpen: isSellOpen,
            onClose: handleCloseSellModal,
            onSubmit: sellCoins,
            modalButtonText: "Sell",
            modalTitle: "Sell Coins",
            isLoading,
        };
        return isMobile ? <SellCoinsDrawer {...props} /> : <SellCoinsModal {...props} />;
    }, [
        isMobile,
        symbol,
        price,
        coinsCount,
        isSellOpen,
        isLoading,
        handleChangeCoinsCount,
        handleCloseSellModal,
        sellCoins,
    ]);

    const deleteCoinsComponent = useMemo(() => {
        const props = {
            assetSymbol: symbol,
            assetName: name,
            isOpen: isDeleteOpen,
            onClose: handleCloseDeleteModal,
            onSubmit: deleteCoins,
            modalButtonText: "Delete",
            modalTitle: "Delete Coins",
            isLoading,
        };
        return isMobile ? <DeleteCoinsDrawer {...props} /> : <DeleteCoinsModal {...props} />;
    }, [isMobile, symbol, name, isDeleteOpen, isLoading, deleteCoins, handleCloseDeleteModal]);

    const goToCoinPage = () => {
        router.push(ROUTES.MARKET_ITEM(id));
    };

    return (
        <>
            <Stack sx={styles.mainWrapper}>
                <Stack sx={styles.infoSummaryWrapper}>
                    <Stack sx={styles.infoWrapper} onClick={goToCoinPage}>
                        <CryptoIcon symbol={symbol} size={isMobile ? 24 : 40} />
                        <Stack sx={styles.nameWrapper}>
                            <Text sx={styles.coinName}>{name}</Text>
                            <Text sx={styles.coinSymbol}>{symbol}</Text>
                        </Stack>
                    </Stack>
                    <Stack sx={styles.priceWrapper}>
                        <Text sx={styles.coinCount}>
                            {amount} {symbol}
                        </Text>
                        <Text sx={styles.coinPrice}>≈ {cost}</Text>
                    </Stack>
                </Stack>
                <Stack sx={styles.buttonsWrapper}>
                    <Tooltip label={`Buy ${name}`}>
                        <IconButton aria-label="buy coin" sx={styles.iconButton} onClick={onAddOpen}>
                            <BiPlusCircle />
                        </IconButton>
                    </Tooltip>
                    <Tooltip label={`Sell ${name}`}>
                        <IconButton aria-label="sell" sx={styles.iconButton} onClick={onSellOpen}>
                            <BiMinusCircle />
                        </IconButton>
                    </Tooltip>
                    <Tooltip label={`Delete ${name}`}>
                        <IconButton aria-label="delete" sx={styles.iconButton} onClick={onDeleteOpen}>
                            <FaFireAlt style={styles.iconButton} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
            {addCoinsComponent}
            {sellCoinsComponent}
            {deleteCoinsComponent}
        </>
    );
};
