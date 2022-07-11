interface Project {
    title: string;
    type: string;
    technologies: string;
    description: string[];
}

export const projectsData: Project[] = [
    {
        title: "Batch-Deletion",
        type: " - CLI Tool",
        technologies: "JavaScript/Python",
        description: [
            "A Command line based tool to delete multiple files in a directory.",
            "Recursively deletes files in a directory based on a given filetype.",
            "Prints tree structure of deleted files as well as the time taken."
        ]
    },
    {
        title: "Sorting-Visualizer",
        type: " - WEB App",
        technologies: "ReactJs/TypeScript/Redux",
        description: [
            "A web app to visualise the sorting algorithms(5).",
            "A clean and responsive user interface.",
            "Makes use of Redux for state management and TyeScript for type checking."
        ]
    },
    {
        title: "Text-Generator",
        type: " - NLP",
        technologies: "Python",
        description: [
            "A Natural Language Processing tool to generate text.",
            "The script has a dropdown menu to select the generation algorithm.",
            "Predicts the next word based on the previous word using a Markov chain."
        ]
    }
];