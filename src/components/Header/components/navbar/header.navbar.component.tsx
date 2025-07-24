"use client";

import { Stack } from "@chakra-ui/react";

import { Button } from "components/button/button.component";
import { usePathname, useRouter } from "next/navigation";
import { BUTTON_VARIANT } from "shared/constants/button-variants";
import { ROUTES } from "shared/constants/routes";

import { styles } from "./header.navbar.styles";

export const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const navigateToMarkets = () => {
        router.push(ROUTES.MARKETS);
    };
    const navigateToAbout = () => {
        router.push(ROUTES.ABOUT);
    };
    return (
        <Stack sx={styles.navPanel}>
            {/* <Button variant={BUTTON_VARIANT.TAB}>Converter</Button> */}
            <Button variant={BUTTON_VARIANT.TAB} onClick={navigateToMarkets} isActive={pathname === ROUTES.MARKETS}>
                Markets
            </Button>
            <Button variant={BUTTON_VARIANT.TAB} onClick={navigateToAbout} isActive={pathname === ROUTES.ABOUT}>
                About
            </Button>
        </Stack>
    );
};
