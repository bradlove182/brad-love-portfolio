import React from "react";
import { motion } from "framer-motion";

import style from "./index.module.scss";

export const ScrollIndicator: React.ComponentType = () => (
    <div className={ style.scroller }>
        <motion.div
            className={ style.indicator }
            whileInView={ {
                opacity: [0, 1],
                transition: {
                    delay: 3,
                    opacity: {
                        duration: 1,
                        ease: "easeInOut"
                    },
                    y: {
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 0.5,
                        repeatType: "loop"
                    }
                },
                y: ["-100%", "100%"]
            } }
        />
    </div>
);
