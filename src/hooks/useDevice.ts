import { useBreakpointValue } from "@chakra-ui/react";

export const useIsMobile = () => {
    return (
        useBreakpointValue({
            base: true,
            md: false,
        }) ?? true
    );
};

export const useIsTablet = () => {
    return (
        useBreakpointValue({
            base: false,
            md: true,
            lg: true,
            xl: false,
        }) ?? false
    );
};
