
import React from "react";
import NextLink from "next/link";

export const Navigation: React.ComponentType = () => (
    <nav>
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
