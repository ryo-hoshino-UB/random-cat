(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 270:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "index_page__Goa_Q",
	"button": "index_button__g8ljY",
	"frame": "index_frame__lHMaR",
	"scroll": "index_scroll__N8LQ_",
	"img": "index_img__4PRwt"
};


/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./pages/index.module.css
var index_module = __webpack_require__(270);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./pages/index.tsx



const IndexPage = ({ initialImageUrl  })=>{
    const [imageUrl, setImageUrl] = (0,external_react_.useState)(initialImageUrl);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    // useEffect(() => {
    //   fetchImage().then((newImage) => {
    //     setImageUrl(newImage.url);
    //     setLoading(false);
    //   });
    // }, []);
    const handleClick = async ()=>{
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: (index_module_default()).page,
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                onClick: handleClick,
                className: (index_module_default()).button,
                children: "他の猫も見る"
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                className: (index_module_default()).frame,
                children: loading || /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                    src: imageUrl,
                    className: (index_module_default()).img
                })
            })
        ]
    });
};
/* harmony default export */ const pages = (IndexPage);
const getServerSideProps = async ()=>{
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url
        }
    };
};
const fetchImage = async ()=>{
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
};


/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(490));
module.exports = __webpack_exports__;

})();