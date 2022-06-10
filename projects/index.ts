

export interface Project{
    title: string;
    roles: string[];
    description: string;
    year: number;
    tags: string[];
}

export const projects: Project[] = [
    {
        description: "Vrye Weekblad is a progressive Afrikaans digital newspaper.",
        roles: [
            "Logo Design",
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UX Design",
            "UI Design",
            "Logo Design",
            "Development"
        ],
        title: "Vrye Weekblad",
        year: 2019
    }
];
