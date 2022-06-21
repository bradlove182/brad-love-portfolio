
import React from "react";
import { motion } from "framer-motion";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

export interface CardProps{
    title?: string;
    children: React.ReactNode;
    variants: Variants;
}

export const Card: React.ComponentType<CardProps> = ({
    title,
    children,
    variants
}) => (
    <motion.div className={ style.card } variants={ variants }>
        {
            Boolean(title) &&
            <div className={ style.title }>
                <h2>
                    { title }
                </h2>
            </div>
        }
        <div className={ style.body }>
            { children }
        </div>
    </motion.div>
);
