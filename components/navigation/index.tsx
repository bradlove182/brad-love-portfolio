import React, {
    useCallback,
    useState
} from "react";
import { motion } from "framer-motion";

import { NavigationMenu } from "./menu";
import style from "./index.module.scss";

import type { Variants } from "framer-motion";
import type { ThemeKey } from "../../themes";

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

const menu: Variants = {
    close: {
        display: "block",
        opacity: 1,
        transformOrigin: "center",
        y: "0%"
    },
    open: {
        opacity: 0,
        transitionEnd: {
            display: "none"
        },
        y: "-5%"
    }
};

export interface NavigationProps{
    theme: ThemeKey;
    onThemeChange: (key: ThemeKey) => void;
}

export const Navigation: React.ComponentType<NavigationProps> = ({
    theme,
    onThemeChange
}) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleShowMenu = useCallback(() => {

        setShowMenu((previous) => !previous);

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
                <motion.line animate={ showMenu ? "close" : "open" } initial={ "open" } variants={ topLine } />
                <motion.line animate={ showMenu ? "close" : "open" } initial={ "open" } variants={ middleLine } />
                <motion.line animate={ showMenu ? "close" : "open" } initial={ "open" } variants={ bottomLine } />
            </svg>
            <motion.div
                animate={ showMenu ? "close" : "open" }
                className={ style.wrapper }
                initial={ "open" }
                variants={ menu }
            >
                <NavigationMenu onThemeChange={ onThemeChange } theme={ theme } />
            </motion.div>
        </motion.div>
    );

};
