
import React from "react";

import style from "./index.module.scss";

const currentYear = new Date().getFullYear();

export const Footer: React.ComponentType = () => (
    <div className={ style.footer }>
        { `© Bradley Love ${ currentYear }` }
    </div>
);
