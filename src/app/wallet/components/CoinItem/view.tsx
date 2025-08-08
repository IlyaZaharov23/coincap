import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";

import { IconButton, Stack, Text, Tooltip } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { useCoinActions } from "hooks/useCoinActions";
import { useIsMobile } from "hooks/useDevice";

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
    return (
        <>
            <Stack sx={styles.mainWrapper}>
                <Stack sx={styles.infoSummaryWrapper}>
                    <Stack sx={styles.infoWrapper}>
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
            {isMobile ? (
                <AddCoinsDrawer
                    assetSymbol={symbol}
                    assetPrice={price}
                    helper="Price"
                    coinsCount={coinsCount}
                    handleChangeCoinsCount={handleChangeCoinsCount}
                    isOpen={isAddOpen}
                    onClose={handleCloseAddModal}
                    onSubmit={addCoins}
                    modalButtonText="Add"
                    modalTitle="Add Coins"
                    isLoading={isLoading}
                />
            ) : (
                <AddCoinsModal
                    assetSymbol={symbol}
                    assetPrice={price}
                    helper="Price"
                    coinsCount={coinsCount}
                    handleChangeCoinsCount={handleChangeCoinsCount}
                    isOpen={isAddOpen}
                    onClose={handleCloseAddModal}
                    onSubmit={addCoins}
                    modalButtonText="Add"
                    modalTitle="Add Coins"
                    isLoading={isLoading}
                />
            )}
            {isMobile ? (
                <SellCoinsDrawer
                    assetSymbol={symbol}
                    assetPrice={price}
                    helper="Payout"
                    coinsCount={coinsCount}
                    handleChangeCoinsCount={handleChangeCoinsCount}
                    isOpen={isSellOpen}
                    onClose={handleCloseSellModal}
                    onSubmit={sellCoins}
                    modalButtonText="Sell"
                    modalTitle="Sell Coins"
                    isLoading={isLoading}
                />
            ) : (
                <SellCoinsModal
                    assetSymbol={symbol}
                    assetPrice={price}
                    helper="Payout"
                    coinsCount={coinsCount}
                    handleChangeCoinsCount={handleChangeCoinsCount}
                    isOpen={isSellOpen}
                    onClose={handleCloseSellModal}
                    onSubmit={sellCoins}
                    modalButtonText="Sell"
                    modalTitle="Sell Coins"
                    isLoading={isLoading}
                />
            )}
            {isMobile ? (
                <DeleteCoinsDrawer
                    assetSymbol={symbol}
                    assetName={name}
                    isOpen={isDeleteOpen}
                    onClose={handleCloseDeleteModal}
                    onSubmit={deleteCoins}
                    modalButtonText="Delete"
                    modalTitle="Delete Coins"
                    isLoading={isLoading}
                />
            ) : (
                <DeleteCoinsModal
                    assetSymbol={symbol}
                    assetName={name}
                    isOpen={isDeleteOpen}
                    onClose={handleCloseDeleteModal}
                    onSubmit={deleteCoins}
                    modalButtonText="Delete"
                    modalTitle="Delete Coins"
                    isLoading={isLoading}
                />
            )}
        </>
    );
};
