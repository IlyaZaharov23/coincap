import { Skeleton } from "@chakra-ui/react";

import { useIsMobile } from "hooks/useDevice";

export const MainInfoSkeleton = () => {
    const isMobile = useIsMobile();
    return <Skeleton width={isMobile ? "310px" : "367px"} height={isMobile ? "48px" : "60px"} />;
};
