"use client";

import dynamic from "next/dynamic";

import { DescriptionSkeleton } from "../Fallbacks/DescriptionSkeleton";

export const DynamicDescription = dynamic(() => import("app/components/Description").then((mod) => mod.Description), {
    ssr: false,
    loading: () => <DescriptionSkeleton />,
});
