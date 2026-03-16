import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "provider/providers";
import { black } from "shared/constants/colors";
import { dangerouslySetInnerHTMLString } from "shared/constants/layout";
import "styles/globals.css";

import { HydrationMarker } from "./HydrationMarker";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: true,
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: true,
});

export const metadata: Metadata = {
    title: "Coincap",
    description: "Cryptocurrency portfolio app.",
    icons: {
        icon: "/appLogo.png",
        shortcut: "/appLogo.png",
        apple: "/appLogo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content={black} />
                <style
                    dangerouslySetInnerHTML={{
                        __html: dangerouslySetInnerHTMLString,
                    }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <div id="app-initial-loader" aria-label="Loading">
                    <div id="app-initial-loader__spinner" />
                </div>
                <Providers>{children}</Providers>
                <HydrationMarker />
            </body>
        </html>
    );
}
