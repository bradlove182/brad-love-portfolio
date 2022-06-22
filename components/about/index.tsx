
import React from "react";
import { motion } from "framer-motion";

import { SectionTitle } from "../section-title";
import { Card } from "../card";
import { Meme } from "../meme";

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
        transitionEnd: {
            y: 0
        },
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
            <Card title="Expertise" variants={ card }>
                <p>
                    { "I specialise in a perfect blend of user interfaces and modern development." }
                </p>
                <p>
                    { "With a background in both digital " }
                    <Meme meme="/gifs/designer.gif">
                        { "design" }
                    </Meme>
                    { " and " }
                    <Meme meme="/gifs/developer.gif">
                        { "development" }
                    </Meme>
                    { " I am capable of creating a harmonious relationship between both worlds." }
                </p>
            </Card>
            <Card title="Location" variants={ card }>
                <p>
                    { "I am based in Cape Town, South Africa where I was born and raised." }
                </p>
                <p>
                    { "Currently under employment as a Front-End Engineer at " }
                    <Meme meme="/gifs/newsteam.gif">
                        <a href="https://newsteam.io" rel="noreferrer" target="_blank">
                            {"News Team"}
                        </a>
                    </Meme>
                    {"."}
                </p>
            </Card>
            <Card title="After Hours" variants={ card }>
                <p>
                    { "While taking a break from creating and discovering web experiences, " }
                    { "I can usually be found " }
                    <Meme meme="/gifs/gaming.gif">
                        { "playing games" }
                    </Meme>
                    { ", watching " }
                    <Meme meme="/gifs/football.gif">
                        { "football" }
                    </Meme>
                    { " and spending quality time with my " }
                    <Meme meme="/gifs/family.gif">
                        { "family" }
                    </Meme>
                    {"."}
                </p>
            </Card>
        </motion.div>
    </motion.div>
);

