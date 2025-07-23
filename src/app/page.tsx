import { Stack, Text } from "@chakra-ui/react";

import { Header } from "components/header/header.component";
import { bluePrimary } from "shared/constants/colors";

export default function Home() {
    return (
        <Stack display="flex" flexDirection="column" alignItems="center" height="100vh">
            <Header showSignIn showSignOut />
            <Stack
                sx={{
                    width: "500px",
                    height: "200px",
                    border: `2px solid ${bluePrimary}`,
                    borderRadius: "6px",
                }}
            >
                <Text>Top 3 cryptocurrencies</Text>
            </Stack>
        </Stack>
    );
}
