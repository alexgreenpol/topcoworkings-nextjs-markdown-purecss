import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head";
import { frontmatter } from "../../types";

type CoworkingPageProps = {
    frontmatter: frontmatter;
    content: string;
};

export async function getStaticPaths() {
    const files = fs.readdirSync("coworkings/kyiv");
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: any) {
    const fileName = fs.readFileSync(`coworkings/kyiv/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function CoworkingPage({
    frontmatter,
    content,
}: CoworkingPageProps) {
    const {
        title,
        socialImage,
        metaTitle,
        prices,
        metaDesc,
        galleryImages,
        address,
        hours,
        phone,
        website,
        coworkingName,
    } = frontmatter;

    return (
        <>
            <Head>
                <title>{title} | опис, галерея, ціни, адреса</title>
                <meta name="title" content={metaTitle} />
                <meta name="description" content={metaDesc} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:site_name" content="Topcoworkings.com.ua" />
                <meta
                    property="og:url"
                    content="https://topcoworkings.com.ua/"
                />
                <meta property="og:description" content={metaDesc} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={socialImage} />
            </Head>
            <section className="page">
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <h1>
                                Повна інформація про коворкінг {coworkingName}
                            </h1>
                            <p>{metaDesc}</p>
                            <h3>Галерея</h3>
                            <div className="gallery">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    modules={[Navigation]}
                                    navigation={true}
                                    breakpoints={{
                                        992: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                    {galleryImages.map((image: string) => {
                                        return (
                                            <SwiperSlide key={image}>
                                                <div className="gallery__image">
                                                    <Image
                                                        src={image}
                                                        alt=""
                                                        fill
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                            <div className="prices">
                                <h3>Ціни і тарифи</h3>
                                <ul>
                                    {prices.map((item: string) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </ul>
                            </div>
                            <div className="content">
                                <h3>Опис</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: md().render(content),
                                    }}
                                />
                            </div>
                            <div className="contacts">
                                <h3>Адреса і контакти</h3>
                                <p>Адреса: {address}</p>
                                <p>
                                    Телефон:
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </p>
                                <p>Години роботи: {hours}</p>
                                <p>
                                    Сайт:
                                    <a
                                        href={`https://${website}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {website}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
