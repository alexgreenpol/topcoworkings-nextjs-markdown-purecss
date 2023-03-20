import CoworkingPageTemplateRu from "../../../templates/CoworkingPageTemplateRu";
import { GetStaticProps } from "next";
import { cityForms } from "../../../cityForms";
import { getPaths } from "../../../api/getPaths";
import { getMarkdownData } from "../../../api/getMarkdownData";
import { coworkingPageProps } from "../../../types";

export async function getStaticPaths() {
    return getPaths("coworkings/ru/kyiv");
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context?.params?.slug;

    return getMarkdownData(`coworkings/ru/kyiv/${slug}.md`);
};

export default function CoworkingPage(props: coworkingPageProps) {
    const { frontmatter, content } = props;

    return (
        <CoworkingPageTemplateRu
            frontmatter={frontmatter}
            content={content}
            city={cityForms.ru.kyiv}
        />
    );
}
