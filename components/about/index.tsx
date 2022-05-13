
import React from "react";
import { motion } from "framer-motion";

import {
    BlobEvents,
    dispatchBlobEvent
} from "../blob/events";

import style from "./index.module.scss";

export const About: React.ComponentType = () => (
    <motion.div
        className={ style.about }
        onViewportEnter={ dispatchBlobEvent(BlobEvents.LEFT) }
        viewport={ {
            amount: 0.25
        } }
    >
        <motion.div>
            { "/01" }
        </motion.div>
        <motion.div>
            <motion.div className={ style.large }>
                { "I love working at the intersection of creativity and user friendly interfaces." }
            </motion.div>
            <motion.div className={ style.large }>
                { "When I'm not building or exploring new web experiences, I'm probably playing games or watching football." }
            </motion.div>
            <motion.div className={ style.inline }>
                <motion.div>
                    { "A blend of UI/UX and development." }
                </motion.div>
                <motion.div>
                    { "With a background in both design and development I am the glue between both worlds." }
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
);

