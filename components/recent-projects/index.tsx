
import React from "react";
import { motion } from "framer-motion";

import { SectionTitle } from "../section-title";
import { projects } from "../../projects";

import { ProjectCard } from "./card";
import style from "./index.module.scss";

export const RecentProjects: React.ComponentType = () => (
    <motion.div className={ style.recent } id="projects">
        <SectionTitle text="Projects" />
        {
            projects.map((project) => <ProjectCard key={ project.title } project={ project } />)
        }
    </motion.div>
);

