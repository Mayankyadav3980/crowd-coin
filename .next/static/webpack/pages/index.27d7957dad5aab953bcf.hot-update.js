self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory.json */ "./ethereum/build/CampaignFactory.json");
/* module decorator */ module = __webpack_require__.hmd(module);


var instance = new _web3__WEBPACK_IMPORTED_MODULE_0__.default.eth.Contract(JSON.parse(_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__.interface), '0xa1783E44922ee9a1C95dE837015BB024a600C301');
/* harmony default export */ __webpack_exports__["default"] = (instance);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJpbnN0YW5jZSIsIndlYjMiLCJKU09OIiwicGFyc2UiLCJDYW1wYWlnbkZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLElBQUlDLHVEQUFKLENBQ2ZDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxrRUFBWCxDQURlLEVBRWYsNENBRmUsQ0FBakI7QUFLQSwrREFBZUosUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yN2Q3OTU3ZGFkNWFhYjk1M2JjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYjMgZnJvbSAnLi93ZWIzJztcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSAnLi9idWlsZC9DYW1wYWlnbkZhY3RvcnkuanNvbic7XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICBKU09OLnBhcnNlKENhbXBhaWduRmFjdG9yeS5pbnRlcmZhY2UpLFxuICAnMHhhMTc4M0U0NDkyMmVlOWExQzk1ZEU4MzcwMTVCQjAyNGE2MDBDMzAxJ1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9