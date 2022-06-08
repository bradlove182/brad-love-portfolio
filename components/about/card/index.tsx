import React from "react";
import { motion } from "framer-motion";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";

export interface AboutCardProps{
    title: string;
    children: React.ReactNode;
    variants: Variants;
}

export const AboutCard: React.ComponentType<AboutCardProps> = ({
    title,
    children,
    variants
}) => (
    <motion.div className={ style.card } variants={ variants }>
        <div className={ style.title }>
            <h2>
                { title }
            </h2>
        </div>
        <div className={ style.body }>
            { children }
        </div>
    </motion.div>
);
