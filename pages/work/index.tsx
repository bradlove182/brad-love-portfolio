import React from "react";
import Head from "next/head";

import type { NextPage } from "next";

const Work: NextPage = () => (
    <div>
        <Head>
            <title>
                { "Work" }
            </title>
            <meta content="Brad Love" name="description" />
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <h1>
            { "Work Page" }
        </h1>
    </div>
);

export default Work;
