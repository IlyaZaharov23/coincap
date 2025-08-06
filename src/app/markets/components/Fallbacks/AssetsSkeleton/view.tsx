import { Skeleton, Td, Tr } from "@chakra-ui/react";

import { ROW_HEIGHT } from "../../AssetItem/styles";

const ROW_PADDING_Y = 16;

export const AssetsSkeleton = () => {
    const skeletonList = Array.from({ length: 10 });
    return (
        <>
            {skeletonList.map((_, index) => (
                <Tr key={index}>
                    <Td width="23vw">
                        <Skeleton
                            height={`${ROW_HEIGHT - ROW_PADDING_Y * 2 - 0.5}px`}
                            padding={`${ROW_PADDING_Y}px 24px`}
                        />
                    </Td>
                    <Td width="11vw">
                        <Skeleton height={`${ROW_HEIGHT - ROW_PADDING_Y * 2}px`} padding={`${ROW_PADDING_Y}px 24px`} />
                    </Td>
                    <Td width="11vw">
                        <Skeleton height={`${ROW_HEIGHT - ROW_PADDING_Y * 2}px`} padding={`${ROW_PADDING_Y}px 24px`} />
                    </Td>
                    <Td width="14vw">
                        <Skeleton height={`${ROW_HEIGHT - ROW_PADDING_Y * 2}px`} padding={`${ROW_PADDING_Y}px 24px`} />
                    </Td>
                    <Td width="11vw">
                        <Skeleton height={`${ROW_HEIGHT - ROW_PADDING_Y * 2}px`} padding={`${ROW_PADDING_Y}px 24px`} />
                    </Td>
                    <Td width="5vw">
                        <Skeleton height={`${ROW_HEIGHT - ROW_PADDING_Y * 2}px`} padding={`${ROW_PADDING_Y}px 24px`} />
                    </Td>
                </Tr>
            ))}
        </>
    );
};
