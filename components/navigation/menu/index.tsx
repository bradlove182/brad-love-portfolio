import React from "react";
import Link from "next/link";

import { routes } from "../../../routing/routes";
import { ThemePicker } from "../../theme-picker";

import style from "./index.module.scss";

import type { ThemeKey } from "../../../themes";

export interface NavigationMenuProps{
    theme: ThemeKey;
    onThemeChange: (key: ThemeKey) => void;
}

export const NavigationMenu: React.ComponentType<NavigationMenuProps> = ({
    theme,
    onThemeChange
}) => (
    <nav className={ style.menu }>
        {
            routes.filter((route) => route.path !== "/").map((route) => (
                <Link href={ route.path } key={ route.name }>
                    { route.name }
                </Link>
            ))
        }
        <ThemePicker currentTheme={ theme } onThemeChange={ onThemeChange } />
    </nav>
);
