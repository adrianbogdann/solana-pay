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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _orders_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.json */ \"(api)/./pages/api/orders.json\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction get(req, res) {\n    const { buyer  } = req.query;\n    // Check if address has orders\n    const buyerOrders = _orders_json__WEBPACK_IMPORTED_MODULE_0__.filter((order)=>order.buyer === buyer\n    );\n    if (buyerOrders.length === 0) {\n        // Successfully processed the content, not returning any content\n        res.status(204).send();\n    } else {\n        res.status(200).json(buyerOrders);\n    }\n}\nasync function post(req, res) {\n    console.log(\"Recieved add order request\", req.body);\n    try {\n        const newOrder = req.body;\n        // If the buyer hasn't purchased the item, add it to orders.json\n        if (!_orders_json__WEBPACK_IMPORTED_MODULE_0__.find((order)=>order.buyer === newOrder.buyer.toString() && order.itemID === newOrder.itemID\n        )) {\n            _orders_json__WEBPACK_IMPORTED_MODULE_0__.push(newOrder);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(\"./pages/api/orders.json\", JSON.stringify(_orders_json__WEBPACK_IMPORTED_MODULE_0__, null, 2));\n            res.status(200).json(_orders_json__WEBPACK_IMPORTED_MODULE_0__);\n        } else {\n            res.status(400).send(\"Order already exists\");\n        }\n    } catch (err) {\n        res.status(400).send(err);\n    }\n}\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            get(req, res);\n            break;\n        case \"POST\":\n            await post(req, res);\n            break;\n        default:\n            res.status(405).send(`Method ${req.method} not allowed!`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFDSztBQUV4QyxTQUFTRSxHQUFHLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ25CLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUUzQiw4QkFBOEI7SUFDOUIsTUFBTUMsV0FBVyxHQUFHUCxnREFBYSxDQUFDLENBQUNTLEtBQUssR0FBS0EsS0FBSyxDQUFDSixLQUFLLEtBQUtBLEtBQUs7SUFBQSxDQUFDO0lBQ25FLElBQUlFLFdBQVcsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRTtRQUMxQixnRUFBZ0U7UUFDaEVOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztLQUMxQixNQUFNO1FBQ0hSLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUNOLFdBQVcsQ0FBQyxDQUFDO0tBQ3JDO0NBQ0o7QUFFRCxlQUFlTyxJQUFJLENBQUNYLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzFCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRWIsR0FBRyxDQUFDYyxJQUFJLENBQUMsQ0FBQztJQUVwRCxJQUFJO1FBQ0EsTUFBTUMsUUFBUSxHQUFHZixHQUFHLENBQUNjLElBQUk7UUFFekIsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQ2pCLDhDQUFXLENBQUMsQ0FBQ1MsS0FBSyxHQUFLQSxLQUFLLENBQUNKLEtBQUssS0FBS2EsUUFBUSxDQUFDYixLQUFLLENBQUNlLFFBQVEsRUFBRSxJQUFJWCxLQUFLLENBQUNZLE1BQU0sS0FBS0gsUUFBUSxDQUFDRyxNQUFNO1FBQUEsQ0FBQyxFQUFFO1lBQ3hHckIsOENBQVcsQ0FBQ2tCLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE1BQU1qQixzREFBUyxDQUFDLHlCQUF5QixFQUFFc0IsSUFBSSxDQUFDQyxTQUFTLENBQUN4Qix5Q0FBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFSSxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDYix5Q0FBTSxDQUFDLENBQUM7U0FDaEMsTUFBTTtZQUNISSxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDaEQ7S0FDSixDQUFDLE9BQU9hLEdBQUcsRUFBRTtRQUNWckIsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ2EsR0FBRyxDQUFDLENBQUM7S0FDN0I7Q0FDSjtBQUVjLGVBQWVDLE9BQU8sQ0FBQ3ZCLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE9BQVFELEdBQUcsQ0FBQ3dCLE1BQU07UUFDZCxLQUFLLEtBQUs7WUFDTnpCLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztZQUNkLE1BQU07UUFDVixLQUFLLE1BQU07WUFDUCxNQUFNVSxJQUFJLENBQUNYLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7WUFDckIsTUFBTTtRQUNWO1lBQ0lBLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVULEdBQUcsQ0FBQ3dCLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0tBQ2pFO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vcGFnZXMvYXBpL29yZGVycy5qcz8xYTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvcmRlcnMgZnJvbSAnLi9vcmRlcnMuanNvbic7XG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcyc7XG5cbmZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgYnV5ZXIgfSA9IHJlcS5xdWVyeTtcblxuICAgIC8vIENoZWNrIGlmIGFkZHJlc3MgaGFzIG9yZGVyc1xuICAgIGNvbnN0IGJ1eWVyT3JkZXJzID0gb3JkZXJzLmZpbHRlcigob3JkZXIpID0+IG9yZGVyLmJ1eWVyID09PSBidXllcik7XG4gICAgaWYgKGJ1eWVyT3JkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBTdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIHRoZSBjb250ZW50LCBub3QgcmV0dXJuaW5nIGFueSBjb250ZW50XG4gICAgICAgIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYnV5ZXJPcmRlcnMpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdChyZXEsIHJlcykge1xuICAgIGNvbnNvbGUubG9nKFwiUmVjaWV2ZWQgYWRkIG9yZGVyIHJlcXVlc3RcIiwgcmVxLmJvZHkpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSByZXEuYm9keTtcblxuICAgICAgICAvLyBJZiB0aGUgYnV5ZXIgaGFzbid0IHB1cmNoYXNlZCB0aGUgaXRlbSwgYWRkIGl0IHRvIG9yZGVycy5qc29uXG4gICAgICAgIGlmICghb3JkZXJzLmZpbmQoKG9yZGVyKSA9PiBvcmRlci5idXllciA9PT0gbmV3T3JkZXIuYnV5ZXIudG9TdHJpbmcoKSAmJiBvcmRlci5pdGVtSUQgPT09IG5ld09yZGVyLml0ZW1JRCkpIHtcbiAgICAgICAgICAgIG9yZGVycy5wdXNoKG5ld09yZGVyKTtcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlRmlsZShcIi4vcGFnZXMvYXBpL29yZGVycy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVycywgbnVsbCwgMikpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ob3JkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiT3JkZXIgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgZ2V0KHJlcSwgcmVzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgcG9zdChyZXEsIHJlcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5zZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZCFgKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIm9yZGVycyIsIndyaXRlRmlsZSIsImdldCIsInJlcSIsInJlcyIsImJ1eWVyIiwicXVlcnkiLCJidXllck9yZGVycyIsImZpbHRlciIsIm9yZGVyIiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImpzb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJuZXdPcmRlciIsImZpbmQiLCJ0b1N0cmluZyIsIml0ZW1JRCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiaGFuZGxlciIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders.json":
/*!*******************************!*\
  !*** ./pages/api/orders.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"buyer":"DXAtXoLr1Hz8rYMTWkWimGDCkWi344HTssxagGqCPTbb","orderID":"BdCxoCgmkzQUco9A33dRhwRg7E65RLiC75Ztw4uUH77P","itemID":1},{"buyer":"DXAtXoLr1Hz8rYMTWkWimGDCkWi344HTssxagGqCPTbb","orderID":"C4ocUAWvzzGydauXMh6PUiKxyisAq7gRMxWSC5KSTptL","itemID":2}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();