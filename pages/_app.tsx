
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import "../styles/globals.scss";

import {
    BlobEvents,
    useBlobEvents
} from "../components/blob/events";
import { Footer } from "../components/footer";

import type { AppProps } from "next/app";

const BlobRender = dynamic(() => import("../components/blob"), {
    ssr: false
});

const MyApp = ({
    Component,
    pageProps
}: AppProps): React.ReactElement => {

    const [blobState, setBlobState] = useBlobEvents({
        bottom: () => {
            setBlobState(BlobEvents.BOTTOM);
        },
        center: () => {
            setBlobState(BlobEvents.CENTER);
        },
        left: () => {
            setBlobState(BlobEvents.LEFT);
        },
        right: () => {
            setBlobState(BlobEvents.RIGHT);
        },
        top: () => {
            setBlobState(BlobEvents.TOP);
        }
    });

    return (
        <React.Fragment>
            <Head>
                <title>
                    { "Brad Love" }
                </title>
                <meta content="Brad Love" name="description" />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <BlobRender blobState={ blobState } />
            <Component { ...pageProps } />
            <Footer />
        </React.Fragment>
    );

};

export default MyApp;
