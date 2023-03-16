import { JetBrains_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

import { SiteTitle } from "@components/site-title";
import { ThemePicker } from "@components/theme-picker";
import { ThemeController } from "@components/theme";
import { Footer } from "@components/footer";

import "@styles/globals.css";

const BlobRender = dynamic(() => import("@components/blob"), {
    ssr: false,
});

const font = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
});

const metadata: Metadata = {
    title: "Bradley Love",
    description: "Creative Developer based in Cape Town, South Africa.",
    icons: {
        icon: "/favicon.ico",
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={font.className}>
            <body>
                <ThemeController />
                <BlobRender />
                <SiteTitle />
                <ThemePicker />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export { metadata };
export default RootLayout;
