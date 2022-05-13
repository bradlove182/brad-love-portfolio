
import React from "react";
import { motion } from "framer-motion";

import {
    BlobEvents,
    dispatchBlobEvent
} from "../blob/events";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

const wordVariant: Variants = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: [0, 1],
        transition: {
            delay: 0.3,
            duration: 0.5
        },
        y: ["10%", "0%"]
    }
};

export const About: React.ComponentType = () => (
    <motion.div
        className={ style.about }
        onViewportEnter={ dispatchBlobEvent(BlobEvents.LEFT) }
        viewport={ {
            amount: 0.25
        } }
    >
        <motion.div
            initial={ "initial" }
            variants={ wordVariant }
            viewport={ {
                amount: "some",
                once: true
            } }
            whileInView={ "visible" }
        >
            { "/01" }
        </motion.div>
        <motion.div className={ style.bio }>
            <motion.div
                className={ style.large }
                initial={ "initial" }
                variants={ wordVariant }
                viewport={ {
                    amount: "all",
                    once: true
                } }
                whileInView={ "visible" }
            >
                { "I thrive when working at the edge of creativity and user friendly interfaces." }
            </motion.div>
            <motion.div
                className={ style.large }
                initial={ "initial" }
                variants={ wordVariant }
                viewport={ {
                    amount: "all",
                    once: true
                } }
                whileInView={ "visible" }
            >
                { "While taking a break from creating and discovering web experiences, I can usually be found playing games or watching football." }
            </motion.div>
        </motion.div>
        <motion.div
            className={ style.blend }
            initial={ "initial" }
            variants={ wordVariant }
            viewport={ {
                amount: "all",
                once: true
            } }
            whileInView={ "visible" }
        >
            { "A blend of UI/UX and development." }
        </motion.div>
        <motion.div
            className={ style.glue }
            initial={ "initial" }
            variants={ wordVariant }
            viewport={ {
                amount: "all",
                once: true
            } }
            whileInView={ "visible" }
        >
            { "A background in both design and development, allows me to be very sensitive to visual details, animation or typography." }
        </motion.div>
        <motion.div
            className={ style.employed }
            initial={ "initial" }
            variants={ wordVariant }
            viewport={ {
                amount: "all",
                once: true
            } }
            whileInView={ "visible" }
        >
            { "Currently at " }
            <a href="https://newsteam.io" rel="noreferrer" target="_blank">
                { "News Team." }
            </a>
        </motion.div>
    </motion.div>
);

