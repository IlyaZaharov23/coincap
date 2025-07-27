"use client";

import { useEffect } from "react";

import { Stack } from "@chakra-ui/react";

import { useAppDispatch } from "store/hooks";
import { getAssets } from "store/slices/assets/assets.thunks";

export const AssetsList = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAssets(100));
    }, []);
    return <Stack></Stack>;
};
