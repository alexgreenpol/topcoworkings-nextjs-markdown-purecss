import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { coworkingData } from "../../types";

export async function getStaticProps() {
    const files = fs.readdirSync("coworkings/lviv");

    const coworkings = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(
            `coworkings/lviv/${fileName}`,
            "utf-8"
        );
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            coworkings,
        },
    };
}

export default function Lviv({ coworkings }: any) {
    return (
        <>
            <Head>
                <title>
                    Коворкінги Львова 2023 (фото + ціни + тарифи) |
                    Topcoworking.com.ua
                </title>
                <meta
                    name="title"
                    content="Коворкінги Львова 2023 (фото + ціни + тарифи)"
                />
                <meta
                    name="description"
                    content="Огляд всіх коворкінгів Львова з фотографіями, описом і цінми."
                />
                <meta
                    property="og:title"
                    content="Коворкінги Львова 2023 (фото + ціни + тарифи)"
                />
                <meta property="og:site_name" content="Topcoworkings.com.ua" />
                <meta
                    property="og:url"
                    content="https://topcoworkings.com.ua/"
                />
                <meta
                    property="og:description"
                    content="Огляд всіх коворкінгів Львова з фотографіями, описом і цінами."
                />
                <meta property="og:type" content="article" />
            </Head>
            <section className="page">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <h1>
                                Огляд всіх коворкінгів Львова 2023 (фото + ціни
                                + тарифи)
                            </h1>
                            {coworkings.map((item: coworkingData) => {
                                const { socialImage, metaTitle, metaDesc } =
                                    item.frontmatter;
                                const { slug } = item;

                                return (
                                    <div className="coworking" key={slug}>
                                        <div className="coworking__image">
                                            <Link href={`/lviv/${slug}`}>
                                                <Image
                                                    src={socialImage}
                                                    alt=""
                                                    fill
                                                />
                                            </Link>
                                        </div>
                                        <div className="coworking__content">
                                            <h3>{metaTitle}</h3>
                                            <p>{metaDesc}</p>
                                            <Link href={`/lviv/${slug}`}>
                                                Подивитись повну інформацію
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
