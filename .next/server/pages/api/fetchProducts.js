"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/fetchProducts";
exports.ids = ["pages/api/fetchProducts"];
exports.modules = {

/***/ "(api)/./pages/api/fetchProducts.js":
/*!************************************!*\
  !*** ./pages/api/fetchProducts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.json */ \"(api)/./pages/api/products.json\");\n\nfunction handler(req, res) {\n    if (req.method == \"GET\") {\n        const productsNoHashes = _products_json__WEBPACK_IMPORTED_MODULE_0__.map((product)=>{\n            const { hash , filename , ...rest } = product;\n            return rest;\n        });\n        res.status(200).json(productsNoHashes);\n    } else {\n        res.status(405).send(`Method ${req.method} not allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV4QixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLEtBQUssRUFBRTtRQUNyQixNQUFNQyxnQkFBZ0IsR0FBR0wsK0NBQVksQ0FBQyxDQUFDTyxPQUFPLEdBQUs7WUFDL0MsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLFFBQVEsR0FBRSxHQUFHQyxJQUFJLEVBQUUsR0FBR0gsT0FBTztZQUUzQyxPQUFPRyxJQUFJO1NBQ2QsQ0FBQztRQUVGUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQztLQUN6QyxNQUFNO1FBQ0hGLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVYLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDNUQ7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0cy5qcz9jNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0cyBmcm9tICcuL3Byb2R1Y3RzLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT0gJ0dFVCcpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNOb0hhc2hlcyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoYXNoLCBmaWxlbmFtZSwgLi4ucmVzdCB9ID0gcHJvZHVjdDtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3RcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0c05vSGFzaGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5zZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGApO1xuICAgIH1cbn0iXSwibmFtZXMiOlsicHJvZHVjdHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvZHVjdHNOb0hhc2hlcyIsIm1hcCIsInByb2R1Y3QiLCJoYXNoIiwiZmlsZW5hbWUiLCJyZXN0Iiwic3RhdHVzIiwianNvbiIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchProducts.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.json":
/*!*********************************!*\
  !*** ./pages/api/products.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"Dynosaur pack","price":"0.09","description":"Get this fire emoji pack for only $0.09! Includes 4 hot dyno emojis!","image_url":"https://i.imgur.com/rVD8bjt.png","filename":"Dynos","hash":"QmSr4PmwpnDfLVmMH4nEqvsooivtSgtBZHHTdubigFWsHX"},{"id":2,"name":"Dyno Pack 2","price":"0.01","image_url":"https://i.imgur.com/v1Sv5Oe.png","description":"Dyno pack 2","filename":"dynos.zip","hash":"QmUCoh9neaYmriaNmYBp9ha6quq5NzVxrrdniw4iAix1qQ"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchProducts.js"));
module.exports = __webpack_exports__;

})();