"use client";

import { Provider } from "react-redux";

import { ChakraProvider, theme } from "@chakra-ui/react";

import { store } from "store/store";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </Provider>
    );
}
