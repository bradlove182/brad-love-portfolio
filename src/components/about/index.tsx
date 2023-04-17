"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, Grid, Text, Container } from "@bradlove/design-system";

import { SectionTitle } from "../section-title";
import { Meme } from "../meme";

import style from "./index.module.css";

import type { Variants } from "framer-motion";

const container: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.1,
        },
    },
};

const card: Variants = {
    hidden: {
        opacity: 0,
        y: "100%",
    },
    show: {
        opacity: 1,
        transitionEnd: {
            y: 0,
        },
        y: "0%",
    },
};

export const About: React.ComponentType = () => (
    <Container>
        <Grid as="section" columns={1}>
            <Text as="h2">{"About Me"}</Text>
            <Grid columns={3} gap={5} flow="row" alignItems="stretch">
                <Card elevation={3}>
                    <Card.Header>{"Expertise"}</Card.Header>
                    <Card.Body>
                        <Text>
                            {
                                "I specialise in a perfect blend of user interfaces and modern development."
                            }
                        </Text>
                        <Text>
                            {"With a background in both digital "}
                            <Meme meme="/gifs/designer.gif">{"design"}</Meme>
                            {" and "}
                            <Meme meme="/gifs/developer.gif">
                                {"development"}
                            </Meme>
                            {
                                " I am capable of creating a harmonious relationship between both worlds."
                            }
                        </Text>
                    </Card.Body>
                </Card>
                <Card elevation={3}>
                    <Card.Header>{"Location"}</Card.Header>
                    <Card.Body>
                        <Text>
                            {
                                "I am based in Cape Town, South Africa where I was born and raised."
                            }
                        </Text>
                        <Text>
                            {
                                "Currently under employment as a Front-End Engineer at "
                            }
                            <Meme meme="/gifs/newsteam.gif">
                                <a
                                    href="https://newsteam.io"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {"News Team"}
                                </a>
                            </Meme>
                            {"."}
                        </Text>
                    </Card.Body>
                </Card>
                <Card elevation={3}>
                    <Card.Header>{"After Hours"}</Card.Header>
                    <Card.Body>
                        <Text>
                            {
                                "While taking a break from creating and discovering web experiences, "
                            }
                            {"I can usually be found "}
                            <Meme meme="/gifs/gaming.gif">
                                {"playing games"}
                            </Meme>
                            {", watching "}
                            <Meme meme="/gifs/football.gif">{"football"}</Meme>
                            {" and spending quality time with my "}
                            <Meme meme="/gifs/family.gif">{"family"}</Meme>
                            {"."}
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid>
    </Container>
);
