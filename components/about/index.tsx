
import React from "react";
import { motion } from "framer-motion";

import { SectionTitle } from "../section-title";

import { AboutCard } from "./card";
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

const card: Variants = {
    hidden: {
        opacity: 0,
        y: "100%"
    },
    show: {
        opacity: 1,
        y: "0%"
    }
};

export const About: React.ComponentType = () => (
    <motion.div
        className={ style.about }
        id="about"
    >
        <SectionTitle text="About Me" />
        <motion.div
            className={ style.cards }
            initial={ "hidden" }
            variants={ container }
            viewport={ { once: true } }
            whileInView={ "show" }
        >
            <AboutCard title="Location" variants={ card }>
                <p>
                    { "I am born and raised in Cape Town, South Africa." }
                </p>
                <p>
                    { "Currently at News Team." }
                </p>
            </AboutCard>
            <AboutCard title="Hobbies" variants={ card }>
                <p>
                    { "While taking a break from creating and discovering web experiences, I can usually be found playing games or watching football." }
                </p>
            </AboutCard>
            <AboutCard title="Background" variants={ card }>
                <p>
                    { "A blend of UI/UX and modern development." }
                </p>
                <p>
                    { "A background in both design and development, allows me to be very sensitive to visual details, animation and typography." }
                </p>
            </AboutCard>
        </motion.div>
    </motion.div>
);

