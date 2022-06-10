import React from "react";
import { motion } from "framer-motion";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

const heading: Variants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const letter: Variants = {
    hidden: {
        y: "100%"
    },
    show: {
        y: "0%"
    }
};

export interface SectionTitleProps{
    text: string;
}

export const SectionTitle: React.ComponentType<SectionTitleProps> = ({
    text
}) => (
    <motion.h1
        className={ style.title }
        initial={ "hidden" }
        title={ text }
        variants={ heading }
        viewport={ { once: true } }
        whileInView={ "show" }
    >
        {
            [...text].map((char, index) => (
                <motion.span
                    className={ style.letter }
                    key={ `${ char }-${ String(index) }` }
                    variants={ letter }
                >
                    { char }
                </motion.span>
            ))
        }
    </motion.h1>
);
