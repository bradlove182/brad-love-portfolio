import React from "react";

import { ScrollingText } from "@components/scrolling-text";
import { About } from "@components/about";
import { RecentProjects } from "@components/recent-projects";
import { Contact } from "@components/contact";
import { Grid } from "@bradlove/design-system";

const HomePage = () => {
    return (
        <Grid columns={1} gap={9}>
            <ScrollingText />
            <About />
            <RecentProjects />
            <Contact />
        </Grid>
    );
};

export default HomePage;
