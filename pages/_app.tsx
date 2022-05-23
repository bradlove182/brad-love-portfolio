
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import "../styles/globals.scss";

import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";

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
                { "Brad Love" }
            </title>
            <meta content="Brad Love" name="description" />
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <BlobRender />
        <Navigation />
        <Component { ...pageProps } />
        <Footer />
    </React.Fragment>
);

export default MyApp;
