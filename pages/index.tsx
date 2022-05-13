import React from "react";

import { ScrollingText } from "../components/scrolling-text";
import { ScrollIndicator } from "../components/scroll-indicator";
import { About } from "../components/about";
import { RecentProjects } from "../components/recent-projects";
import { Contact } from "../components/contact";

import type { NextPage } from "next";

const Home: NextPage = () => (
    <React.Fragment>
        <ScrollingText />
        <ScrollIndicator />
        <About />
        <RecentProjects />
        <Contact />
    </React.Fragment>
);
export default Home;
