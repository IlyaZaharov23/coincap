import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Stack } from "@chakra-ui/react";

import { Button } from "components/Button";
import { ASSETS_LIMIT } from "shared/constants/assetsLimit";
import { BUTTON_VARIANT } from "shared/constants/buttonVariants";
import { useAppDispatch } from "store/hooks";
import { getAssets } from "store/slices/assets/assets.thunks";
import { Asset } from "types/types";
import { getVisiblePages } from "utils/helpers/pagination/getVisiblePages";

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

    const handleNext = async () => {
        try {
            setIsLoading(true);
            if (totalPages - currentPage > 5) {
                return;
            }
            const resp = (await dispatch(getAssets({ limit: ASSETS_LIMIT.PAGINATION, offset })).unwrap()) as {
                data: Asset[];
                timestamp: number;
            };
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
    };

    const handlePageChange = async (page: number) => {
        try {
            setIsLoading(true);
            if (page < currentPage) {
                return;
            }
            if (totalPages - page > 4) {
                return;
            }
            const resp = (await dispatch(getAssets({ limit: ASSETS_LIMIT.PAGINATION, offset })).unwrap()) as {
                data: Asset[];
                timestamp: number;
            };
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
    };

    const visiblePages = getVisiblePages(totalPages, currentPage);

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
