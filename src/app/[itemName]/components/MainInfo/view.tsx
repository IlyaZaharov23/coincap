import { Stack, Text } from "@chakra-ui/react";

import { CryptoIcon } from "components/CryptoIcon";
import { useAppSelector } from "store/hooks";
import { getAssetDetails } from "store/slices/assets/selectors";

import { MainInfoSkeleton } from "../Fallbacks/MainInfoSkeleton";
import { styles } from "./styles";

export const MainInfo = () => {
    const assetDetails = useAppSelector(getAssetDetails);
    if (!assetDetails) return <MainInfoSkeleton />;
    return (
        <Stack sx={styles.wrapper}>
            <CryptoIcon symbol={assetDetails?.symbol} size={42} />
            <Text sx={styles.name}>{assetDetails?.name} price</Text>
            <Text sx={styles.symbol}>{assetDetails?.symbol}</Text>
        </Stack>
    );
};
