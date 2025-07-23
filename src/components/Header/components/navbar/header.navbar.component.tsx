import { Stack } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import { BUTTON_VARIANT } from "shared/constants/button-variants";

import { styles } from "./header.navbar.styles";

export const Navbar = () => {
    return (
        <Stack sx={styles.navPanel}>
            <Button variant={BUTTON_VARIANT.TAB}>Fund Wallet</Button>
            <Button variant={BUTTON_VARIANT.TAB}>Markets</Button>
            <Button variant={BUTTON_VARIANT.TAB}>About</Button>
        </Stack>
    );
};
