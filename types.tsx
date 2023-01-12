export type frontmatter = {
    title: string;
    socialImage: string;
    metaTitle: string;
    prices: string[];
    metaDesc: string;
    galleryImages: string[];
    address: string;
    hours: string;
    phone: string;
    website: string;
    coworkingName: string;
    tags: string[];
    date: string;
};

export type coworkingData = {
    slug: string;
    frontmatter: frontmatter;
};
