import { useCallback, useMemo } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { useAppDispatch } from "store/hooks";
import { getAssets } from "store/slices/assets/actions";
import { getVisiblePages } from "utils/helpers/pagination";

import { PaginationSkeleton } from "../Fallbacks/PaginationSketelon";
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

    const handleNext = useCallback(async () => {
        try {
            setIsLoading(true);
            if (totalPages - currentPage > 5) return;
            const resp = await dispatch(getAssets({ limit: ASSETS_LIMIT.PAGINATION, offset })).unwrap();
            if (resp.data.length < ASSETS_LIMIT.PAGINATION) {
                setHasMore(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setCurrentPage(currentPage + 1);
            setOffset(currentPage + 1);
            setIsLoading(false);
        }
    }, [currentPage, offset, totalPages, dispatch, setCurrentPage, setOffset, setHasMore, setIsLoading]);

    const handlePageChange = useCallback(
        async (page: number) => {
            try {
                setIsLoading(true);
                if (page < currentPage || totalPages - page > 4) return;
                const resp = await dispatch(getAssets({ limit: ASSETS_LIMIT.PAGINATION, offset })).unwrap();
                if (resp.data.length < ASSETS_LIMIT.PAGINATION) {
                    setHasMore(false);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
                setCurrentPage(page);
                setOffset(page);
            }
        },
        [currentPage, offset, totalPages, dispatch, setCurrentPage, setOffset, setHasMore, setIsLoading],
    );

    const visiblePages = useMemo(() => getVisiblePages(totalPages, currentPage), [currentPage, totalPages]);

    return (
        <Stack height="100%" justifyContent="space-between">
            <Stack>{children}</Stack>
            <Stack sx={styles.paginationWrapper}>
                {isLoading ? (
                    <PaginationSkeleton />
                ) : (
                    <>
                        <ChevronLeftIcon
                            onClick={handleBack}
                            sx={showBack ? styles.arrowIcon : styles.unavailableArrowIcon}
                        />
                        {visiblePages.map((page) => (
                            <Button
                                key={`assets page${page}`}
                                variant={BUTTON_VARIANT.TAB}
                                sx={styles.button(currentPage === page)}
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
                    </>
                )}
            </Stack>
        </Stack>
    );
};
