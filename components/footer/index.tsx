
import React from "react";

import style from "./index.module.scss";

export const Footer: React.ComponentType = () => (
    <div className={ style.footer }>
        { `© Bradley Love ${ new Date().getFullYear() }` }
    </div>
);
