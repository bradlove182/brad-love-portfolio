

export interface Project{
    title: string;
    roles: string[];
    description: string;
    year: number;
    tags: string[];
    link: string;
}

export const projects: Project[] = [
    {
        // eslint-disable-next-line max-len -- bru
        description: "Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.",
        link: "https://apod.bradlove.dev/",
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
        title: "Astronomy Picture of the Day",
        year: 2022
    },
    {
        description: "Vrye Weekblad is a progressive Afrikaans digital newspaper.",
        link: "https://www.vryeweekblad.com/",
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
    },
    {
        description: "HeraldLIVE is a digital newspaper based in Nelson Mandela Bay, South Africa.",
        link: "https://www.heraldlive.co.za/",
        roles: [
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UX Design",
            "UI Design",
            "Development"
        ],
        title: "HeraldLIVE",
        year: 2018
    },
    {
        description: "DispatchLIVE is the digital version for the Daily Dispatch newspaper published in South Africa.",
        link: "https://www.dispatchlive.co.za/",
        roles: [
            "Website Design",
            "Website Development"
        ],
        tags: [
            "UX Design",
            "UI Design",
            "Development"
        ],
        title: "DispatchLIVE",
        year: 2018
    }
];
