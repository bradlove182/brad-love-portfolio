
import React, {
    useEffect,
    useMemo
} from "react";
import {
    motion,
    useAnimation
} from "framer-motion";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

export interface LoadingProps{
    loaded: boolean;
    children: React.ReactNode;
}

export const Loading: React.ComponentType<LoadingProps> = ({
    children,
    loaded
}) => {

    const controls = useAnimation();

    const variant: Variants = useMemo(() => ({
        done: {
            opacity: [1, 0],
            transition: {
                delay: 1
            }
        }
    }), []);

    useEffect(() => {

        void controls.start("done");

    }, [loaded]);

    return (
        <motion.div className={ [style.app, loaded ? style.loaded : undefined].filter(Boolean).join(" ") }>
            <motion.div animate={ controls } className={ style.screen } variants={ variant }>
                <motion.span>
                    { "Loading?" }
                </motion.span>
            </motion.div>
            { children }
        </motion.div>
    );

};
