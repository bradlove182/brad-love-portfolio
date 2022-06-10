
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
        roles,
        description,
        year,
        tags
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
                <div className={ style.tags }>
                    {
                        tags.map((tag) => (
                            <span className={ style.tag } key={ tag }>
                                { tag }
                            </span>
                        ))
                    }
                </div>
                <h2 className={ style.title }>
                    { title }
                </h2>
                <p className={ style.description }>
                    { description }
                </p>
                <div className={ style.content }>
                    <div className={ style.category }>
                        <div className={ style.name }>
                            { "Role" }
                        </div>
                        <ul>
                            {
                                roles.map((role) => (
                                    <li key={ role }>
                                        { role }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={ style.category }>
                        <div className={ style.name }>
                            { "Year" }
                        </div>
                        <p>
                            { year }
                        </p>
                    </div>
                </div>
                <Button text="View" />
            </div>
        </motion.div>
    );

};
