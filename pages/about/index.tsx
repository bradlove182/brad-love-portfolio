import React from "react";
import Head from "next/head";

import type { NextPage } from "next";

const About: NextPage = () => (
    <div>
        <Head>
            <title>
                { "About" }
            </title>
            <meta content="Brad Love" name="description" />
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <h1>
            { "About Page" }
        </h1>
    </div>
);

export default About;
