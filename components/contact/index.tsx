import React from "react";
import { motion } from "framer-motion";

import { SectionTitle } from "../section-title";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";


const container: Variants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.1
        }
    }
};

const social: Variants = {
    hidden: {
        opacity: 0,
        y: "100%"
    },
    show: {
        opacity: 1,
        y: "0%"
    }
};

export const Contact: React.ComponentType = () => (
    <motion.div className={ style.contact } id="contact">
        <SectionTitle text="Contact" />
        <motion.div
            className={ style.socials }
            initial={ "hidden" }
            variants={ container }
            viewport={ { once: true } }
            whileInView={ "show" }
        >
            <motion.div className={ style.social } variants={ social }>
                <a
                    href="mailto:brad@bradlove.co.za"
                >

                    <svg
                        fill="none"
                        height="48"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </a>
            </motion.div>
            <motion.div className={ style.social } variants={ social }>
                <a
                    href="https://github.com/bradlove182"
                    rel="noreferrer"
                    target="_blank"
                >
                    <svg
                        fill="none"
                        height="48"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            // eslint-disable-next-line max-len -- SVG path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        />
                    </svg>
                </a>
            </motion.div>
            <motion.div className={ style.social } variants={ social }>
                <a
                    href="https://www.linkedin.com/in/bradley-love-000252120/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <svg
                        fill="none"
                        height="48"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect height="12" width="4" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
            </motion.div>
        </motion.div>
    </motion.div>
);

