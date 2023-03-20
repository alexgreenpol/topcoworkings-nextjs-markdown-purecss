import { cityForms } from "../../../cityForms";
import { getArchive } from "../../../api/getArchive";
import CoworkingArchiveTemplateUa from "../../../templates/CoworkingArchiveTemplateUa";

export async function getStaticProps() {
    return getArchive("coworkings/ua/kharkiv/");
}

export default function ArchivePage({ archive }: any) {
    return (
        <CoworkingArchiveTemplateUa
            archive={archive}
            cityForms={cityForms.ua.kharkiv}
            cityLabel="kharkiv"
        />
    );
}
