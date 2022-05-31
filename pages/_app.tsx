
import React from "react";
import Head from "next/head";

import "../styles/globals.scss";

import BlobRender from "../components/blob";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { ThemeProvider } from "../components/theme";

import type { AppProps } from "next/app";

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement => (
    <ThemeProvider theme="yellow">
        <Head>
            <title>
                { "Brad Love" }
            </title>
            <meta content="Brad Love" name="description" />
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <BlobRender />
        <Navigation />
        <Component { ...pageProps } />
        <Footer />
    </ThemeProvider>
);

export default MyApp;
