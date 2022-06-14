
import React from "react";
import { motion } from "framer-motion";

import { Button } from "../../button";

import style from "./index.module.scss";

import type { Variants } from "framer-motion";
import type { Project } from "../../../projects";

const card: Variants = {
    hidden: {
        opacity: 0,
        y: "30%"
    },
    visible: {
        opacity: 1,
        y: "0%"
    }
};

export interface ProjectCardProps{
    project: Project;
}

export const ProjectCard: React.ComponentType<ProjectCardProps> = ({
    project
}) => {

    const {
        title,
        description,
        tags,
        link
    } = project;

    return (
        <motion.div
            className={ style.card }
            initial="hidden"
            variants={ card }
            viewport={ { once: true } }
            whileInView="visible"
        >
            <div className={ style.wrapper }>
                <div className={ style.content }>
                    <h2 className={ style.title }>
                        { title }
                    </h2>
                    <p className={ style.description }>
                        { description }
                    </p>
                    <div className={ style.tags }>
                        {
                            tags.map((tag) => (
                                <span className={ style.tag } key={ tag }>
                                    { tag }
                                </span>
                            ))
                        }
                    </div>
                </div>
                <a href={ link } rel="noreferrer" target="_blank">
                    <Button>
                        { "View" }
                        <svg
                            fill="none"
                            height="20"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                    </Button>
                </a>
            </div>
        </motion.div>
    );

};
