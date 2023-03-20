import fs from "fs";

export const getPaths = (dir: string) => {
    const files = fs.readdirSync(dir);

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};
