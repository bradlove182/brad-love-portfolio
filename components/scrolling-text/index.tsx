
import React from "react";

import { ScrollingTextWord } from "./word";
import style from "./index.module.scss";

export const ScrollingText: React.ComponentType = () => (
    <div className={ style.container }>
        <div className={ style.marquee }>
            <div className={ style.track }>
                <ScrollingTextWord word="Creative" />
            </div>
            <div className={ style.track }>
                <ScrollingTextWord reverseDelimeter word="Developer" />
            </div>
        </div>
    </div>
);
