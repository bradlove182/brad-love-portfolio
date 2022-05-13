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

export const Contact: React.ComponentType = () => (
    <motion.div
        className={ style.contact }
        onViewportEnter={ dispatchBlobEvent(BlobEvents.CENTER) }
        viewport={ {
            amount: "all"
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
            { "/03" }
        </motion.div>
        <motion.div
            className={ style.work }
            initial={ "initial" }
            variants={ wordVariant }
            viewport={ {
                amount: "all",
                once: true
            } }
            whileInView={ "visible" }
        >
            { "Got an idea?" }
        </motion.div>
        <motion.div
            className={ style.message }
            initial={ "initial" }
            variants={ wordVariant }
            viewport={ {
                amount: "all",
                once: true
            } }
            whileInView={ "visible" }
        >
            { "Drop me a message." }
        </motion.div>
        <motion.a
            className={ style.email }
            href="mailto:brad@bradlove.co.za"
            initial={ "initial" }
            variants={ wordVariant }
            viewport={ {
                amount: "all",
                once: true
            } }
            whileInView={ "visible" }
        >
            { "brad@brad" }
            <br />
            { "love.co.za" }
        </motion.a>
    </motion.div>
);

