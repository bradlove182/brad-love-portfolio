
import React from "react";
import { useRouter } from "next/router";

import { routes } from "../../routing/routes";
import { Button } from "../button";

import { NavItem } from "./item";
import style from "./index.module.scss";

export const Navigation: React.ComponentType = () => {

    const router = useRouter();

    return (
        <header className={ style.header }>
            <nav>
                {
                    routes.filter((route) => route.path === "/").map((route) => (
                        <NavItem
                            active={ router.route === route.path }
                            key={ route.name }
                            name={ route.name }
                            path={ route.path }
                        />
                    ))
                }
            </nav>
            <div>
                <a href="https://github.com/bradlove182" rel="noreferrer" target="_blank">
                    <Button text="Github" />
                </a>
                <a href="https://github.com/bradlove182" rel="noreferrer" target="_blank">
                    <Button text="LinkedIn" />
                </a>
            </div>
        </header>
    );

};
