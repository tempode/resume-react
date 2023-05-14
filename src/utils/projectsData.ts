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
             // more points can be added show it in a bullet points.
            "CLI tool that deletes multiple files in a directory based on the file type."
            // "CLI tool that deletes recursively deletes multiple files based on the file type. Generates a tree structure of deleted files and execution time for better user experience."
        ]
    },
    {
        title: "Sorting-Visualizer",
        type: " - WEB App",
        technologies: "ReactJs/TypeScript/Redux",
        description: [
            "Web application that visualizes sorting algorithms. User-friendly, responsive, and interactive interface."
        ]
    },
    {
        title: "Text-Generator",
        type: " - NLP",
        technologies: "Python",
        description: [
            "Natural Language Processing tool that generates text by predicting the next word based on the previous word, using a Markov chain algorithm."
        ]
    }
];