(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4611:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_8d0d54', '__Roboto_Fallback_8d0d54'","fontStyle":"normal"},
	"className": "__className_8d0d54"
};


/***/ }),

/***/ 2195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getCurrentYear)
/* harmony export */ });
function getCurrentYear() {
    return new Date().getFullYear();
}


/***/ }),

/***/ 6408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages/_app.tsx","import":"Roboto","arguments":[{"weight":["400","700"],"subsets":["cyrillic"]}],"variableName":"roboto"}
var _app_tsx_import_Roboto_arguments_weight_400_700_subsets_cyrillic_variableName_roboto_ = __webpack_require__(4611);
var _app_tsx_import_Roboto_arguments_weight_400_700_subsets_cyrillic_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Roboto_arguments_weight_400_700_subsets_cyrillic_variableName_roboto_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./helpers/getCurrentYear.js
var getCurrentYear = __webpack_require__(2195);
;// CONCATENATED MODULE: ./components/Footer/RuFooter.tsx




function RuFooter({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `footer ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pure-g",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    "aria-label": "Перейти на главную страницу",
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/dino.svg",
                                        alt: "",
                                        width: "40",
                                        height: "40"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        (0,getCurrentYear/* default */.Z)(),
                                        " \xa9 topcoworking.com.ua"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Города"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на страницу - Львов",
                                            href: "/ru/lviv",
                                            children: "Львов"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на страницу - Киев",
                                            href: "/ru/kyiv",
                                            children: "Киев"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на страницу - Одесса",
                                            href: "/ru/odesa",
                                            children: "Одесса"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на страницу - Харьков",
                                            href: "/ru/kharkiv",
                                            children: "Харьков"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на страницу - Днепр",
                                            href: "/ru/dnipro",
                                            children: "Днепр"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Информация"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на страницу - Политика конфиденциальности",
                                            href: "/ru/gdpr",
                                            children: "Политика конфиденциальности"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            "aria-label": "Перейти на страницу - Карта сайта",
                                            href: "/sitemap-0.xml",
                                            target: "_blank",
                                            children: "Карта сайта"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Размещение"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Для сотрудничества и размещения вашего коворкинга на сайте пишити на info@topcoworking.com.ua"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer/UaFooter.tsx




function UaFooter({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `footer ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pure-g",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    "aria-label": "Перейти на головну сторінку",
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/dino.svg",
                                        alt: "",
                                        width: "40",
                                        height: "40"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        (0,getCurrentYear/* default */.Z)(),
                                        " \xa9 topcoworking.com.ua"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Міста"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на сторінку - Львів",
                                            href: "/ua/lviv",
                                            children: "Львів"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на сторінку - Київ",
                                            href: "/ua/kyiv",
                                            children: "Київ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на сторінку - Одеса",
                                            href: "/ua/odesa",
                                            children: "Одеса"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на сторінку - Харків",
                                            href: "/ua/kharkiv",
                                            children: "Харків"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на сторінку - Дніпро",
                                            href: "/ua/dnipro",
                                            children: "Дніпро"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Інформація"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на сторінку - Політика конфіденційності",
                                            href: "/ua/gdpr",
                                            children: "Політика конфіденційності"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            "aria-label": "Перейти на сторінку - Мапа сайту",
                                            href: "/sitemap-0.xml",
                                            target: "_blank",
                                            children: "Мапа сайту"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1 pure-u-md-1-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__widget",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Розміщення"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Для співпраці та розміщення вашого коворкінгу на сайті пишіть на info@topcoworking.com.ua"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Header/RuHeader.tsx




function RuHeader({ className  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const uaPath = router.asPath.replace("ru", "ua");
    const [openned, setOpenned] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setOpenned(false);
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `header ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pure-g align-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                "aria-label": "Перейти на главную страницу",
                                href: "/ru",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "logo__text",
                                    children: "topcoworking.com.ua"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-3-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header__menus",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: `menu ${openned ? "openned" : null}`,
                                    itemScope: true,
                                    itemType: "https://schema.org/SiteNavigationElement",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на страницу - Главная",
                                            href: "/ru",
                                            children: "Главная"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на страницу - О нас",
                                            href: "/ru/about",
                                            children: "О нас"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на страницу - Львов",
                                            href: "/ru/lviv",
                                            children: "Львов"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на страницу - Киев",
                                            href: "/ru/kyiv",
                                            children: "Киев"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на страницу - Одесса",
                                            href: "/ru/odesa",
                                            children: "Одесса"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на страницу - Харьков",
                                            href: "/ru/kharkiv",
                                            children: "Харьков"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на страницу - Днепр",
                                            href: "/ru/dnipro",
                                            children: "Днепр"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `burger ${openned ? "openned" : null}`,
                                    onClick: ()=>{
                                        setOpenned(!openned);
                                    },
                                    "aria-label": "Активировать или деактивировать мобильное меню",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "burger__line"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "language",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на украинскую версию сайта",
                                            href: uaPath,
                                            children: "Ua"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "active",
                                            children: "Ru"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Header/UaHeader.tsx




function UaHeader({ className  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const ruPath = router.asPath.replace("ua", "ru");
    const [openned, setOpenned] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setOpenned(false);
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `header ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pure-g align-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-1-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                "aria-label": "Перейти на головну сторінку",
                                href: "/ua",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "logo__text",
                                    children: "topcoworking.com.ua"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pure-u-3-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header__menus",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: `menu ${openned ? "openned" : null}`,
                                    itemScope: true,
                                    itemType: "https://schema.org/SiteNavigationElement",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на сторінку - Головна",
                                            href: "/ua",
                                            children: "Головна"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на сторінку - Про нас",
                                            href: "/ua/about",
                                            children: "Про нас"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на сторінку - Львів",
                                            href: "/ua/lviv",
                                            children: "Львів"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на сторінку - Київ",
                                            href: "/ua/kyiv",
                                            children: "Київ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на сторінку - Одеса",
                                            href: "/ua/odesa",
                                            children: "Одеса"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на сторінку - Харків",
                                            href: "/ua/kharkiv",
                                            children: "Харків"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            itemProp: "url",
                                            "aria-label": "Перейти на сторінку - Дніпро",
                                            href: "/ua/dnipro",
                                            children: "Дніпро"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `burger ${openned ? "openned" : null}`,
                                    onClick: ()=>{
                                        setOpenned(!openned);
                                    },
                                    "aria-label": "Активувати чи деактивувати мобільне меню",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "burger__line"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "language",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "active",
                                            children: "Ua"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            "aria-label": "Перейти на російську версію сайту",
                                            href: ruPath,
                                            children: "Ru"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./layouts/MainLayout.tsx





function MainLayout({ children , className , currentLanguage  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            currentLanguage === "ru" ? /*#__PURE__*/ jsx_runtime_.jsx(RuHeader, {
                className: className
            }) : /*#__PURE__*/ jsx_runtime_.jsx(UaHeader, {
                className: className
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: `wrapper ${className}`,
                children: children
            }),
            currentLanguage === "ru" ? /*#__PURE__*/ jsx_runtime_.jsx(RuFooter, {
                className: className
            }) : /*#__PURE__*/ jsx_runtime_.jsx(UaFooter, {
                className: className
            })
        ]
    });
}

;// CONCATENATED MODULE: ./public/images/spinner.svg
/* harmony default export */ const spinner = ({"src":"/_next/static/media/spinner.16578fd8.svg","height":200,"width":200});
;// CONCATENATED MODULE: ./components/Loader/Loader.tsx


function Loader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "page",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pure-g",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pure-u-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "loader",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: spinner.src,
                            alt: ""
                        })
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Breadcrumbs/Breadcrumbs.tsx


