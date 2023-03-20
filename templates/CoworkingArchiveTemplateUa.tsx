import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading/Heading";
import getCurrentYear from "../helpers/getCurrentYear";
import { coworkingData } from "../types";

export default function CoworkingArchiveTemplateUa({
    archive,
    cityForms,
    cityLabel,
}: any) {
    return (
        <>
            <Head>
                <title>
                    {`Коворкінги ${
                        cityForms.two
                    } ${getCurrentYear()} (фото + ціни +
                    тарифи) | topcoworking.com.ua`}
                </title>
                <meta
                    name="title"
                    content={`Коворкінги ${
                        cityForms.two
                    } ${getCurrentYear()} (фото + ціни + тарифи)`}
                />
                <meta
                    name="description"
                    content={`Коворкінги ${cityForms.two} з фотографіями, описом та цінами. Найкращий коворкінг у ${cityForms.three}. Зняти офіс у ${cityForms.three}. Ціни на офіс у ${cityForms.three}.`}
                />
                <meta
                    property="og:title"
                    content={`Коворкінги ${
                        cityForms.two
                    } ${getCurrentYear()} (фото + ціни + тарифи)`}
                />
                <meta
                    property="og:description"
                    content={`Коворкінги ${cityForms.two} з фотографіями, описом та цінами. Найкращий коворкінг у ${cityForms.three}. Зняти офіс у ${cityForms.three}. Ціни на офіс у ${cityForms.three}.`}
                />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="topcoworking.com.ua" />
                <meta
                    property="og:url"
                    content="https://topcoworking.com.ua/"
                />
            </Head>
            <section className="page">
                <Heading>
                    <h1>Коворкінги {cityForms.two} (фото + ціни + тарифи)</h1>
                </Heading>
                <div className="container">
                    <div className="pure-g">
                        <div
                            className="pure-u-1"
                            itemScope
                            itemType="https://schema.org/ItemList"
                        >
                            {archive.map(
                                (item: coworkingData, index: number) => {
                                    const {
                                        socialImage,
                                        address,
                                        hours,
                                        coworkingName,
                                        metaDesc,
                                    } = item.frontmatter;
                                    const { slug } = item;

                                    return (
                                        <div
                                            className="coworking"
                                            key={slug}
                                            itemProp="itemListElement"
                                            itemScope
                                            itemType="https://schema.org/NewsArticle"
                                        >
                                            <div className="coworking__image">
                                                <Link
                                                    aria-label={`Перейти на сторінку - ${coworkingName}`}
                                                    href={`/ua/${cityLabel}/${slug}`}
                                                    itemProp="url"
                                                >
                                                    <Image
                                                        src={socialImage}
                                                        alt=""
                                                        fill
                                                        sizes="100vw"
                                                        quality="50"
                                                        priority={index === 0}
                                                        itemProp="image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="coworking__content">
                                                <Link
                                                    aria-label={`Перейти на сторінку - ${coworkingName}`}
                                                    href={`/ua/${cityLabel}/${slug}`}
                                                    itemProp="url"
                                                >
                                                    <h3 itemProp="headline">
                                                        {coworkingName}
                                                    </h3>
                                                </Link>
                                                <p itemProp="description">
                                                    {metaDesc}
                                                </p>
                                                <div className="meta">
                                                    <p className="label">
                                                        {address}
                                                    </p>
                                                    <p className="label">
                                                        {hours}
                                                    </p>
                                                </div>
                                                <Link
                                                    aria-label={`Перейти на сторінку - ${coworkingName}`}
                                                    className="btn btn--primary"
                                                    href={`/ua/${cityLabel}/${slug}`}
                                                    itemProp="url"
                                                >
                                                    Дивитись
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
