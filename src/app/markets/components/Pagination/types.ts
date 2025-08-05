export interface PaginationProps {
    children: React.ReactNode;
    currentPage: number;
    offset: number;
    totalPages: number;
    setCurrentPage: (value: number) => void;
    setOffset: (page: number) => void;
    setHasMore: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
    showBack: boolean;
    showNext: boolean;
    isLoading: boolean;
}
