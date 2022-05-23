
import React, { useMemo } from "react";
import { motion } from "framer-motion";

import {
    BlobEvents,
    dispatchBlobEvent
} from "../blob/events";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

export const ScrollingText: React.ComponentType = () => {

    const marqueeVariants: Variants = useMemo(() => ({
        left: {
            perspective: ["0cm", "5cm"],
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
            onViewportEnter={ dispatchBlobEvent(BlobEvents.CENTER) }
            viewport={ {
                amount: 0.75
            } }
        >
            <div
                className={ style.marquee }
            >
                <motion.div
                    className={ style.track }
                    style={ {
                        opacity: 0
                    } }
                    viewport={ { once: true } }
                    whileInView={ {
                        opacity: [0, 1],
                        transition: {
                            delay: 1.5,
                            duration: 2,
                            ease: "easeOut"
                        }
                    } }
                >
                    {
                        Array.from({ length: 3 }, (value, index) => (
                            <motion.div
                                animate="left"
                                className={ style.text }
                                key={ index }
                                variants={ marqueeVariants }
                            >
                                { "A" }
                                <span>
                                    {"~"}
                                </span>
                                { "Developer" }
                                <span>
                                    {"~"}
                                </span>
                            </motion.div>
                        ))
                    }
                </motion.div>
                <motion.div
                    className={ style.track }
                    style={ {
                        opacity: 0
                    } }
                    viewport={ { once: true } }
                    whileInView={ {
                        opacity: [0, 1],
                        transition: {
                            delay: 2,
                            duration: 2,
                            ease: "easeOut"
                        }
                    } }
                >
                    {
                        Array.from({ length: 3 }, (value, index) => (
                            <motion.div
                                animate="right"
                                className={ style.text }
                                key={ index }
                                variants={ marqueeVariants }
                            >
                                { "Or" }
                                <span>
                                    {"~"}
                                </span>
                                { "Something" }
                                <span>
                                    {"~"}
                                </span>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </motion.div>
    );
};
