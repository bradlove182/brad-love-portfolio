
import {
    useEffect,
    useState
} from "react";

interface MousePosition{
    x: number;
    y: number;
}

export const useMousePosition = (): [MousePosition["x"], MousePosition["y"]] => {

    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0
    });

    useEffect(() => {

        const mouseHandler = (event: MouseEvent): void => {

            setMousePosition({
                x: event.clientX,
                y: event.clientY
            });

        };

        window.addEventListener("mousemove", mouseHandler);

        return () => {
            window.removeEventListener("mousemove", mouseHandler);
        };

    }, []);

    return [mousePosition.x, mousePosition.y];

};
