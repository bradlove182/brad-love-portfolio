
import React, { useMemo } from "react";
import { motion } from "framer-motion";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

export const ScrollingText: React.ComponentType = () => {

    const marqueeVariants: Variants = useMemo(() => ({
        left: {
            transition: {
                x: {
                    duration: 30,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop"
                }
            },
            x: ["0%", "-100%"]
        },
        right: {
            transition: {
                x: {
                    duration: 30,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop"
                }
            },
            x: ["-100%", "0%"]
        }
    }), []);

    return (
        <motion.div
            className={ style.container }
        >
            <motion.div
                animate={ {
                    opacity: [0, 1],
                    transition: {
                        opacity: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        y: {
                            duration: 1,
                            ease: "easeOut"
                        }
                    },
                    y: ["-100%", "0%"]
                } }
                className={ style.small }
            >
                { "Hi, I'm Brad. I'm a" }
            </motion.div>
            <div
                className={ style.marquee }
            >
                <motion.div
                    animate={ {
                        opacity: [0, 1],
                        transition: {
                            opacity: {
                                delay: 1,
                                duration: 2,
                                ease: "easeOut"
                            }
                        }
                    } }
                    className={ style.track }
                >
                    {
                        Array.from({ length: 3 }, (value, index) => (
                            <motion.div
                                animate="left"
                                className={ style.text }
                                key={ index }
                                variants={ marqueeVariants }
                            >
                                { "Creative" }
                                <span>
                                    {"~"}
                                </span>
                            </motion.div>
                        ))
                    }
                </motion.div>
                <motion.div
                    animate={ {
                        opacity: [0, 1],
                        transition: {
                            opacity: {
                                delay: 1.5,
                                duration: 2,
                                ease: "easeOut"
                            }
                        }
                    } }
                    className={ style.track }
                >
                    {
                        Array.from({ length: 3 }, (value, index) => (
                            <motion.div
                                animate="right"
                                className={ style.text }
                                key={ index }
                                variants={ marqueeVariants }
                            >
                                { "Developer" }
                                <span>
                                    {"~"}
                                </span>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
            <motion.div
                animate={ {
                    opacity: [0, 1],
                    transition: {
                        delay: 2,
                        opacity: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        y: {
                            duration: 1,
                            ease: "easeOut"
                        }
                    },
                    y: ["100%", "0%"]
                } }
                className={ style.small }
            >
                { "based in Cape Town, South Africa." }
            </motion.div>
        </motion.div>
    );
};
