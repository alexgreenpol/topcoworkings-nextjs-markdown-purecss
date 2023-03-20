exports.id = 864;
exports.ids = [864];
exports.modules = {

/***/ 4559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getMarkdownData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);


const getMarkdownData = (file)=>{
    const fileName = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file, "utf-8");
    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    };
};


/***/ }),

/***/ 303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getPaths)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

const getPaths = (dir)=>{
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dir);
    const paths = files.map((fileName)=>({
            params: {
                slug: fileName.replace(".md", "")
            }
        }));
    return {
        paths,
        fallback: false
    };
};


/***/ }),

/***/ 5809:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoworkingPageTemplateRu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9653);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5224);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3282);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7600);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__]);
([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function CoworkingPageTemplateRu({ frontmatter , content , city  }) {
    const { socialImage , prices , metaDesc , galleryImages , address , hours , phone , website , coworkingName , faq , date , author  } = frontmatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Коворкинг ${coworkingName} в ${city.three} | описание,
                    галерея, цены, адрес`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: `Коворкинг ${coworkingName} в ${city.three} | описание, галерея, цены, адрес`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: metaDesc
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `Коворкинг ${coworkingName} в ${city.three} | описание, галерея, цены, адрес`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: metaDesc
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: socialImage,
                        itemProp: "image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:site_name",
                        content: "topcoworking.com.ua"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://topcoworking.com.ua/"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "page",
                itemScope: true,
                itemType: "https://schema.org/NewsArticle",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        customBgImage: socialImage,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                itemProp: "headline",
                                children: [
                                    "Коворкинг ",
                                    coworkingName
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                itemProp: "description",
                                children: metaDesc
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "metadata",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "metadata__content",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "metadata__author",
                                    children: [
                                        "Автор:",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            itemProp: "author",
                                            itemScope: true,
                                            itemType: "https://schema.org/Person",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                itemProp: "url",
                                                href: author.url,
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    itemProp: "name",
                                                    children: author.name
                                                })
                                            })
                                        })
                                    ]
                                }),
                                " | ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "metadata__date-publish",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("time", {
                                        dateTime: date.publishDate,
                                        itemProp: "datePublished",
                                        children: [
                                            "Добавлено:",
                                            " ",
                                            new Date(date.publishDate).toLocaleString()
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pure-g",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pure-u-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "page__image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "social-image",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: socialImage,
                                                alt: "",
                                                quality: "50",
                                                fill: true,
                                                sizes: "100vw",
                                                itemProp: "image"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sector content",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                children: [
                                                    "Подробно о ",
                                                    coworkingName
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: markdown_it__WEBPACK_IMPORTED_MODULE_3___default()().render(content)
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sector prices",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "Цены и тарифы"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                itemProp: "priceRange",
                                                children: prices.map((item)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: item
                                                    }, item);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sector gallery",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "Галерея"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                                                spaceBetween: 50,
                                                slidesPerView: 1,
                                                modules: [
                                                    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation
                                                ],
                                                navigation: true,
                                                breakpoints: {
                                                    992: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 20
                                                    },
                                                    1200: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 30
                                                    }
                                                },
                                                children: galleryImages.map((image)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "gallery__image",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                src: image,
                                                                alt: "",
                                                                fill: true,
                                                                sizes: "100vw",
                                                                quality: "50"
                                                            })
                                                        })
                                                    }, image);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sector contacts",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "Адрес и контакты"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Адрес: ",
                                                    address
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Телефон:",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `tel:${phone}`,
                                                        children: phone
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Время работы: ",
                                                    hours
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Сайт:",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `https://${website}`,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: website
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    faq && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sector faq",
                                        itemScope: true,
                                        itemType: "https://schema.org/FAQPage",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: "Ответы на вопросы"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9__.Accordion, {
                                                children: faq.map((item)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionItem, {
                                                        itemProp: "mainEntity",
                                                        itemScope: true,
                                                        itemType: "https://schema.org/Question",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionItemHeading, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionItemButton, {
                                                                    itemProp: "name",
                                                                    children: item.question
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionItemPanel, {
                                                                itemScope: true,
                                                                itemProp: "acceptedAnswer",
                                                                itemType: "https://schema.org/Answer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    itemProp: "text",
                                                                    children: item.answer
                                                                })
                                                            })
                                                        ]
                                                    }, item.question);
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7600:
/***/ (() => {



/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;