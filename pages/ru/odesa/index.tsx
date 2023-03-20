import { cityForms } from "../../../cityForms";
import { getArchive } from "../../../api/getArchive";
import CoworkingArchiveTemplateRu from "../../../templates/CoworkingArchiveTemplateRu";

export async function getStaticProps() {
    return getArchive("coworkings/ru/odesa/");
}

export default function ArchivePage({ archive }: any) {
    return (
        <CoworkingArchiveTemplateRu
            archive={archive}
            cityForms={cityForms.ru.odesa}
            cityLabel="odesa"
        />
    );
}
