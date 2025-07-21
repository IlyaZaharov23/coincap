"use client";
import { ChakraProvider } from "@chakra-ui/react";
import type { ChakraProviderProps } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChakraProvider {...({} as ChakraProviderProps)}>{children}</ChakraProvider>
    </Provider>
  );
}
