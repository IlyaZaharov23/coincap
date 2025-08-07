import { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { DIVIDER_ORIENTATION, DIVIDER_SIZE } from "shared/constants/divider";

import { sizeMap } from "./config";
import { DividerPropsType } from "./types";

export const Divider: FC<DividerPropsType> = ({
    size = DIVIDER_SIZE.MEDIUM,
    orientation = DIVIDER_ORIENTATION.HORIZONTAL,
    color,
}) => {
    const { size: thickness, length } = sizeMap[size];
    const isVertical = orientation === DIVIDER_ORIENTATION.VERTICAL;

    return (
        <Stack
            bg={color}
            height={isVertical ? `${length}px` : `${thickness}px`}
            width={isVertical ? `${thickness}px` : `${length}px`}
            marginX={2}
        />
    );
};
