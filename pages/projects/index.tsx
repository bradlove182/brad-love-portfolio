import React from "react";
import Head from "next/head";

import type { NextPage } from "next";

const Projects: NextPage = () => (
    <div>
        <Head>
            <title>
                { "Projects" }
            </title>
            <meta content="Brad Love" name="description" />
            <link href="/favicon.ico" rel="icon" />
        </Head>
        <h1>
            { "Projects Page" }
        </h1>
    </div>
);

export default Projects;
