import React, { useEffect } from "react";
import {
    motion,
    useAnimation
} from "framer-motion";

import style from "./word.module.scss";

export interface ScrollingTextWordProps{
    word: string;
    reverseDelimeter?: boolean;
}

export const ScrollingTextWord: React.ComponentType<ScrollingTextWordProps> = ({
    word,
    reverseDelimeter = false
}) => {

    const letterAnimation = useAnimation();
    const leftAnimation = useAnimation();
    const rightAnimation = useAnimation();

    useEffect(() => {

        if(reverseDelimeter){

            void letterAnimation.start((index: number) => ({

                transition: {
                    delay: index * 0.1,
                    duration: 0.6
                },
                y: ["-100%", "0%"]
            }));

            void rightAnimation.start({
                transition: {
                    x: {
                        duration: 30,
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop"
                    }
                },
                x: ["-100%", "0%"]
            });

            return;

        }

        void letterAnimation.start((index: number) => ({
            transition: {
                delay: index * 0.1,
                duration: 0.6
            },
            y: ["100%", "0%"]
        }));

        void leftAnimation.start({
            transition: {
                x: {
                    duration: 30,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop"
                }
            },
            x: ["0%", "-100%"]
        });

    }, [reverseDelimeter]);

    return (
        <React.Fragment>
            {
                Array.from({ length: 3 }, (value, wordIndex) => (
                    <motion.div
                        animate={ reverseDelimeter ? rightAnimation : leftAnimation }
                        className={ style.word }
                    >
                        {
                            Boolean(reverseDelimeter) &&
                            <motion.div
                                className={ style.delimeter }
                                custom={ wordIndex }
                            >
                                <motion.span
                                    animate={ letterAnimation }
                                    custom={ wordIndex }
                                >
                                    { "~" }
                                </motion.span>
                            </motion.div>
                        }
                        {
                            [...word].map((letter, letterIndex) => (
                                <motion.div className={ style.letter } key={ `${ letter }-${ String(letterIndex) }` }>
                                    <motion.span
                                        animate={ letterAnimation }
                                        custom={ wordIndex + letterIndex + 1 }
                                    >
                                        { letter }
                                    </motion.span>
                                </motion.div>
                            ))
                        }
                        {
                            !reverseDelimeter &&
                            <motion.div
                                className={ style.delimeter }
                                custom={ wordIndex }
                            >
                                <motion.span
                                    animate={ letterAnimation }
                                    custom={ wordIndex + word.length + 1 }
                                >
                                    { "~" }
                                </motion.span>
                            </motion.div>
                        }
                    </motion.div>
                ))
            }
        </React.Fragment>
    );

};
