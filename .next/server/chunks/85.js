"use strict";
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 8583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getArchive)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);


const getArchive = (path)=>{
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path);
    const archive = files.map((fileName)=>{
        const slug = fileName.replace(".md", "");
        const readFile = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`${path}/${fileName}`, "utf-8");
        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(readFile);
        return {
            slug,
            frontmatter
        };
    });
    return {
        props: {
            archive
        }
    };
};


/***/ }),

/***/ 2195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getCurrentYear)
/* harmony export */ });
function getCurrentYear() {
    return new Date().getFullYear();
}


/***/ }),

/***/ 5036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoworkingArchiveTemplateRu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5224);
/* harmony import */ var _helpers_getCurrentYear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2195);






function CoworkingArchiveTemplateRu({ archive , cityForms , cityLabel  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Коворкинги ${cityForms.two} ${(0,_helpers_getCurrentYear__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()} (фото + цены +
                    тарифы) | topcoworking.com.ua`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: `Коворкинги ${cityForms.two} ${(0,_helpers_getCurrentYear__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()} (фото + цены + тарифы)`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `Коворкинги ${cityForms.two} с фотографиями, описанием и ценами. Самый лучший коворкинг в ${cityForms.three}. Снять офис в ${cityForms.three}. Цены на офис в ${cityForms.three}.`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `Коворкинги ${cityForms.two} ${(0,_helpers_getCurrentYear__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()} (фото + цены + тарифы)`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: `Коворкинги ${cityForms.two} с фотографиями, описанием и ценами. Самый лучший коворкинг в ${cityForms.three}. Снять офис в ${cityForms.three}. Цены на офис в ${cityForms.three}.`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "article"
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
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            children: [
                                "Коворкинги ",
                                cityForms.two,
                                " (фото + цены + тарифы)"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pure-g",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pure-u-1",
                                itemScope: true,
                                itemType: "https://schema.org/ItemList",
                                children: archive.map((item, index)=>{
                                    const { socialImage , address , hours , coworkingName , metaDesc  } = item.frontmatter;
                                    const { slug  } = item;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "coworking",
                                        itemProp: "itemListElement",
                                        itemScope: true,
                                        itemType: "https://schema.org/NewsArticle",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "coworking__image",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    "aria-label": `Перейти на страницу - ${coworkingName}`,
                                                    href: `/ru/${cityLabel}/${slug}`,
                                                    itemProp: "url",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: socialImage,
                                                        alt: "",
                                                        fill: true,
                                                        sizes: "100vw",
                                                        quality: "50",
                                                        priority: index === 0,
                                                        itemProp: "image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "coworking__content",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        "aria-label": `Перейти на страницу - ${coworkingName}`,
                                                        href: `/ru/${cityLabel}/${slug}`,
                                                        itemProp: "url",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            itemProp: "headline",
                                                            children: coworkingName
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        itemProp: "description",
                                                        children: metaDesc
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "meta",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "label",
                                                                children: address
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "label",
                                                                children: hours
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        "aria-label": `Перейти на страницу - ${coworkingName}`,
                                                        className: "btn btn--primary",
                                                        href: `/ru/${cityLabel}/${slug}`,
                                                        itemProp: "url",
                                                        children: "Смотреть"
                                                    })
                                                ]
                                            })
                                        ]
                                    }, slug);
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;