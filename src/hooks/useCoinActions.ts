import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { USER_ID } from "services/constants";
import { useAppDispatch } from "store/hooks";
import { addCoinToWallet, removeCoinFromWallet } from "store/slices/assets/assets.thunks";
import { CoinItemProps } from "types/types";
import { LocalStorageUtil } from "utils/localStorage";
import { PricesUtil } from "utils/prices";
import { Toast } from "utils/toast";

export const useCoinActions = ({ id, name, price, amount, symbol }: CoinItemProps) => {
    const [coinsCount, setCoinsCount] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
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
            setIsLoading(true);
            const userId = localStorage.getItem(USER_ID);
            if (!userId) return;
            LocalStorageUtil.removePortfolioCoin(userId, id);
            dispatch(removeCoinFromWallet(id));
            handleCloseDeleteModal();
            Toast.success(`${name} has been successfully removed from your portfolio.`);
        } catch (error) {
            console.log(error);
            Toast.error(`Something wrong while adding ${name} to your portfolio. Please try again later.`);
        } finally {
            setIsLoading(false);
        }
    };

    const sellCoins = () => {
        try {
            setIsLoading(true);
            const userId = localStorage.getItem(USER_ID);
            if (!userId) return;
            const newAmount = amount - Number(coinsCount);
            if (newAmount <= 0) {
                LocalStorageUtil.removePortfolioCoin(userId, id);
                dispatch(removeCoinFromWallet(id));
                Toast.success(`${name} has been successfully removed from your portfolio.`);
            } else {
                const coinInfo = {
                    id,
                    symbol,
                    name,
                    price,
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
        } finally {
            setIsLoading(false);
        }
    };

    const addCoins = () => {
        try {
            setIsLoading(true);
            const userId = localStorage.getItem(USER_ID);
            if (!userId) return;
            const newAmount = amount + Number(coinsCount);
            const coinInfo = {
                id,
                symbol,
                name,
                price,
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
        } finally {
            setIsLoading(false);
        }
    };

    const handleChangeCoinsCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoinsCount(e.target.value);
    };

    return {
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
    };
};
