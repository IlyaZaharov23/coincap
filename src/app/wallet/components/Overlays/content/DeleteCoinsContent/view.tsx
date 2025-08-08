import { Text } from "@chakra-ui/react";

import { styles } from "../styles";

export const DeleteCoinsContent = ({ assetName }: { assetName: string }) => {
    return (
        <Text
            sx={styles.text}
        >{`Are you sure you want to delete ${assetName}? You can't undo this action afterwards.`}</Text>
    );
};
