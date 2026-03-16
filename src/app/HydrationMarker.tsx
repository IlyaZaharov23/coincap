"use client";

import { useEffect } from "react";

export const HydrationMarker = () => {
    useEffect(() => {
        document.documentElement.dataset.hydrated = "true";
    }, []);

    return null;
};
