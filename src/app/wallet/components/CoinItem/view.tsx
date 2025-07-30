import { useState } from "react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { IconButton, Stack, Text, useDisclosure } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { ModalWrapper } from "components/ModalWrapper";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getWallet } from "store/slices/assets/assets.selectors";
import { addCoinToWallet, removeCoinFromWallet } from "store/slices/assets/assets.thunks";
import { addCoinsToLocalStorage, removeCoinsFromLocalStorage } from "utils/helpers/localStorage/updateLocalStorage";
import { PricesUtil } from "utils/prices";

import { ChangeCoinsCountContent } from "../ChangeCoinsCountContent";
import { styles } from "./styles";
import { CoinItemProps } from "./types";

export const CoinItem = ({ symbol, name, amount, price, id, cost }: CoinItemProps) => {
    const [coinsCount, setCoinsCount] = useState<string>("0");
    const wallet = useAppSelector(getWallet);
    const dispatch = useAppDispatch();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();

    const openAddModal = () => {
        onAddOpen();
    };

    const openDeleteModal = () => {
        onDeleteOpen();
    };

    const handleCloseAddModal = () => {
        onAddClose();
        setCoinsCount("");
    };

    const handleCloseDeleteModal = () => {
        onDeleteClose();
        setCoinsCount("");
    };

    const deleteCoins = () => {
        const currentCoin = wallet[id];
        const finalCount = amount - Number(coinsCount);
        if (finalCount <= 0) {
            removeCoinsFromLocalStorage(id);
            dispatch(removeCoinFromWallet(id));
        } else {
            const coinInfo = {
                ...currentCoin,
                amount: finalCount,
                cost: PricesUtil.solvePrice(String(finalCount), price),
            };
            dispatch(
                addCoinToWallet({
                    coinId: id,
                    coinInfo,
                }),
            );
            addCoinsToLocalStorage(coinInfo, id);
        }

        handleCloseDeleteModal();
    };

    const addCoins = () => {
        const currentCoin = wallet[id];
        const finalCount = amount + Number(coinsCount);
        const coinInfo = {
            ...currentCoin,
            amount: finalCount,
            cost: PricesUtil.solvePrice(String(finalCount), price),
        };
        dispatch(
            addCoinToWallet({
                coinId: id,
                coinInfo,
            }),
        );
        addCoinsToLocalStorage(coinInfo, id);
        handleCloseAddModal();
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
                    <IconButton aria-label="add" sx={styles.iconButton} onClick={openAddModal}>
                        <AddIcon />
                    </IconButton>
                    <IconButton aria-label="delete" sx={styles.iconButton} onClick={openDeleteModal}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <ModalWrapper
                title="Add coins"
                isOpen={isAddOpen}
                onClose={handleCloseAddModal}
                onSubmit={addCoins}
                submitButtonText="Add"
            >
                <ChangeCoinsCountContent
                    symbol={symbol}
                    name={name}
                    finalCount={coinsCount}
                    price={price}
                    title="Price"
                    handleChangeCoinsCount={handleChangeCoinsCount}
                />
            </ModalWrapper>
            <ModalWrapper
                title="Delete coins"
                isOpen={isDeleteOpen}
                onClose={handleCloseDeleteModal}
                onSubmit={deleteCoins}
                submitButtonText="Delete"
            >
                <ChangeCoinsCountContent
                    symbol={symbol}
                    name={name}
                    finalCount={coinsCount}
                    price={price}
                    title="Withdraw"
                    handleChangeCoinsCount={handleChangeCoinsCount}
                />
            </ModalWrapper>
        </>
    );
};
