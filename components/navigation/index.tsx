
import React from "react";
import NextLink from "next/link";

import style from "./index.module.scss";

export const Navigation: React.ComponentType = () => (
    <nav className={ style.nav }>
        <NextLink href="/">
            { "Home" }
        </NextLink>
        <NextLink href="/about">
            { "About" }
        </NextLink>
        <NextLink href="/projects">
            { "Projects" }
        </NextLink>
    </nav>
);
