
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import "../styles/globals.scss";
import "../styles/fonts.scss";

import { SiteTitle } from "../components/site-title";
import { ThemePicker } from "../components/theme-picker";
import { ThemeController } from "../components/theme";
import { Footer } from "../components/footer";

import type { AppProps } from "next/app";

const BlobRender = dynamic(() => import("../components/blob"), {
    ssr: false
});

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement => (
    <React.Fragment>
        <Head>
            <title>
                { "Bradley Love" }
            </title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="Creative Developer based in Cape Town, South Africa." name="description" />
            <link href="/favicon.ico" rel="icon" />
            <link as="font" crossOrigin="anonymous" href="/fonts/JetBrainsMono-Regular.ttf" rel="preload" type="font/ttf" />
            <link as="font" crossOrigin="anonymous" href="/fonts/JetBrainsMono-Bold.ttf" rel="preload" type="font/ttf" />
        </Head>
        <ThemeController />
        <BlobRender />
        <SiteTitle />
        <ThemePicker />
        <Component { ...pageProps } />
        <Footer />
    </React.Fragment>
);

export default MyApp;
