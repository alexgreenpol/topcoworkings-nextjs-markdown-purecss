export type frontmatter = {
    socialImage: string;
    prices: string[];
    metaDesc: string;
    galleryImages: string[];
    address: string;
    hours: string;
    phone: string;
    website: string;
    coworkingName: string;
    faq: faqData[];
    date: {
        publishDate: string;
        modifyDate: string;
    };
    author: {
        name: string;
        url: string;
    };
};

export type coworkingData = {
    slug: string;
    frontmatter: frontmatter;
};

export type faqData = {
    question: string;
    answer: string;
};

export type coworkingPageProps = {
    frontmatter: frontmatter;
    content: string;
};
