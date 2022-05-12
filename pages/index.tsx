import React from "react";

import { ScrollingText } from "../components/scrolling-text";
import { ScrollIndicator } from "../components/scroll-indicator";

import type { NextPage } from "next";

const Home: NextPage = () => (
    <div>
        <ScrollingText />
        <ScrollIndicator />
    </div>

);
export default Home;
