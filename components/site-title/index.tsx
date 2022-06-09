import React from "react";
import Link from "next/link";

import style from "./index.module.scss";

export const SiteTitle: React.ComponentType = () => (
    <span className={ style.title }>
        <Link href="/">
            { "Bradley Love" }
        </Link>
    </span>
);
