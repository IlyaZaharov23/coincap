import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { bluePrimary, darkGray } from "shared/constants/colors";
import { useAppDispatch } from "store/hooks";
import { getAssets } from "store/slices/assets/assets.thunks";
import { Asset } from "types/types";

import { styles } from "./styles";
import { PaginationProps } from "./types";

export const Pagination = ({
    children,
    currentPage,
    offset,
    setCurrentPage,
    setOffset,
    showBack,
    showNext,
    setHasMore,
    totalPages,
    isLoading,
    setIsLoading,
}: PaginationProps) => {
    const dispatch = useAppDispatch();
    const handleBack = () => {
        setCurrentPage(currentPage - 1);
        setOffset(currentPage - 1);
    };

    const handleNext = async () => {
        setIsLoading(true);
        const resp = (await dispatch(getAssets({ limit: ASSETS_LIMIT.PAGINATION, offset })).unwrap()) as {
            data: Asset[];
            timestamp: number;
        };
        if (resp.data.length < ASSETS_LIMIT.PAGINATION) {
            setHasMore(false);
        }
        setCurrentPage(currentPage + 1);
        setOffset(currentPage + 1);
        setIsLoading(false);
    };

    const handlePageChange = async (page: number) => {
        setIsLoading(true);
        const resp = (await dispatch(getAssets({ limit: ASSETS_LIMIT.PAGINATION, offset })).unwrap()) as {
            data: Asset[];
            timestamp: number;
        };
        if (resp.data.length < ASSETS_LIMIT.PAGINATION) {
            setHasMore(false);
        }
        setCurrentPage(page);
        setOffset(page);
        setIsLoading(false);
    };

    // TODO: ВЫНЕСТИ В УТИЛИТУ
    const getVisiblePages = () => {
        let startPage = 1;
        let endPage = totalPages;

        if (totalPages <= 10) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 4) {
            endPage = 10;
        } else if (currentPage >= totalPages - 4) {
            startPage = totalPages - 9;
        } else {
            startPage = currentPage - 4;
            endPage = currentPage + 5;
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const visiblePages = getVisiblePages();

    return (
        <>
            {!isLoading && (
                <Stack>
                    <Stack>{children}</Stack>
                    <Stack sx={styles.paginationWrapper}>
                        <ChevronLeftIcon
                            onClick={handleBack}
                            sx={showBack ? styles.arrowIcon : styles.unavailableArrowIcon}
                        />
                        {visiblePages.map((page) => (
                            <Button
                                key={`assets page${page}`}
                                variant={BUTTON_VARIANT.TAB}
                                color={currentPage == page ? bluePrimary : darkGray}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </Button>
                        ))}
                        {showNext && (
                            <ChevronRightIcon
                                onClick={handleNext}
                                sx={showNext ? styles.arrowIcon : styles.unavailableArrowIcon}
                            />
                        )}
                    </Stack>
                </Stack>
            )}
        </>
    );
};
