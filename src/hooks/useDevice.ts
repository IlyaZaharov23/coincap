import { useEffect, useState } from "react";

import { useBreakpointValue } from "@chakra-ui/react";

export const useIsMobile = () => {
    const [isClient, setIsClient] = useState(false);
    const isMobileValue =
        useBreakpointValue({
            base: true,
            md: false,
        }) ?? true;

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? isMobileValue : false;
};

export const useIsTablet = () => {
    const [isClient, setIsClient] = useState(false);
    const isTabletValue =
        useBreakpointValue({
            base: false,
            md: true,
            lg: true,
            xl: false,
        }) ?? false;

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? isTabletValue : false;
};
