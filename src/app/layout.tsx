import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

import { Navigation } from "@components/navigation";
import { Footer } from "@components/footer";

import "@styles/globals.css";

const BlobRender = dynamic(() => import("@components/blob"), {
    ssr: false,
});

const font = Inter({
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
                <Navigation />
                <BlobRender />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export { metadata };
export default RootLayout;
