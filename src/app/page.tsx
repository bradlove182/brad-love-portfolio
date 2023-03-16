import React from "react";

import { ScrollingText } from "@components/scrolling-text";
import { About } from "@components/about";
import { RecentProjects } from "@components/recent-projects";
import { Contact } from "@components/contact";

const HomePage = () => {
    return (
        <React.Fragment>
            <ScrollingText />
            <About />
            <RecentProjects />
            <Contact />
        </React.Fragment>
    );
};

export default HomePage;
