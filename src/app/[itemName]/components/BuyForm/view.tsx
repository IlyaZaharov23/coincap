import { useState } from "react";

import { Stack, Text } from "@chakra-ui/react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { INPUT_SIZE } from "shared/constants/inputSizes";
import { useAppSelector } from "store/hooks";
import { getAssetDetails } from "store/slices/assets/assets.selectors";
import { InputValidationUtil } from "utils/inputValidation";
import { PricesUtil } from "utils/prices";

import { styles } from "./styles";

export const BuyForm = () => {
    const assetDetails = useAppSelector(getAssetDetails);
    const [value, setValue] = useState<string>("0");
    const [price, setPrice] = useState<string>(PricesUtil.solvePrice("0", assetDetails?.priceUsd));
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || InputValidationUtil.isDigit(inputValue)) {
            setValue(inputValue);
            setPrice(PricesUtil.solvePrice(inputValue, assetDetails?.priceUsd));
        }
    };
    return (
        <Stack sx={styles.wrapper}>
            <Input
                label={`${assetDetails?.symbol} amount:`}
                size={INPUT_SIZE.MEDIUM}
                width={300}
                value={value}
                onChange={handleChangeValue}
                type="text"
                inputMode="decimal"
            />
            <Text>Total price: {price}</Text>
            <Button variant={BUTTON_VARIANT.SECONDARY} width={150}>
                Buy
            </Button>
        </Stack>
    );
};
