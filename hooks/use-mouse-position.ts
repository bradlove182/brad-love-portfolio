
import {
    useEffect,
    useRef
} from "react";
import { Vector3 } from "three";

export const useMousePosition = (): Vector3 => {

    const mouseVector = useRef<Vector3>(new Vector3());

    useEffect(() => {

        const mouseHandler = (event: MouseEvent): void => {

            const mouseX = event.clientX / window.innerWidth * 2 - 1;
            const mouseY = event.clientY / window.innerHeight * 2 - 1;

            mouseVector.current.set(mouseX, -mouseY, 0);

        };

        window.addEventListener("mousemove", mouseHandler);

        return () => {
            window.removeEventListener("mousemove", mouseHandler);
        };

    }, []);

    return mouseVector.current;

};
