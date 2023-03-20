import fs from "fs";
import matter from "gray-matter";

export const getArchive = (path: string) => {
    const files = fs.readdirSync(path);

    const archive = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(`${path}/${fileName}`, "utf-8");
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            archive,
        },
    };
};
