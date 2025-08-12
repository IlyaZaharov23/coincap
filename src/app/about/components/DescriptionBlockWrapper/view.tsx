import { ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";

import Image from "next/image";

import { styles } from "./styles";
import { DescriptionBlockWrapperProps } from "./types";

export const DescriptionBlockWrapper = ({
    mainTitle,
    mainDescription,
    listTitle,
    descriptionList,
    icon,
}: DescriptionBlockWrapperProps) => {
    return (
        <Stack sx={styles.blockWrapper}>
            <Text sx={styles.mainTitle}>{mainTitle}</Text>
            <Text sx={styles.description}>{mainDescription}</Text>
            <Image src={icon} alt={mainTitle} width={1200} height={600} layout="responsive" />
            <Text sx={styles.listTitle}>{listTitle}</Text>
            <UnorderedList sx={styles.listWrapper}>
                {descriptionList.map((item) => (
                    <ListItem key={item.title} sx={styles.description}>
                        {item.title} - {item.description}
                    </ListItem>
                ))}
            </UnorderedList>
        </Stack>
    );
};
