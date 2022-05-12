
export interface Route {
    name: string;
    path: string;
}

export const routes: Route[] = [
    {
        name: "Bradley Love",
        path: "/"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    }
];
