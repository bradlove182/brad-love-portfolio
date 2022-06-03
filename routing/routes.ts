
export interface Route{
    name: string;
    path: string;
}

export const routes: Route[] = [
    {
        name: "Bradley Love",
        path: "/"
    },
    {
        name: "About",
        path: "/#about"
    },
    {
        name: "Projects",
        path: "/#projects"
    },
    {
        name: "Contact",
        path: "/#contact"
    }
];
