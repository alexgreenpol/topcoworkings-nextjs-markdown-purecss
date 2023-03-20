import CoworkingPageTemplateUa from "../../../templates/CoworkingPageTemplateUa";
import { GetStaticProps } from "next";
import { cityForms } from "../../../cityForms";
import { getPaths } from "../../../api/getPaths";
import { getMarkdownData } from "../../../api/getMarkdownData";
import { coworkingPageProps } from "../../../types";

export async function getStaticPaths() {
    return getPaths("coworkings/ua/dnipro");
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context?.params?.slug;

    return getMarkdownData(`coworkings/ua/dnipro/${slug}.md`);
};

export default function CoworkingPage(props: coworkingPageProps) {
    const { frontmatter, content } = props;

    return (
        <CoworkingPageTemplateUa
            frontmatter={frontmatter}
            content={content}
            city={cityForms.ua.dnipro}
        />
    );
}