function Breadcrumbs({ crumbs  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "breadcrumbs",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ol", {
            itemScope: true,
            itemType: "https://schema.org/BreadcrumbList",
            className: "breadcrumbs-list",
            children: crumbs.map((item, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "breadcrumbs-list__item",
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "https://schema.org/ListItem",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            itemProp: "item",
                            href: item.path,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                itemProp: "name",
                                children: item.label
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            itemProp: "position",
                            content: `${index + 1}`
                        }),
                        crumbs.length - 1 !== index ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "arrow",
                            children: "›"
                        }) : undefined
                    ]
                }, item.label);
            })
        })
    });
}

;// CONCATENATED MODULE: ./crumbsLabels.js
const crumbsLabels = {
    "ru": {
        ru: "Главная",
        ua: "Головна"
    },
    "ua": {
        ru: "Главная",
        ua: "Головна"
    },
    "dnipro": {
        ru: "Коворкинги Днепра",
        ua: "Коворінги Дніпра"
    },
    "kharkiv": {
        ru: "Коворкинги Харькова",
        ua: "Коворінги Харкова"
    },
    "lviv": {
        ru: "Коворкинги Львова",
        ua: "Коворінги Львова"
    },
    "kyiv": {
        ru: "Коворкинги Киева",
        ua: "Коворінги Києва"
    },
    "odesa": {
        ru: "Коворкинги Одессы",
        ua: "Коворінги Одеси"
    },
    "about": {
        ru: "О нас",
        ua: "Про нас"
    },
    "gdpr": {
        ru: "Политика конфиденциальности",
        ua: "Політика конфіденційності"
    }
};

;// CONCATENATED MODULE: ./helpers/generateCrumbs.js


function generateCrumbs() {
    const router = (0,router_namespaceObject.useRouter)();
    const routesArr = router.asPath.split("/").slice(1);
    let currentPath = "";
    const crumbs = routesArr.map((item)=>{
        currentPath += `/${item}`;
        const currentLabel = crumbsLabels[item]?.[routesArr[0]];
        return {
            path: currentPath,
            label: currentLabel ? currentLabel : item.split("-").join(" ")
        };
    });
    return crumbs;
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.tsx










function App({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const [currentLanguage, setCurrentLanguage] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        router_default().events.on("routeChangeStart", ()=>setLoading(true));
        router_default().events.on("routeChangeComplete", ()=>setLoading(false));
        router_default().events.on("routeChangeError", ()=>setLoading(false));
        const currentPath = router.asPath;
        if (currentPath === "/") {
            navigator.language === "ru-RU" ? router.push("/ru") : router.push("/ua");
        }
        const pathLanguage = currentPath.startsWith("/ru") ? "ru" : "ua";
        if (currentLanguage !== pathLanguage) {
            setCurrentLanguage(pathLanguage);
            document.documentElement.lang = pathLanguage;
        }
        return ()=>{
            router_default().events.off("routeChangeStart", ()=>setLoading(true));
            router_default().events.off("routeChangeComplete", ()=>setLoading(false));
            router_default().events.off("routeChangeError", ()=>setLoading(false));
        };
    }, [
        (router_default()).events,
        router.asPath
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            router.asPath === "/" && /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainLayout, {
                className: (_app_tsx_import_Roboto_arguments_weight_400_700_subsets_cyrillic_variableName_roboto_default()).className,
                currentLanguage: currentLanguage,
                children: [
                    router.asPath !== "/" ? /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs, {
                        crumbs: generateCrumbs()
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                    loading ? /*#__PURE__*/ jsx_runtime_.jsx(Loader, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,676,664], () => (__webpack_exec__(6408)));
module.exports = __webpack_exports__;

})();