import React from "react";
import Head from "next/head";

import type { NextPage } from "next";

const Contact: NextPage = () => (
    <div>
        <Head>
            <title>
                { "Contact" }
            </title>
            <meta content="Brad Love" name="description" />
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <h1>
            { "Contact Page" }
        </h1>
    </div>
);

export default Contact;
