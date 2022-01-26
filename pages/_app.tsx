
import React from "react";
import Head from "next/head";

import "../styles/globals.scss";

import { Navigation } from "../components/navigation";

import type { AppProps } from "next/app";


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
        <Navigation />
        <Component { ...pageProps } />
    </React.Fragment>
);

export default MyApp;
