"use strict";
(() => {
var exports = {};
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoworkingPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_CoworkingPageTemplateUa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2374);
/* harmony import */ var _cityForms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4451);
/* harmony import */ var _api_getPaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(303);
/* harmony import */ var _api_getMarkdownData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_templates_CoworkingPageTemplateUa__WEBPACK_IMPORTED_MODULE_1__]);
_templates_CoworkingPageTemplateUa__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





async function getStaticPaths() {
    return (0,_api_getPaths__WEBPACK_IMPORTED_MODULE_3__/* .getPaths */ .w)("coworkings/ua/kyiv");
}
const getStaticProps = async (context)=>{
    const slug = context?.params?.slug;
    return (0,_api_getMarkdownData__WEBPACK_IMPORTED_MODULE_4__/* .getMarkdownData */ .R)(`coworkings/ua/kyiv/${slug}.md`);
};
function CoworkingPage(props) {
    const { frontmatter , content  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_CoworkingPageTemplateUa__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        frontmatter: frontmatter,
        content: content,
        city: _cityForms__WEBPACK_IMPORTED_MODULE_2__/* .cityForms.ua.kyiv */ .F.ua.kyiv
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 9653:
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3282:
/***/ ((module) => {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,647,60], () => (__webpack_exec__(686)));
module.exports = __webpack_exports__;

})();