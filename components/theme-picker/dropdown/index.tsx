
import React, {
    useCallback,
    useEffect,
    useState
} from "react";
import { motion } from "framer-motion";

import { themes } from "../../../themes";
import { Toggle } from "../../toggle";

import style from "./index.module.scss";

import type { ThemeKey } from "../../../themes";
import type { Variants } from "framer-motion";
import type { ThemePickerProps } from "..";

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const child: Variants = {
    hidden: {
        opacity: 0,
        y: "200%"
    },
    show: {
        opacity: 1,
        y: "0%"
    }
};

export const ThemePickerDropdown: React.ComponentType<ThemePickerProps> = ({
    onThemeChange,
    currentTheme
}) => {

    const [auto, setAuto] = useState<boolean>(true);

    const handleChangeAuto = useCallback((state: boolean) => {

        setAuto(state);

    }, []);

    const changeTheme = useCallback((key: ThemeKey) => () => {
        onThemeChange(key);
        setAuto(false);
    }, []);

    useEffect(() => {

        const themeKeys = Object.keys(themes) as ThemeKey[];
        const currentIndex = themeKeys.indexOf(currentTheme);
        const timer = setInterval(() => {

            if(auto){

                const nextIndex = currentIndex + 1;
                onThemeChange(nextIndex >= themeKeys.length ? themeKeys[0] : themeKeys[nextIndex]);

            }

        }, 10_000);

        return () => {
            clearInterval(timer);
        };

    }, [currentTheme, auto, onThemeChange]);

    return (
        <motion.div
            className={ style.dropdown }
            initial={ "hidden" }
            variants={ container }
            whileInView={ "show" }
        >
            <div className={ style.wrapper }>
                {
                    Object.keys(themes).map((key) => (
                        <motion.span
                            className={ [
                                currentTheme === key ? style.active : undefined,
                                style.blob
                            ].filter(Boolean).join(" ") }
                            key={ key }
                            onClick={ changeTheme(key as ThemeKey) }
                            style={ {
                                backgroundColor: themes[key as ThemeKey].background
                            } }
                            variants={ child }
                        >
                            <span />
                        </motion.span>
                    ))
                }
            </div>
            <motion.div variants={ child }>
                <Toggle label="Auto Switch" onChange={ handleChangeAuto } value={ auto } />
            </motion.div>
        </motion.div>
    );

};

