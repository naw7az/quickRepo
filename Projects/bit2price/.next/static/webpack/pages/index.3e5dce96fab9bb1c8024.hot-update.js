webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Programming\\Projects\\bit2price\\components\\Prices.js",
    _this = undefined,
    _s = $RefreshSig$();



var Prices = function Prices(_ref) {
  _s();

  var bpi = _ref.bpi;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('USD'),
      currency = _useState[0],
      setCurrency = _useState[1];

  var list = '';

  if (currency === 'USD') {
    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "list-group-item",
      children: ["Bitcoin rate for ", bpi.USD.description, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "badge badge-primary",
        children: bpi.USD.code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this), ";;;", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bpi.USD.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this);
  } else if (currency === 'GBP') {
    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "list-group-item",
      children: ["Bitcoin rate for ", bpi.GBP.description, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "badge badge-primary",
        children: bpi.GBP.code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bpi.GBP.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this);
  } else if (currency === 'EUR') {
    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "list-group-item",
      children: ["Bitcoin rate for ", bpi.EUR.description, ": ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "badge badge-primary",
        children: bpi.EUR.code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: bpi.EUR.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list-group",
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
      onChange: function onChange(e) {
        return setCurrency(e.target.value);
      },
      className: "form-control",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "USD",
        children: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "GBP",
        children: "GBP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "EUR",
        children: "EUR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(Prices, "IMt9glJKuY0gCtznVFnjeGsjS3E=");

_c = Prices;
/* harmony default export */ __webpack_exports__["default"] = (Prices);

var _c;

$RefreshReg$(_c, "Prices");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiYnBpIiwidXNlU3RhdGUiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwibGlzdCIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJHQlAiLCJFVVIiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQVc7QUFBQTs7QUFBQSxNQUFUQyxHQUFTLFFBQVRBLEdBQVM7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE87O0FBR3hCLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE1BQUlGLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN0QkUsUUFBSSxnQkFBSTtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBLHNDQUNvQkosR0FBRyxDQUFDSyxHQUFKLENBQVFDLFdBRDVCLHFCQUVJO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxrQkFDRE4sR0FBRyxDQUFDSyxHQUFKLENBQVFFO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLHNCQUtFO0FBQUEsa0JBQVNQLEdBQUcsQ0FBQ0ssR0FBSixDQUFRRztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFPRCxHQVJELE1BUU8sSUFBSU4sUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0FBQzdCRSxRQUFJLGdCQUFJO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsc0NBQ29CSixHQUFHLENBQUNTLEdBQUosQ0FBUUgsV0FENUIscUJBRUk7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBLGtCQUNETixHQUFHLENBQUNTLEdBQUosQ0FBUUY7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFLRTtBQUFBLGtCQUFTUCxHQUFHLENBQUNTLEdBQUosQ0FBUUQ7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBT0QsR0FSTSxNQVFBLElBQUlOLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUM3QkUsUUFBSSxnQkFBSTtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBLHNDQUNvQkosR0FBRyxDQUFDVSxHQUFKLENBQVFKLFdBRDVCLHFCQUVJO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxrQkFDRE4sR0FBRyxDQUFDVSxHQUFKLENBQVFIO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBS0U7QUFBQSxrQkFBU1AsR0FBRyxDQUFDVSxHQUFKLENBQVFGO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQU9EOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBLGdCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFO0FBQVEsY0FBUSxFQUFFLGtCQUFBTyxDQUFDO0FBQUEsZUFBSVIsV0FBVyxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsT0FBbkI7QUFBb0QsZUFBUyxFQUFDLGNBQTlEO0FBQUEsOEJBQ0U7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0EzQ0Q7O0dBQU1kLE07O0tBQUFBLE07QUE2Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlNWRjZTk2ZmFiOWJiMWM4MDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQcmljZXMgPSAoe2JwaX0pID0+IHtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKCdVU0QnKVxyXG5cclxuICBsZXQgbGlzdCA9ICcnO1xyXG4gIGlmIChjdXJyZW5jeSA9PT0gJ1VTRCcpIHtcclxuICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cclxuICAgICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHticGkuVVNELmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz5cclxuICAgICAgICAgICAgICB7YnBpLlVTRC5jb2RlfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj47OzsgICBcclxuICAgICAgICAgICAgICA8c3Ryb25nPnticGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgfSBlbHNlIGlmIChjdXJyZW5jeSA9PT0gJ0dCUCcpIHtcclxuICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cclxuICAgICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHticGkuR0JQLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz5cclxuICAgICAgICAgICAgICB7YnBpLkdCUC5jb2RlfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgPHN0cm9uZz57YnBpLkdCUC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gIH0gZWxzZSBpZiAoY3VycmVuY3kgPT09ICdFVVInKSB7XHJcbiAgICBsaXN0ID0gIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XHJcbiAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7YnBpLkVVUi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+XHJcbiAgICAgICAgICAgICAge2JwaS5FVVIuY29kZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+e2JwaS5FVVIucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9saT5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuICAgICAgICB7bGlzdH1cclxuICAgICAgPC91bD5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2UgPT4gc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCc+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVVNEJz5VU0Q8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdHQlAnPkdCUDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9J0VVUic+RVVSPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzOyJdLCJzb3VyY2VSb290IjoiIn0=