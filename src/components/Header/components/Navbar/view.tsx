"use client";

import { Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { useRouter } from "next/navigation";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { ROUTES } from "shared/constants/routes";

import { NAV_BUTTON } from "./constants/navButtons";
import { useActiveNav } from "./hooks/useActiveNav";
import { styles } from "./styles";

export const Navbar = () => {
    const router = useRouter();
    const activeNav = useActiveNav();

    const navigateToMarkets = () => {
        router.push(ROUTES.MARKETS);
    };
    const navigateToAbout = () => {
        router.push(ROUTES.ABOUT);
    };
    return (
        <Stack sx={styles.navPanel}>
            <Button
                variant={BUTTON_VARIANT.TAB}
                onClick={navigateToMarkets}
                isActive={activeNav === NAV_BUTTON.MARKETS}
            >
                Markets
            </Button>
            <Button variant={BUTTON_VARIANT.TAB} onClick={navigateToAbout} isActive={activeNav === NAV_BUTTON.ABOUT}>
                About
            </Button>
        </Stack>
    );
};
