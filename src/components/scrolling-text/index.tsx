"use client";

import React from "react";

import { ScrollingTextWord } from "./word";
import style from "./index.module.css";

export const ScrollingText: React.ComponentType = () => (
    <div className={style.container}>
        <div className={style.marquee}>
            <div className={style.track}>
                <ScrollingTextWord text="Creative" />
            </div>
            <div className={style.track}>
                <ScrollingTextWord reverseDelimeter text="Developer" />
            </div>
        </div>
    </div>
);
