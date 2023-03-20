import fs from "fs";
import matter from "gray-matter";

export const getMarkdownData = (file: string) => {
    const fileName = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
};
