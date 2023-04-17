"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@bradlove/design-system";

import style from "./index.module.css";

export const SiteTitle: React.ComponentType = () => (
    <span className={style.title}>
        <Link href="/">
            <Logo />
        </Link>
    </span>
);
