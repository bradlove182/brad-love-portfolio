import React from "react";
import { motion } from "framer-motion";

import {
    BlobEvents,
    dispatchBlobEvent
} from "../blob/events";

import style from "./index.module.scss";

export const Contact: React.ComponentType = () => (
    <motion.div
        className={ style.contact }
        onViewportEnter={ dispatchBlobEvent(BlobEvents.BOTTOM) }
        viewport={ {
            amount: 0.25
        } }
    >
        <motion.div>
            { "/03" }
        </motion.div>
        <motion.div className={ style.inline }>
            <motion.div>
                { "Want to work together?" }
            </motion.div>
            <motion.div>
                { "Drop me a message." }
            </motion.div>
        </motion.div>
    </motion.div>
);

