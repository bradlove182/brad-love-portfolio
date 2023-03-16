"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";

import { useStore } from "../../store";

import { ThemePickerDropdown } from "./dropdown";
import style from "./index.module.css";

import type { Variants } from "framer-motion";

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const child: Variants = {
    hidden: {
        opacity: 0,
        y: "200%",
    },
    show: {
        opacity: 1,
        y: "0%",
    },
};

const menu: Variants = {
    close: {
        display: "block",
        opacity: 1,
        y: "0%",
    },
    open: {
        opacity: 0,
        transitionEnd: {
            display: "none",
        },
        y: "-5%",
    },
};

const leftLine: Variants = {
    close: {
        x1: 6,
        x2: 18,
        y1: 6,
        y2: 18,
    },
    open: {
        x1: 12,
        x2: 12,
        y1: 3,
        y2: 3,
    },
};

const middleLine: Variants = {
    close: {
        x1: 12,
        x2: 12,
        y1: 12,
        y2: 12,
    },
    open: {
        x1: 12,
        x2: 12,
        y1: 12,
        y2: 12,
    },
};

const rightLine: Variants = {
    close: {
        x1: 18,
        x2: 6,
        y1: 6,
        y2: 18,
    },
    open: {
        x1: 12,
        x2: 12,
        y1: 21,
        y2: 21,
    },
};

export const ThemePicker: React.ComponentType = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const theme = useStore((state) => state.theme);

    const handleShowDropdown = useCallback(() => {
        setShowDropdown((previous) => !previous);
    }, []);

    return (
        <motion.div
            animate={"show"}
            className={style.theme}
            initial={"hidden"}
            variants={container}
        >
            <div className={style.button} onClick={handleShowDropdown}>
                <motion.span
                    className={style.blob}
                    style={{
                        backgroundColor: theme.background,
                    }}
                    variants={child}
                />
                <motion.svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    variants={child}
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.line
                        animate={showDropdown ? "close" : "open"}
                        initial={"open"}
                        variants={leftLine}
                    />
                    <motion.line
                        animate={showDropdown ? "close" : "open"}
                        initial={"open"}
                        variants={middleLine}
                    />
                    <motion.line
                        animate={showDropdown ? "close" : "open"}
                        initial={"open"}
                        variants={rightLine}
                    />
                </motion.svg>
            </div>
            <motion.div
                animate={showDropdown ? "close" : "open"}
                className={style.wrapper}
                initial={"open"}
                variants={menu}
            >
                <ThemePickerDropdown />
            </motion.div>
        </motion.div>
    );
};
