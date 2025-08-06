export const getVisiblePages = (totalPages: number, currentPage: number) => {
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
