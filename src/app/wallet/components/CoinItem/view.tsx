import { useState } from "react";

import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";

import { IconButton, Stack, Text, Tooltip, useDisclosure } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { USER_ID } from "services/constants";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/assets.selectors";
import { addCoinToWallet, removeCoinFromWallet } from "store/slices/assets/assets.thunks";
import { LocalStorageUtil } from "utils/localStorage";
import { PricesUtil } from "utils/prices";
import { Toast } from "utils/toast";

import { AddCoinsModal } from "../Modals/AddCoinsModal";
import { DeleteCoinsModal } from "../Modals/DeleteCoinsModal";
import { SellCoinsModal } from "../Modals/SellCoinsModal";
import { styles } from "./styles";
import { CoinItemProps } from "./types";

export const CoinItem = ({ symbol, name, amount, price, id, cost }: CoinItemProps) => {
    const [coinsCount, setCoinsCount] = useState<string>("");
    const wallet = useAppSelector(getWallet);
    const dispatch = useAppDispatch();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();
    const { isOpen: isSellOpen, onOpen: onSellOpen, onClose: onSellClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

    const handleCloseAddModal = () => {
        onAddClose();
        setCoinsCount("");
    };

    const handleCloseDeleteModal = () => {
        onDeleteClose();
        setCoinsCount("");
    };

    const handleCloseSellModal = () => {
        onSellClose();
        setCoinsCount("");
    };

    const deleteCoins = () => {
        try {
            const userId = localStorage.getItem(USER_ID);
            if (!userId) return;
            LocalStorageUtil.removePortfolioCoin(userId, id);
            dispatch(removeCoinFromWallet(id));
            handleCloseDeleteModal();
            Toast.success(`${name} has been successfully removed from your portfolio.`);
        } catch (error) {
            console.log(error);
            Toast.error(`Something wrong while adding ${name} to your portfolio. Please try again later.`);
        }
    };

    const sellCoins = () => {
        try {
            const userId = localStorage.getItem(USER_ID);
            if (!userId) return;
            const currentCoin = wallet[id];
            const newAmount = amount - Number(coinsCount);
            if (newAmount <= 0) {
                LocalStorageUtil.removePortfolioCoin(userId, id);
                dispatch(removeCoinFromWallet(id));
                Toast.success(`${name} has been successfully removed from your portfolio.`);
            } else {
                const coinInfo = {
                    ...currentCoin,
                    amount: newAmount,
                    cost: PricesUtil.solvePrice(String(newAmount), price),
                };
                LocalStorageUtil.updatePortfolioCoin(userId, id, coinInfo);
                dispatch(addCoinToWallet({ coinId: id, coinInfo }));
                handleCloseSellModal();
                Toast.success(`${name} has been successfully sold from your portfolio.`);
            }
        } catch (error) {
            console.log(error);
            Toast.error(`Something wrong while adding ${name} to your portfolio. Please try again later.`);
        }
    };

    const addCoins = () => {
        try {
            const userId = localStorage.getItem(USER_ID);
            if (!userId) return;
            const currentCoin = wallet[id];
            const newAmount = currentCoin.amount + Number(coinsCount);
            const coinInfo = {
                ...currentCoin,
                amount: newAmount,
                cost: PricesUtil.solvePrice(String(newAmount), price),
            };
            LocalStorageUtil.updatePortfolioCoin(userId, id, coinInfo);
            dispatch(addCoinToWallet({ coinId: id, coinInfo }));
            handleCloseAddModal();
            Toast.success(`${name} has been successfully added to your portfolio.`);
        } catch (error) {
            console.log(error);
            Toast.error(`Something wrong while adding ${name} to your portfolio. Please try again later.`);
        }
    };

    const handleChangeCoinsCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoinsCount(e.target.value);
    };
    return (
        <>
            <Stack sx={styles.mainWrapper}>
                <Stack sx={styles.infoWrapper}>
                    <CryptoIcon symbol={symbol} size={40} />
                    <Stack sx={styles.nameWrapper}>
                        <Text sx={styles.coinName}>{name}</Text>
                        <Text sx={styles.coinSymbol}>{symbol}</Text>
                    </Stack>
                </Stack>
                <Stack sx={styles.priceWrapper}>
                    <Text sx={styles.coinPrice}>
                        {amount} {symbol}
                    </Text>
                    <Text sx={styles.coinPrice}>≈ {cost}</Text>
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
            />
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
            />
            <DeleteCoinsModal
                assetSymbol={symbol}
                assetName={name}
                isOpen={isDeleteOpen}
                onClose={handleCloseDeleteModal}
                onSubmit={deleteCoins}
                modalButtonText="Delete"
                modalTitle="Delete Coins"
            />
        </>
    );
};
