
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
            <meta content="Bradley Love" name="description" />
            <link href="/favicon.ico" rel="icon" />
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
