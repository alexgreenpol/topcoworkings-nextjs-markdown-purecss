import Link from "next/link";

type Crumbs = {
    path: string;
    label: string;
};

type BreadcrumbsProps = {
    crumbs: Crumbs[];
};

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
    return (
        <div className="breadcrumbs">
            <ol
                itemScope
                itemType="https://schema.org/BreadcrumbList"
                className="breadcrumbs-list"
            >
                {crumbs.map((item, index) => {
                    return (
                        <li
                            className="breadcrumbs-list__item"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                            key={item.label}
                        >
                            <Link itemProp="item" href={item.path}>
                                <span itemProp="name">{item.label}</span>
                            </Link>
                            <meta
                                itemProp="position"
                                content={`${index + 1}`}
                            />
                            {crumbs.length - 1 !== index ? (
                                <span className="arrow">›</span>
                            ) : undefined}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
