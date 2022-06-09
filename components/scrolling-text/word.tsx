import React from "react";
import { motion } from "framer-motion";

import style from "./word.module.scss";

import type { Variants } from "framer-motion";

const topWord: Variants = {
    hidden: {
        x: "0%"
    },
    show: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
            x: {
                duration: 30,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop"
            }
        },
        x: ["0%", "-100%"]
    }
};

const bottomWord: Variants = {
    hidden: {
        x: "0%"
    },
    show: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
            x: {
                duration: 30,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop"
            }
        },
        x: ["-100%", "0%"]
    }
};

const bottomLetter: Variants = {
    hidden: {
        y: "100%"
    },
    show: {
        y: "0%"
    }
};

const topLetter: Variants = {
    hidden: {
        y: "-100%"
    },
    show: {
        y: "0%"
    }
};

export interface ScrollingTextWordProps{
    text: string;
    reverseDelimeter?: boolean;
}

export const ScrollingTextWord: React.ComponentType<ScrollingTextWordProps> = ({
    text,
    reverseDelimeter = false
}) => (
    <React.Fragment>
        {
            Array.from({ length: 3 }, (value, index) => (
                <motion.div
                    animate={ "show" }
                    className={ style.word }
                    initial={ "hidden" }
                    key={ index }
                    variants={ reverseDelimeter ? bottomWord : topWord }
                >
                    {
                        Boolean(reverseDelimeter) &&
                            <motion.div
                                className={ style.delimeter }
                                variants={ reverseDelimeter ? topLetter : bottomLetter }
                            >
                                { "~" }
                            </motion.div>
                    }
                    {
                        [...text].map((char, charIndex) => (
                            <motion.div
                                className={ style.letter }
                                key={ `${ char }-${ String(charIndex) }` }
                                variants={ reverseDelimeter ? topLetter : bottomLetter }
                            >
                                { char }
                            </motion.div>
                        ))
                    }
                    {
                        !reverseDelimeter &&
                            <motion.div
                                className={ style.delimeter }
                                variants={ bottomLetter }
                            >
                                { "~" }
                            </motion.div>
                    }
                </motion.div>
            ))
        }
    </React.Fragment>
);
