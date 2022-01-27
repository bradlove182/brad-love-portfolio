
import React from "react";
import { useRouter } from "next/router";

import { routes } from "../../routing/routes";

import { NavItem } from "./item";
import style from "./index.module.scss";

export const Navigation: React.ComponentType = () => {

    const router = useRouter();

    return (
        <nav className={ style.nav }>
            {
                routes.map((route) => (
                    <NavItem
                        active={ router.route === route.path }
                        key={ route.name }
                        name={ route.name }
                        path={ route.path }
                    >
                        { route.name }
                    </NavItem>
                ))
            }
        </nav>
    );

};
