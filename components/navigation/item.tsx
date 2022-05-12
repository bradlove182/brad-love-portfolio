
import React from "react";
import NextLink from "next/link";

import style from "./item.module.scss";

export interface NavItemProps {
    active?: boolean;
    name: string;
    path: string;
}

export const NavItem: React.ComponentType<NavItemProps> = ({
    active,
    name,
    path
}) => (
    <span className={ [
        style.item,
        active ? style.active : undefined
    ].filter(Boolean).join(" ") }
    >
        <NextLink href={ path }>
            { name }
        </NextLink>
    </span>
);
