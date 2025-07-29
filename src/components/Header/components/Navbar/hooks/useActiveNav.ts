import { usePathname } from "next/navigation";
import { ROUTES } from "shared/constants/routes";
import { useAppSelector } from "store/hooks";
import { getAssetsPaths } from "store/slices/assets/assets.selectors";

export const useActiveNav = () => {
    const pathname = usePathname();
    const assetsPaths = useAppSelector(getAssetsPaths);

    if (pathname === ROUTES.MARKETS || pathname === ROUTES.PORTFOLIO) {
        return "markets";
    }

    const itemName = pathname.split("/")[1];
    if (assetsPaths.includes(itemName)) {
        return "markets";
    }

    if (pathname === ROUTES.ABOUT) {
        return "about";
    }
    return null;
};
