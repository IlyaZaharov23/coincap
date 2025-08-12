import { Skeleton, Stack } from "@chakra-ui/react";

import { PAGINATION_WRAPPER_PADDING_BOTTOM, PAGINATION_WRAPPER_PADDING_TOP } from "../../Pagination/styles";

export const PaginationSkeleton = () => {
    return (
        <Stack height="40px">
            <Skeleton
                height="100%"
                width="25vw"
                padding={`${PAGINATION_WRAPPER_PADDING_TOP}px 16px ${PAGINATION_WRAPPER_PADDING_BOTTOM}px`}
            />
        </Stack>
    );
};
