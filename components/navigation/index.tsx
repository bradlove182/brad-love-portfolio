import React, {
    useCallback,
    useState
} from "react";
import {
    motion,
    useAnimation
} from "framer-motion";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

const topLine: Variants = {
    close: {
        x1: 6,
        x2: 18,
        y1: 6,
        y2: 18
    },
    open: {
        x1: 3,
        x2: 21,
        y1: 6,
        y2: 6
    }
};

const middleLine: Variants = {
    close: {
        x1: 12,
        x2: 12,
        y1: 12,
        y2: 12
    },
    open: {
        x1: 3,
        x2: 21,
        y1: 12,
        y2: 12
    }
};

const bottomLine: Variants = {
    close: {
        x1: 18,
        x2: 6,
        y1: 6,
        y2: 18
    },
    open: {
        x1: 3,
        x2: 21,
        y1: 18,
        y2: 18
    }
};

export const Navigation: React.ComponentType = () => {

    const controls = useAnimation();
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleShowMenu = useCallback(() => {

        setShowMenu((previous) => {

            if(previous){

                void controls.start("open");

            }else{

                void controls.start("close");

            }

            return !previous;

        });

    }, []);

    return (
        <motion.div className={ style.navigation } onClick={ handleShowMenu }>
            <svg
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.line animate={ controls } initial={ "open" } variants={ topLine } />
                <motion.line animate={ controls } initial={ "open" } variants={ middleLine } />
                <motion.line animate={ controls } initial={ "open" } variants={ bottomLine } />
            </svg>
            {
                showMenu ? "Menu" : undefined
            }
        </motion.div>
    );

};
