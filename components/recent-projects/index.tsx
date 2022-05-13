
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
        <motion.div>
            <motion.div className={ style.inline }>
                <motion.div>
                    { "Recent Projects" }
                </motion.div>
                <motion.div>
                    { "Creative Development" }
                </motion.div>
            </motion.div>
            <motion.div className={ style.large }>
                { "TBA" }
            </motion.div>
        </motion.div>
    </motion.div>
);

