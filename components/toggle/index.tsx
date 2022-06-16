
import React, {
    useCallback,
    useEffect,
    useState
} from "react";
import { motion } from "framer-motion";

import style from "./index.module.scss";

export interface ToggleProps{
    onChange: (state: boolean) => void;
    value: boolean;
    label: string;
}

export const Toggle: React.ComponentType<ToggleProps> = ({
    label,
    onChange,
    value
}) => {

    const [active, setActive] = useState<boolean>(value);

    const handleOnClick = useCallback(() => {

        setActive((previous) => {

            const newState = !previous;
            onChange(newState);
            return newState;

        });

    }, [onChange]);

    useEffect(() => {

        setActive((previous) => value === previous ? previous : value);

    }, [value]);

    return (
        <div className={ style.toggle } onClick={ handleOnClick }>
            <label className={ style.label }>
                { label }
            </label>
            <motion.div
                className={ [
                    style.track,
                    active ? style.active : undefined
                ].filter(Boolean).join(" ") }
            >
                <motion.span className={ style.knob } layout />
            </motion.div>
        </div>
    );
};
