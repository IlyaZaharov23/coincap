import { Stack, Text } from "@chakra-ui/react";

import { styles } from "./styles";
import { TooltipProps } from "./types";

export const ChartTooltip = ({ active, payload, date }: TooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <Stack sx={styles.wrapper}>
                <Text>{`${date}`}</Text>
            </Stack>
        );
    }
    return null;
};
