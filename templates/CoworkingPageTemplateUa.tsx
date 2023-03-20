import Head from "next/head";
import Image from "next/image";
import md from "markdown-it";
import { frontmatter } from "../types";
import Heading from "../components/Heading/Heading";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

type CoworkingPageTemplateProps = {
    frontmatter: frontmatter;
    content: string;
    city: {
        one: string;
        two: string;
        three: string;
    };
};

export default function CoworkingPageTemplateUa({
    frontmatter,
    content,
    city,
}: CoworkingPageTemplateProps) {
    const {
        socialImage,
        prices,
        metaDesc,
        galleryImages,
        address,
        hours,
        phone,
        website,
        coworkingName,
        faq,
        date,
        author,
    } = frontmatter;

    return (
        <>
            <Head>
                <title>
                    {`Коворкінг ${coworkingName} в ${city.three} | опис, галерея,
                    ціни, адреса`}
                </title>
                <meta
                    name="title"
                    content={`Коворкінг ${coworkingName} в ${city.three} | опис, галерея, ціни, адреса`}
                />
                <meta name="description" content={metaDesc} />

                <meta
                    property="og:title"
                    content={`Коворкінг ${coworkingName} в ${city.three} | опис, галерея, ціни, адреса`}
                />
                <meta property="og:description" content={metaDesc} />
                <meta property="og:type" content="article" />
                <meta
                    property="og:image"
                    content={socialImage}
                    itemProp="image"
                />
                <meta property="og:site_name" content="topcoworking.com.ua" />
                <meta
                    property="og:url"
                    content="https://topcoworking.com.ua/"
                />
            </Head>
            <section
                className="page"
                itemScope
                itemType="https://schema.org/NewsArticle"
            >
                <Heading customBgImage={socialImage}>
                    <h1 itemProp="headline">Коворкінг {coworkingName}</h1>
                    <p itemProp="description">{metaDesc}</p>
                </Heading>
                <div className="metadata">
                    <div className="metadata__content">
                        <span className="metadata__author">
                            Автор:{" "}
                            <span
                                itemProp="author"
                                itemScope
                                itemType="https://schema.org/Person"
                            >
                                <a
                                    itemProp="url"
                                    href={author.url}
                                    target="_blank"
                                >
                                    <span itemProp="name">{author.name}</span>
                                </a>
                            </span>
                        </span>
                        {" | "}
                        <span className="metadata__date-publish">
                            <time
                                dateTime={date.publishDate}
                                itemProp="datePublished"
                            >
                                Додано:{" "}
                                {new Date(date.publishDate).toLocaleString()}
                            </time>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <div className="page__image">
                                <div className="social-image">
                                    <Image
                                        src={socialImage}
                                        alt=""
                                        quality="50"
                                        fill
                                        sizes="100vw"
                                        itemProp="image"
                                    />
                                </div>
                            </div>
                            <div className="sector content">
                                <h2>Докладно про {coworkingName}</h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: md().render(content),
                                    }}
                                />
                            </div>

                            <div className="sector prices">
                                <h3>Ціни і тарифи</h3>
                                <div itemProp="priceRange">
                                    {prices.map((item: string) => {
                                        return <p key={item}>{item}</p>;
                                    })}
                                </div>
                            </div>

                            <div className="sector gallery">
                                <h3>Галерея</h3>
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
                                                        sizes="100vw"
                                                        quality="50"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>

                            <div className="sector contacts">
                                <h3>Адреса і контакти</h3>
                                <p>Адреса: {address}</p>
                                <p>
                                    Телефон:{" "}
                                    <a href={`tel:${phone}`}>{phone}</a>
                                </p>
                                <p>Час роботи: {hours}</p>
                                <p>
                                    Сайт:{" "}
                                    <a
                                        href={`https://${website}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {website}
                                    </a>
                                </p>
                            </div>

                            {faq && (
                                <div
                                    className="sector faq"
                                    itemScope
                                    itemType="https://schema.org/FAQPage"
                                >
                                    <h3>Відповіді на запитання</h3>
                                    <Accordion>
                                        {faq.map((item) => {
                                            return (
                                                <AccordionItem
                                                    key={item.question}
                                                    itemProp="mainEntity"
                                                    itemScope
                                                    itemType="https://schema.org/Question"
                                                >
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton itemProp="name">
                                                            {item.question}
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel
                                                        itemScope
                                                        itemProp="acceptedAnswer"
                                                        itemType="https://schema.org/Answer"
                                                    >
                                                        <p itemProp="text">
                                                            {item.answer}
                                                        </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
