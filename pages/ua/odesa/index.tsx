import { cityForms } from "../../../cityForms";
import { getArchive } from "../../../api/getArchive";
import CoworkingArchiveTemplateUa from "../../../templates/CoworkingArchiveTemplateUa";

export async function getStaticProps() {
    return getArchive("coworkings/ua/odesa/");
}

export default function ArchivePage({ archive }: any) {
    return (
        <CoworkingArchiveTemplateUa
            archive={archive}
            cityForms={cityForms.ua.odesa}
            cityLabel="odesa"
        />
    );
}
