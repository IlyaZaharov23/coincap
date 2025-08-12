"use client";

import { memo, useEffect, useState } from "react";

import coinFallback from "assets/coinFallback.svg";
import Image from "next/image";

import { CryptoIconProps } from "./types";

export const CryptoIcon = memo(({ symbol, size }: CryptoIconProps) => {
    const [icon, setIcon] = useState<string>(coinFallback);

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const iconModule = await import(`cryptocurrency-icons/svg/color/${symbol?.toLowerCase()}.svg`);
                setIcon(iconModule);
            } catch (error) {
                console.warn(`Icon for ${symbol} not found, using fallback`);
                setIcon(coinFallback);
            }
        };
        loadIcon();
    }, [symbol]);

    return <Image src={icon} alt={`${symbol}-icon`} width={size} height={size} />;
});

CryptoIcon.displayName = "CryptoCoin";
