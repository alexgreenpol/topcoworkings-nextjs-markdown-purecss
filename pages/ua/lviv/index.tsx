import { cityForms } from "../../../cityForms";
import { getArchive } from "../../../api/getArchive";
import CoworkingArchiveTemplateUa from "../../../templates/CoworkingArchiveTemplateUa";

export async function getStaticProps() {
    return getArchive("coworkings/ua/lviv/");
}

export default function ArchivePage({ archive }: any) {
    return (
        <CoworkingArchiveTemplateUa
            archive={archive}
            cityForms={cityForms.ua.lviv}
            cityLabel="lviv"
        />
    );
}
