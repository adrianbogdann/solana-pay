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
exports.id = "pages/api/fetchItem";
exports.ids = ["pages/api/fetchItem"];
exports.modules = {

/***/ "(api)/./pages/api/fetchItem.js":
/*!********************************!*\
  !*** ./pages/api/fetchItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.json */ \"(api)/./pages/api/products.json\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { itemID  } = req.body;\n        if (!itemID) {\n            return res.status(400).send(\"Missing itemID\");\n        }\n        const product = _products_json__WEBPACK_IMPORTED_MODULE_0__.find((p)=>p.id === itemID\n        );\n        if (product) {\n            const { hash , fileName  } = product;\n            return res.status(200).send({\n                hash,\n                fileName\n            });\n        } else {\n            return res.status(404).send(\"Item not found\");\n        }\n    } else {\n        return res.status(405).send(`Method ${req.method} not allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVDO0FBRXhCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUUzQixJQUFJLENBQUNELE1BQU0sRUFBRTtZQUNULE9BQU9GLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNqRDtRQUVELE1BQU1DLE9BQU8sR0FBR1QsZ0RBQWEsQ0FBQyxDQUFDVyxDQUFDLEdBQUtBLENBQUMsQ0FBQ0MsRUFBRSxLQUFLUCxNQUFNO1FBQUEsQ0FBQztRQUVyRCxJQUFJSSxPQUFPLEVBQUU7WUFDVCxNQUFNLEVBQUVJLElBQUksR0FBRUMsUUFBUSxHQUFFLEdBQUdMLE9BQU87WUFDbEMsT0FBT04sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUssSUFBSTtnQkFBRUMsUUFBUTthQUFFLENBQUMsQ0FBQztTQUNuRCxNQUFNO1lBQ0gsT0FBT1gsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0osTUFBTTtRQUNILE9BQU9MLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDbkU7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvZmV0Y2hJdGVtLmpzPzExMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vcHJvZHVjdHMuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAgICAgY29uc3QgeyBpdGVtSUQgfSA9IHJlcS5ib2R5O1xuXG4gICAgICAgIGlmICghaXRlbUlEKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJNaXNzaW5nIGl0ZW1JRFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKChwKSA9PiBwLmlkID09PSBpdGVtSUQpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgICBjb25zdCB7IGhhc2gsIGZpbGVOYW1lIH0gPSBwcm9kdWN0O1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgaGFzaCwgZmlsZU5hbWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJJdGVtIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuc2VuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbInByb2R1Y3RzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIml0ZW1JRCIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwicHJvZHVjdCIsImZpbmQiLCJwIiwiaWQiLCJoYXNoIiwiZmlsZU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchItem.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchItem.js"));
module.exports = __webpack_exports__;

})();