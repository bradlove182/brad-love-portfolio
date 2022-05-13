
import React from "react";
import { motion } from "framer-motion";

import style from "./index.module.scss";

export const Footer: React.ComponentType = () => (
    <motion.footer
        className={ style.footer }
    >
        <motion.div className={ style.title }>
            { "Bradley Love" }
            <br />
            { "Creative Developer" }
        </motion.div>
        <motion.div className={ style.links }>
            <a href="https://github.com/bradlove182" rel="noreferrer" target="_blank">
                { "Github" }
            </a>
        </motion.div>
    </motion.footer>
);

