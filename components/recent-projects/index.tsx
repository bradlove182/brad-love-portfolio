
import React from "react";
import { motion } from "framer-motion";

import {
    BlobEvents,
    dispatchBlobEvent
} from "../blob/events";

import style from "./index.module.scss";

export const RecentProjects: React.ComponentType = () => (
    <motion.div
        className={ style.recent }
        onViewportEnter={ dispatchBlobEvent(BlobEvents.RIGHT) }
        viewport={ {
            amount: 0.5
        } }
    >
        <motion.div>
            { "/02" }
        </motion.div>
        <motion.div className={ style.projects }>
            { "Recent Projects" }
        </motion.div>
        <motion.div className={ style.creative }>
            { "Creative Development" }
        </motion.div>
    </motion.div>
);

