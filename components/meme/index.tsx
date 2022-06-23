
import React, {
    useCallback,
    useState
} from "react";

import { useMousePosition } from "../../hooks/use-mouse-position";

import style from "./index.module.scss";

const OFFSET = 20;

export interface MemeProps{
    meme: string;
    children: React.ReactNode;
}

export const Meme: React.ComponentType<MemeProps> = ({
    meme,
    children
}) => {

    const [x, y] = useMousePosition();
    const [showImage, setShowImage] = useState<boolean>(false);

    const mouseEnter = useCallback(() => {

        setShowImage(true);

    }, []);

    const mouseLeave = useCallback(() => {

        setShowImage(false);

    }, []);

    return (
        <span className={ style.meme } onMouseEnter={ mouseEnter } onMouseLeave={ mouseLeave }>
            { children }
            {
                // eslint-disable-next-line @next/next/no-img-element -- no
                showImage ? <img alt={ meme } src={ meme } style={ { transform: `translate(${ x - 250 / 2 }px, ${ y + OFFSET }px)` } } width="250px" /> : undefined
            }
        </span>
    );

};

