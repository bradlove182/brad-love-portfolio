import React from "react";
import { motion } from "framer-motion";

import { SectionTitle } from "../section-title";

import style from "./index.module.scss";

export const Contact: React.ComponentType = () => (
    <motion.div className={ style.contact } id="contact">
        <SectionTitle text="Contact" />
    </motion.div>
);

