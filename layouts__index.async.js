"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[717],{

/***/ 74595:
/*!*************************************!*\
  !*** ./src/components/App/state.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ AppContext; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ 27424);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 62435);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ 88305);



var AppContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_2__/* .createContainer */ .f)(function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    walletVisible = _useState2[0],
    setWalletVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    pendingTxns = _useState4[0],
    setPendingTxns = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
    tableFlag = _useState6[0],
    setTableFlag = _useState6[1];
  return {
    pendingTxns: pendingTxns,
    walletVisible: walletVisible,
    setWalletVisible: setWalletVisible,
    setPendingTxns: setPendingTxns,
    tableFlag: tableFlag,
    setTableFlag: setTableFlag
  };
});

/***/ }),

/***/ 69499:
/*!****************************************************!*\
  !*** ./src/components/Modal/index.tsx + 2 modules ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Modal; }
});

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(11355);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 10 modules
var dialog = __webpack_require__(82546);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./src/assets/close.svg
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgClose = (props) => /* @__PURE__ */ react.createElement("svg", __spreadValues({ width: 32, height: 32, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("rect", { width: 32, height: 32, rx: 16, fill: "#232538" }), /* @__PURE__ */ react.createElement("path", { d: "m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4", stroke: "#9597B5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));

/* harmony default export */ var assets_close = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiMyMzI1MzgiLz48cGF0aCBkPSJtMTIgMTIgNCA0bTAgMCA0LTRtLTQgNC00IDRtNC00IDQgNCIgc3Ryb2tlPSIjOTU5N0I1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/components/Modal/modal.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/components/Modal/index.tsx






var Modal = function Modal(props) {
  var visible = props.visible,
    title = props.title,
    width = props.width,
    onClose = props.onClose,
    children = props.children,
    className = props.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(transition/* Transition */.u, {
    appear: true,
    show: visible,
    as: react.Fragment,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(dialog/* Dialog */.V, {
      open: visible,
      onClose: onClose,
      className: "dialog",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, {
        as: react.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "fixed inset-0 bg-black bg-opacity-25 opacity-100"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "fixed inset-0 overflow-y-auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex min-h-full items-center justify-center p-4 text-center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, {
            as: react.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(dialog/* Dialog.Panel */.V.Panel, {
              className: "dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(className !== null && className !== void 0 ? className : ''),
              style: {
                width: width
              },
              children: [title && /*#__PURE__*/(0,jsx_runtime.jsxs)(dialog/* Dialog.Title */.V.Title, {
                className: "dialog-title",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  children: [title, " "]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgClose, {
                  onClick: function onClick() {
                    onClose();
                  }
                })]
              }), children]
            })
          })
        })
      })]
    })
  });
};
/* harmony default export */ var components_Modal = (Modal);

/***/ }),

/***/ 17265:
/*!********************************************!*\
  !*** ./src/layouts/index.tsx + 19 modules ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: ./node_modules/@ethersproject/providers/lib.esm/web3-provider.js
var web3_provider = __webpack_require__(241);
// EXTERNAL MODULE: ./node_modules/@web3-react/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(34713);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(59734);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(17061);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17156);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(27424);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 5 modules
var react_toastify_esm = __webpack_require__(84774);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 7 modules
var _umi_production_exports = __webpack_require__(3410);
;// CONCATENATED MODULE: ./src/assets/nav_logo.svg
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgNavLogo = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ width: 146, height: 48, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.502 5.339c-.707.239-1.118.933-.96 1.752l.779 4.051h.002l-.92.938h-.02l-.779-4.051c-.18-.936.287-2.265 1.898-2.69Zm.395-.082c.054-.005.11-.007.165-.007h-.117a4.235 4.235 0 0 0-.048.007Zm.329 16.397 1.133 5.91.937-.96-1.132-5.885-.938.935Zm4.008 15.028.684 3.551a2 2 0 0 0 .064.246l-.998.709-.004-.017-.779-4.05.939-.933.003.019h-.002l.094.475Z", fill: "#5C72FF" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.502 5.339c-.707.239-1.118.933-.96 1.752l.779 4.051h.002l-.92.938h-.02l-.779-4.051c-.18-.936.287-2.265 1.898-2.69Zm.395-.082c.054-.005.11-.007.165-.007h-.117a4.235 4.235 0 0 0-.048.007Zm.329 16.397 1.133 5.91.937-.96-1.132-5.885-.938.935Zm4.008 15.028.684 3.551a2 2 0 0 0 .064.246l-.998.709-.004-.017-.779-4.05.939-.933.003.019h-.002l.094.475Z", fill: "#000", fillOpacity: 0.2 }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.982 40.479c.295.9 1.214 1.596 2.165 1.596h6.375c4.435 0 8.219-1.512 10.943-4.04-2.76 3.098-6.912 4.996-11.88 4.996H20.21c-1.036 0-2.034-.824-2.23-1.84l1.002-.712Z", fill: "#5C72FF" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.982 40.479c.295.9 1.214 1.596 2.165 1.596h6.375c4.435 0 8.219-1.512 10.943-4.04-2.76 3.098-6.912 4.996-11.88 4.996H20.21c-1.036 0-2.034-.824-2.23-1.84l1.002-.712Z", fill: "url(#nav_logo_svg__a)", fillOpacity: 0.4 }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m13.323 11.142-.94.956h21.999l.939-.937-.024-.02H13.323Zm2.973 15.463-.937.96h26.762c.16-.148.746-.734.938-.94a.835.835 0 0 0-.001-.022v.005H16.297l-.001-.003Z", fill: "#5C72FF" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m13.323 11.142-.94.956h21.999l.939-.937-.024-.02H13.323Zm2.973 15.463-.937.96h26.762c.16-.148.746-.734.938-.94a.835.835 0 0 0-.001-.022v.005H16.297l-.001-.003Z", fill: "url(#nav_logo_svg__b)", fillOpacity: 0.4 }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m6.65 12.983-.938.938c-.939 1.759-1.527 3.748-1.7 5.892l.937-.938.003-.028-.003.028c.174-2.143.762-4.133 1.7-5.892Zm34.662 21.355v.003-.003ZM6.792 28.45l-.938.937a23.274 23.274 0 0 0 3.967 5.892l.935-.94a23.272 23.272 0 0 1-3.965-5.89Z", fill: "#3CEAAA" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m6.65 12.983-.938.938c-.939 1.759-1.527 3.748-1.7 5.892l.937-.938.003-.028-.003.028c.174-2.143.762-4.133 1.7-5.892Zm34.662 21.355v.003-.003ZM6.792 28.45l-.938.937a23.274 23.274 0 0 0 3.967 5.892l.935-.94a23.272 23.272 0 0 1-3.965-5.89Z", fill: "#000", fillOpacity: 0.2 }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.95 18.875h36.22c-.201.203-.764.766-.938.938H4.012l.937-.938c0-.006 0-.002 0 0Zm5.806 15.463.003.004H41.31c-.14.166-.669.677-.88.882l-.057.055H9.821l.935-.94Zm30.556 0-.001.003.001-.003Z", fill: "#3CEAAA" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.95 18.875h36.22c-.201.203-.764.766-.938.938H4.012l.937-.938c0-.006 0-.002 0 0Zm5.806 15.463.003.004H41.31c-.14.166-.669.677-.88.882l-.057.055H9.821l.935-.94Zm30.556 0-.001.003.001-.003Z", fill: "url(#nav_logo_svg__c)", fillOpacity: 0.4 }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.542 7.091c-.196-1.017.485-1.841 1.52-1.841h6.376c5.431 0 10.76 2.268 14.881 5.892H13.321l-.78-4.05Zm2.621 13.625h26.761c.342.96.613 1.944.806 2.946.193 1.003.3 1.987.328 2.946H16.297l-1.134-5.892Zm2.976 15.467.779 4.05c.196 1.017 1.194 1.842 2.23 1.842h6.374c5.432 0 9.888-2.268 12.614-5.892H18.14Z", fill: "#5C72FF" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m42.73 23.662.01.053-.02-.105.01.052ZM6.65 12.983c-.94 1.76-1.528 3.748-1.701 5.892h36.22a23.072 23.072 0 0 0-3.286-5.117c-.222-.263-.45-.521-.682-.775H6.649Zm4.108 21.359a23.274 23.274 0 0 1-3.967-5.892h36.22c-.025.309-.059.615-.101.917a14.885 14.885 0 0 1-1.6 4.975H10.758Z", fill: "#3CEAAA" }), /* @__PURE__ */ React.createElement("path", { d: "m14.885 13.758-.164-.775h22.48c.233.254.46.512.682.775H14.885ZM17.531 29.367l-.212-.918h25.692c-.025.31-.059.616-.101.918H17.53Z", fill: "#1E1E1E", fillOpacity: 0.2 }), /* @__PURE__ */ React.createElement("path", { d: "m55.5 32.347-2.77-14.398-.724-2.268h13.372c1.557 0 2.784.19 3.683.567.918.378 1.613.945 2.085 1.7.469.738.81 1.664 1.025 2.778l1.26 6.548c.218 1.133.236 2.078.055 2.834-.166.737-.635 1.294-1.408 1.672-.753.378-1.918.567-3.493.567H55.5Zm3.28-2.721h9.05c1.48 0 2.1-.67 1.862-2.012L68.3 20.386a2.52 2.52 0 0 0-.757-1.389c-.403-.396-1.027-.595-1.873-.595h-9.05l2.16 11.224ZM78.432 32.347 75.225 15.68h17.927l.524 2.721H79.553l.753 3.912h10.779l.54 2.805h-10.78l.868 4.507H95.95l1.617 2.41c.014.075-.23.15-.735.226-.508.057-1.396.085-2.664.085H78.432ZM100.786 32.347l-2.77-14.398-.73-2.296h12.768c1.229 0 2.221.16 2.975.482.772.321 1.373.746 1.801 1.275.444.51.771 1.058.979 1.644.209.586.364 1.143.466 1.672l.322 1.673c.084.434.111.925.082 1.473a3.856 3.856 0 0 1-.45 1.56c-.27.49-.719.906-1.345 1.246-.63.322-1.502.482-2.616.482h-2.94a64.57 64.57 0 0 1-3.417-.085 145.752 145.752 0 0 1-2.362-.142l1.041 5.414h-3.804Zm2.283-7.908h7.839c.865 0 1.421-.207 1.667-.623.247-.416.314-.917.201-1.502l-.343-1.786a2.929 2.929 0 0 0-.785-1.53c-.406-.416-1.032-.624-1.878-.624h-7.868l1.167 6.065ZM120.518 32.347l.768-1.7 5.123-6.633-9.097-8.333h4.611l6.768 6.264h.317l4.386-6.264h4.611l-.802 1.673-5.088 6.66 9.097 8.333H136.6l-6.807-6.32h-.317l-4.346 6.32h-4.612Z", fill: "#fff" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "nav_logo_svg__a", x1: 28.922, y1: 36.188, x2: 32.679, y2: 44.434, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopOpacity: 0.5 }), /* @__PURE__ */ React.createElement("stop", { offset: 0.127 }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopOpacity: 0.44 })), /* @__PURE__ */ React.createElement("linearGradient", { id: "nav_logo_svg__b", x1: 14.297, y1: 24.492, x2: 42.785, y2: 30.16, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", null), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopOpacity: 0.44 })), /* @__PURE__ */ React.createElement("linearGradient", { id: "nav_logo_svg__c", x1: 42.094, y1: 34.523, x2: 9.774, y2: 34.547, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopOpacity: 0.62 }), /* @__PURE__ */ React.createElement("stop", { offset: 1 }))));

/* harmony default export */ var nav_logo = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTAyIDUuMzM5Yy0uNzA3LjIzOS0xLjExOC45MzMtLjk2IDEuNzUybC43NzkgNC4wNTFoLjAwMmwtLjkyLjkzOGgtLjAybC0uNzc5LTQuMDUxYy0uMTgtLjkzNi4yODctMi4yNjUgMS44OTgtMi42OVptLjM5NS0uMDgyYy4wNTQtLjAwNS4xMS0uMDA3LjE2NS0uMDA3aC0uMTE3YTQuMjM1IDQuMjM1IDAgMCAwLS4wNDguMDA3Wm0uMzI5IDE2LjM5NyAxLjEzMyA1LjkxLjkzNy0uOTYtMS4xMzItNS44ODUtLjkzOC45MzVabTQuMDA4IDE1LjAyOC42ODQgMy41NTFhMiAyIDAgMCAwIC4wNjQuMjQ2bC0uOTk4LjcwOS0uMDA0LS4wMTctLjc3OS00LjA1LjkzOS0uOTMzLjAwMy4wMTloLS4wMDJsLjA5NC40NzVaIiBmaWxsPSIjNUM3MkZGIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41MDIgNS4zMzljLS43MDcuMjM5LTEuMTE4LjkzMy0uOTYgMS43NTJsLjc3OSA0LjA1MWguMDAybC0uOTIuOTM4aC0uMDJsLS43NzktNC4wNTFjLS4xOC0uOTM2LjI4Ny0yLjI2NSAxLjg5OC0yLjY5Wm0uMzk1LS4wODJjLjA1NC0uMDA1LjExLS4wMDcuMTY1LS4wMDdoLS4xMTdhNC4yMzUgNC4yMzUgMCAwIDAtLjA0OC4wMDdabS4zMjkgMTYuMzk3IDEuMTMzIDUuOTEuOTM3LS45Ni0xLjEzMi01Ljg4NS0uOTM4LjkzNVptNC4wMDggMTUuMDI4LjY4NCAzLjU1MWEyIDIgMCAwIDAgLjA2NC4yNDZsLS45OTguNzA5LS4wMDQtLjAxNy0uNzc5LTQuMDUuOTM5LS45MzMuMDAzLjAxOWgtLjAwMmwuMDk0LjQ3NVoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4Ljk4MiA0MC40NzljLjI5NS45IDEuMjE0IDEuNTk2IDIuMTY1IDEuNTk2aDYuMzc1YzQuNDM1IDAgOC4yMTktMS41MTIgMTAuOTQzLTQuMDQtMi43NiAzLjA5OC02LjkxMiA0Ljk5Ni0xMS44OCA0Ljk5NkgyMC4yMWMtMS4wMzYgMC0yLjAzNC0uODI0LTIuMjMtMS44NGwxLjAwMi0uNzEyWiIgZmlsbD0iIzVDNzJGRiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguOTgyIDQwLjQ3OWMuMjk1LjkgMS4yMTQgMS41OTYgMi4xNjUgMS41OTZoNi4zNzVjNC40MzUgMCA4LjIxOS0xLjUxMiAxMC45NDMtNC4wNC0yLjc2IDMuMDk4LTYuOTEyIDQuOTk2LTExLjg4IDQuOTk2SDIwLjIxYy0xLjAzNiAwLTIuMDM0LS44MjQtMi4yMy0xLjg0bDEuMDAyLS43MTJaIiBmaWxsPSJ1cmwoI2EpIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xMy4zMjMgMTEuMTQyLS45NC45NTZoMjEuOTk5bC45MzktLjkzNy0uMDI0LS4wMkgxMy4zMjNabTIuOTczIDE1LjQ2My0uOTM3Ljk2aDI2Ljc2MmMuMTYtLjE0OC43NDYtLjczNC45MzgtLjk0YS44MzUuODM1IDAgMCAwLS4wMDEtLjAyMnYuMDA1SDE2LjI5N2wtLjAwMS0uMDAzWiIgZmlsbD0iIzVDNzJGRiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTMuMzIzIDExLjE0Mi0uOTQuOTU2aDIxLjk5OWwuOTM5LS45MzctLjAyNC0uMDJIMTMuMzIzWm0yLjk3MyAxNS40NjMtLjkzNy45NmgyNi43NjJjLjE2LS4xNDguNzQ2LS43MzQuOTM4LS45NGEuODM1LjgzNSAwIDAgMC0uMDAxLS4wMjJ2LjAwNUgxNi4yOTdsLS4wMDEtLjAwM1oiIGZpbGw9InVybCgjYikiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNjUgMTIuOTgzLS45MzguOTM4Yy0uOTM5IDEuNzU5LTEuNTI3IDMuNzQ4LTEuNyA1Ljg5MmwuOTM3LS45MzguMDAzLS4wMjgtLjAwMy4wMjhjLjE3NC0yLjE0My43NjItNC4xMzMgMS43LTUuODkyWm0zNC42NjIgMjEuMzU1di4wMDMtLjAwM1pNNi43OTIgMjguNDVsLS45MzguOTM3YTIzLjI3NCAyMy4yNzQgMCAwIDAgMy45NjcgNS44OTJsLjkzNS0uOTRhMjMuMjcyIDIzLjI3MiAwIDAgMS0zLjk2NS01Ljg5WiIgZmlsbD0iIzNDRUFBQSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtNi42NSAxMi45ODMtLjkzOC45MzhjLS45MzkgMS43NTktMS41MjcgMy43NDgtMS43IDUuODkybC45MzctLjkzOC4wMDMtLjAyOC0uMDAzLjAyOGMuMTc0LTIuMTQzLjc2Mi00LjEzMyAxLjctNS44OTJabTM0LjY2MiAyMS4zNTV2LjAwMy0uMDAzWk02Ljc5MiAyOC40NWwtLjkzOC45MzdhMjMuMjc0IDIzLjI3NCAwIDAgMCAzLjk2NyA1Ljg5MmwuOTM1LS45NGEyMy4yNzIgMjMuMjcyIDAgMCAxLTMuOTY1LTUuODlaIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ljk1IDE4Ljg3NWgzNi4yMmMtLjIwMS4yMDMtLjc2NC43NjYtLjkzOC45MzhINC4wMTJsLjkzNy0uOTM4YzAtLjAwNiAwLS4wMDIgMCAwWm01LjgwNiAxNS40NjMuMDAzLjAwNEg0MS4zMWMtLjE0LjE2Ni0uNjY5LjY3Ny0uODguODgybC0uMDU3LjA1NUg5LjgyMWwuOTM1LS45NFptMzAuNTU2IDAtLjAwMS4wMDMuMDAxLS4wMDNaIiBmaWxsPSIjM0NFQUFBIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ljk1IDE4Ljg3NWgzNi4yMmMtLjIwMS4yMDMtLjc2NC43NjYtLjkzOC45MzhINC4wMTJsLjkzNy0uOTM4YzAtLjAwNiAwLS4wMDIgMCAwWm01LjgwNiAxNS40NjMuMDAzLjAwNEg0MS4zMWMtLjE0LjE2Ni0uNjY5LjY3Ny0uODguODgybC0uMDU3LjA1NUg5LjgyMWwuOTM1LS45NFptMzAuNTU2IDAtLjAwMS4wMDMuMDAxLS4wMDNaIiBmaWxsPSJ1cmwoI2MpIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi41NDIgNy4wOTFjLS4xOTYtMS4wMTcuNDg1LTEuODQxIDEuNTItMS44NDFoNi4zNzZjNS40MzEgMCAxMC43NiAyLjI2OCAxNC44ODEgNS44OTJIMTMuMzIxbC0uNzgtNC4wNVptMi42MjEgMTMuNjI1aDI2Ljc2MWMuMzQyLjk2LjYxMyAxLjk0NC44MDYgMi45NDYuMTkzIDEuMDAzLjMgMS45ODcuMzI4IDIuOTQ2SDE2LjI5N2wtMS4xMzQtNS44OTJabTIuOTc2IDE1LjQ2Ny43NzkgNC4wNWMuMTk2IDEuMDE3IDEuMTk0IDEuODQyIDIuMjMgMS44NDJoNi4zNzRjNS40MzIgMCA5Ljg4OC0yLjI2OCAxMi42MTQtNS44OTJIMTguMTRaIiBmaWxsPSIjNUM3MkZGIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im00Mi43MyAyMy42NjIuMDEuMDUzLS4wMi0uMTA1LjAxLjA1MlpNNi42NSAxMi45ODNjLS45NCAxLjc2LTEuNTI4IDMuNzQ4LTEuNzAxIDUuODkyaDM2LjIyYTIzLjA3MiAyMy4wNzIgMCAwIDAtMy4yODYtNS4xMTdjLS4yMjItLjI2My0uNDUtLjUyMS0uNjgyLS43NzVINi42NDlabTQuMTA4IDIxLjM1OWEyMy4yNzQgMjMuMjc0IDAgMCAxLTMuOTY3LTUuODkyaDM2LjIyYy0uMDI1LjMwOS0uMDU5LjYxNS0uMTAxLjkxN2ExNC44ODUgMTQuODg1IDAgMCAxLTEuNiA0Ljk3NUgxMC43NThaIiBmaWxsPSIjM0NFQUFBIi8+PHBhdGggZD0ibTE0Ljg4NSAxMy43NTgtLjE2NC0uNzc1aDIyLjQ4Yy4yMzMuMjU0LjQ2LjUxMi42ODIuNzc1SDE0Ljg4NVpNMTcuNTMxIDI5LjM2N2wtLjIxMi0uOTE4aDI1LjY5MmMtLjAyNS4zMS0uMDU5LjYxNi0uMTAxLjkxOEgxNy41M1oiIGZpbGw9IiMxRTFFMUUiIGZpbGwtb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJtNTUuNSAzMi4zNDctMi43Ny0xNC4zOTgtLjcyNC0yLjI2OGgxMy4zNzJjMS41NTcgMCAyLjc4NC4xOSAzLjY4My41NjcuOTE4LjM3OCAxLjYxMy45NDUgMi4wODUgMS43LjQ2OS43MzguODEgMS42NjQgMS4wMjUgMi43NzhsMS4yNiA2LjU0OGMuMjE4IDEuMTMzLjIzNiAyLjA3OC4wNTUgMi44MzQtLjE2Ni43MzctLjYzNSAxLjI5NC0xLjQwOCAxLjY3Mi0uNzUzLjM3OC0xLjkxOC41NjctMy40OTMuNTY3SDU1LjVabTMuMjgtMi43MjFoOS4wNWMxLjQ4IDAgMi4xLS42NyAxLjg2Mi0yLjAxMkw2OC4zIDIwLjM4NmEyLjUyIDIuNTIgMCAwIDAtLjc1Ny0xLjM4OWMtLjQwMy0uMzk2LTEuMDI3LS41OTUtMS44NzMtLjU5NWgtOS4wNWwyLjE2IDExLjIyNFpNNzguNDMyIDMyLjM0NyA3NS4yMjUgMTUuNjhoMTcuOTI3bC41MjQgMi43MjFINzkuNTUzbC43NTMgMy45MTJoMTAuNzc5bC41NCAyLjgwNWgtMTAuNzhsLjg2OCA0LjUwN0g5NS45NWwxLjYxNyAyLjQxYy4wMTQuMDc1LS4yMy4xNS0uNzM1LjIyNi0uNTA4LjA1Ny0xLjM5Ni4wODUtMi42NjQuMDg1SDc4LjQzMlpNMTAwLjc4NiAzMi4zNDdsLTIuNzctMTQuMzk4LS43My0yLjI5NmgxMi43NjhjMS4yMjkgMCAyLjIyMS4xNiAyLjk3NS40ODIuNzcyLjMyMSAxLjM3My43NDYgMS44MDEgMS4yNzUuNDQ0LjUxLjc3MSAxLjA1OC45NzkgMS42NDQuMjA5LjU4Ni4zNjQgMS4xNDMuNDY2IDEuNjcybC4zMjIgMS42NzNjLjA4NC40MzQuMTExLjkyNS4wODIgMS40NzNhMy44NTYgMy44NTYgMCAwIDEtLjQ1IDEuNTZjLS4yNy40OS0uNzE5LjkwNi0xLjM0NSAxLjI0Ni0uNjMuMzIyLTEuNTAyLjQ4Mi0yLjYxNi40ODJoLTIuOTRhNjQuNTcgNjQuNTcgMCAwIDEtMy40MTctLjA4NSAxNDUuNzUyIDE0NS43NTIgMCAwIDEtMi4zNjItLjE0MmwxLjA0MSA1LjQxNGgtMy44MDRabTIuMjgzLTcuOTA4aDcuODM5Yy44NjUgMCAxLjQyMS0uMjA3IDEuNjY3LS42MjMuMjQ3LS40MTYuMzE0LS45MTcuMjAxLTEuNTAybC0uMzQzLTEuNzg2YTIuOTI5IDIuOTI5IDAgMCAwLS43ODUtMS41M2MtLjQwNi0uNDE2LTEuMDMyLS42MjQtMS44NzgtLjYyNGgtNy44NjhsMS4xNjcgNi4wNjVaTTEyMC41MTggMzIuMzQ3bC43NjgtMS43IDUuMTIzLTYuNjMzLTkuMDk3LTguMzMzaDQuNjExbDYuNzY4IDYuMjY0aC4zMTdsNC4zODYtNi4yNjRoNC42MTFsLS44MDIgMS42NzMtNS4wODggNi42NiA5LjA5NyA4LjMzM0gxMzYuNmwtNi44MDctNi4zMmgtLjMxN2wtNC4zNDYgNi4zMmgtNC42MTJaIiBmaWxsPSIjZmZmIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMjguOTIyIiB5MT0iMzYuMTg4IiB4Mj0iMzIuNjc5IiB5Mj0iNDQuNDM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1vcGFjaXR5PSIuNSIvPjxzdG9wIG9mZnNldD0iLjEyNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIuNDQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjE0LjI5NyIgeTE9IjI0LjQ5MiIgeDI9IjQyLjc4NSIgeTI9IjMwLjE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3AvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIuNDQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjQyLjA5NCIgeTE9IjM0LjUyMyIgeDI9IjkuNzc0IiB5Mj0iMzQuNTQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1vcGFjaXR5PSIuNjIiLz48c3RvcCBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(38416);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(42122);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/assets/Arbitrum.svg
var Arbitrum_defProp = Object.defineProperty;
var Arbitrum_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Arbitrum_hasOwnProp = Object.prototype.hasOwnProperty;
var Arbitrum_propIsEnum = Object.prototype.propertyIsEnumerable;
var Arbitrum_defNormalProp = (obj, key, value) => key in obj ? Arbitrum_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Arbitrum_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Arbitrum_hasOwnProp.call(b, prop))
      Arbitrum_defNormalProp(a, prop, b[prop]);
  if (Arbitrum_getOwnPropSymbols)
    for (var prop of Arbitrum_getOwnPropSymbols(b)) {
      if (Arbitrum_propIsEnum.call(b, prop))
        Arbitrum_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArbitrum = (props) => /* @__PURE__ */ react.createElement("svg", Arbitrum_spreadValues({ width: 32, height: 32, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "m19.606 14.662 2.35-3.988 6.335 9.866.003 1.894-.021-13.03a.982.982 0 0 0-.454-.78l-11.404-6.56a1.005 1.005 0 0 0-.974.063l-.04.025L4.333 8.566l-.043.02a.978.978 0 0 0-.572.833l.018 10.617 5.9-9.145c.743-1.212 2.361-1.603 3.864-1.582l1.763.047-10.39 16.662 1.225.706L16.61 9.373l4.647-.017-10.487 17.788 4.37 2.514.523.3c.22.09.48.095.704.014l11.564-6.701-2.21 1.28-6.116-9.889Zm.897 12.914-4.414-6.928 2.694-4.572 5.797 9.137-4.077 2.363Z", fill: "#2D374B" }), /* @__PURE__ */ react.createElement("path", { d: "m16.09 20.648 4.413 6.928 4.078-2.363-5.797-9.137-2.695 4.572Zm12.204 1.786-.003-1.894-6.334-9.865-2.35 3.987 6.115 9.89 2.21-1.282a.98.98 0 0 0 .363-.713v-.123Z", fill: "#28A0F0" }), /* @__PURE__ */ react.createElement("path", { d: "m1.75 24.22 3.122 1.799 10.39-16.663-1.763-.047c-1.503-.02-3.121.37-3.864 1.582l-5.9 9.145-1.985 3.05v1.133ZM21.259 9.355l-4.648.017-10.514 17.35 3.675 2.117 1-1.695 10.487-17.79Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { d: "M30.252 9.332a2.96 2.96 0 0 0-1.39-2.38L17.31.308a3.006 3.006 0 0 0-2.65 0A8955.59 8955.59 0 0 0 3.422 6.817a2.962 2.962 0 0 0-1.673 2.51v13.76l1.985-3.05-.017-10.618a.978.978 0 0 1 .408-.738c.052-.037 11.382-6.595 11.418-6.613.266-.134.604-.136.871-.004l11.404 6.56a.981.981 0 0 1 .454.78v13.153a.959.959 0 0 1-.34.713l-2.212 1.282-1.14.66-4.078 2.364-4.135 2.396c-.223.08-.483.076-.704-.014l-4.893-2.813-.999 1.695 4.397 2.53c.145.084.275.157.381.217.165.092.277.154.316.173.313.152.763.24 1.168.24.368 0 .733-.068 1.076-.203l12.01-6.955a2.937 2.937 0 0 0 1.132-2.212V9.332Z", fill: "#96BEDC" }));

/* harmony default export */ var Arbitrum = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE5LjYwNiAxNC42NjIgMi4zNS0zLjk4OCA2LjMzNSA5Ljg2Ni4wMDMgMS44OTQtLjAyMS0xMy4wM2EuOTgyLjk4MiAwIDAgMC0uNDU0LS43OGwtMTEuNDA0LTYuNTZhMS4wMDUgMS4wMDUgMCAwIDAtLjk3NC4wNjNsLS4wNC4wMjVMNC4zMzMgOC41NjZsLS4wNDMuMDJhLjk3OC45NzggMCAwIDAtLjU3Mi44MzNsLjAxOCAxMC42MTcgNS45LTkuMTQ1Yy43NDMtMS4yMTIgMi4zNjEtMS42MDMgMy44NjQtMS41ODJsMS43NjMuMDQ3LTEwLjM5IDE2LjY2MiAxLjIyNS43MDZMMTYuNjEgOS4zNzNsNC42NDctLjAxNy0xMC40ODcgMTcuNzg4IDQuMzcgMi41MTQuNTIzLjNjLjIyLjA5LjQ4LjA5NS43MDQuMDE0bDExLjU2NC02LjcwMS0yLjIxIDEuMjgtNi4xMTYtOS44ODlabS44OTcgMTIuOTE0LTQuNDE0LTYuOTI4IDIuNjk0LTQuNTcyIDUuNzk3IDkuMTM3LTQuMDc3IDIuMzYzWiIgZmlsbD0iIzJEMzc0QiIvPjxwYXRoIGQ9Im0xNi4wOSAyMC42NDggNC40MTMgNi45MjggNC4wNzgtMi4zNjMtNS43OTctOS4xMzctMi42OTUgNC41NzJabTEyLjIwNCAxLjc4Ni0uMDAzLTEuODk0LTYuMzM0LTkuODY1LTIuMzUgMy45ODcgNi4xMTUgOS44OSAyLjIxLTEuMjgyYS45OC45OCAwIDAgMCAuMzYzLS43MTN2LS4xMjNaIiBmaWxsPSIjMjhBMEYwIi8+PHBhdGggZD0ibTEuNzUgMjQuMjIgMy4xMjIgMS43OTkgMTAuMzktMTYuNjYzLTEuNzYzLS4wNDdjLTEuNTAzLS4wMi0zLjEyMS4zNy0zLjg2NCAxLjU4MmwtNS45IDkuMTQ1LTEuOTg1IDMuMDV2MS4xMzNaTTIxLjI1OSA5LjM1NWwtNC42NDguMDE3LTEwLjUxNCAxNy4zNSAzLjY3NSAyLjExNyAxLTEuNjk1IDEwLjQ4Ny0xNy43OVoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzAuMjUyIDkuMzMyYTIuOTYgMi45NiAwIDAgMC0xLjM5LTIuMzhMMTcuMzEuMzA4YTMuMDA2IDMuMDA2IDAgMCAwLTIuNjUgMEE4OTU1LjU5IDg5NTUuNTkgMCAwIDAgMy40MjIgNi44MTdhMi45NjIgMi45NjIgMCAwIDAtMS42NzMgMi41MXYxMy43NmwxLjk4NS0zLjA1LS4wMTctMTAuNjE4YS45NzguOTc4IDAgMCAxIC40MDgtLjczOGMuMDUyLS4wMzcgMTEuMzgyLTYuNTk1IDExLjQxOC02LjYxMy4yNjYtLjEzNC42MDQtLjEzNi44NzEtLjAwNGwxMS40MDQgNi41NmEuOTgxLjk4MSAwIDAgMSAuNDU0Ljc4djEzLjE1M2EuOTU5Ljk1OSAwIDAgMS0uMzQuNzEzbC0yLjIxMiAxLjI4Mi0xLjE0LjY2LTQuMDc4IDIuMzY0LTQuMTM1IDIuMzk2Yy0uMjIzLjA4LS40ODMuMDc2LS43MDQtLjAxNGwtNC44OTMtMi44MTMtLjk5OSAxLjY5NSA0LjM5NyAyLjUzYy4xNDUuMDg0LjI3NS4xNTcuMzgxLjIxNy4xNjUuMDkyLjI3Ny4xNTQuMzE2LjE3My4zMTMuMTUyLjc2My4yNCAxLjE2OC4yNC4zNjggMCAuNzMzLS4wNjggMS4wNzYtLjIwM2wxMi4wMS02Ljk1NWEyLjkzNyAyLjkzNyAwIDAgMCAxLjEzMi0yLjIxMlY5LjMzMloiIGZpbGw9IiM5NkJFREMiLz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/wallet.svg
var wallet_defProp = Object.defineProperty;
var wallet_getOwnPropSymbols = Object.getOwnPropertySymbols;
var wallet_hasOwnProp = Object.prototype.hasOwnProperty;
var wallet_propIsEnum = Object.prototype.propertyIsEnumerable;
var wallet_defNormalProp = (obj, key, value) => key in obj ? wallet_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var wallet_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (wallet_hasOwnProp.call(b, prop))
      wallet_defNormalProp(a, prop, b[prop]);
  if (wallet_getOwnPropSymbols)
    for (var prop of wallet_getOwnPropSymbols(b)) {
      if (wallet_propIsEnum.call(b, prop))
        wallet_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgWallet = (props) => /* @__PURE__ */ react.createElement("svg", wallet_spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M19.25 7.204H5.187V6.64l12.375-.99v.99h1.688V4.954c0-1.238-1.002-2.106-2.226-1.932L5.727 4.636C4.502 4.81 3.5 5.966 3.5 7.204v11.25a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25Zm-1.688 7.882a1.689 1.689 0 1 1 .002-3.378 1.689 1.689 0 0 1-.002 3.378Z", fill: "#fff" }));

/* harmony default export */ var wallet = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjI1IDcuMjA0SDUuMTg3VjYuNjRsMTIuMzc1LS45OXYuOTloMS42ODhWNC45NTRjMC0xLjIzOC0xLjAwMi0yLjEwNi0yLjIyNi0xLjkzMkw1LjcyNyA0LjYzNkM0LjUwMiA0LjgxIDMuNSA1Ljk2NiAzLjUgNy4yMDR2MTEuMjVhMi4yNSAyLjI1IDAgMCAwIDIuMjUgMi4yNWgxMy41YTIuMjUgMi4yNSAwIDAgMCAyLjI1LTIuMjV2LTlhMi4yNSAyLjI1IDAgMCAwLTIuMjUtMi4yNVptLTEuNjg4IDcuODgyYTEuNjg5IDEuNjg5IDAgMSAxIC4wMDItMy4zNzggMS42ODkgMS42ODkgMCAwIDEtLjAwMiAzLjM3OFoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/wallet_metamask.svg
var wallet_metamask_defProp = Object.defineProperty;
var wallet_metamask_getOwnPropSymbols = Object.getOwnPropertySymbols;
var wallet_metamask_hasOwnProp = Object.prototype.hasOwnProperty;
var wallet_metamask_propIsEnum = Object.prototype.propertyIsEnumerable;
var wallet_metamask_defNormalProp = (obj, key, value) => key in obj ? wallet_metamask_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var wallet_metamask_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (wallet_metamask_hasOwnProp.call(b, prop))
      wallet_metamask_defNormalProp(a, prop, b[prop]);
  if (wallet_metamask_getOwnPropSymbols)
    for (var prop of wallet_metamask_getOwnPropSymbols(b)) {
      if (wallet_metamask_propIsEnum.call(b, prop))
        wallet_metamask_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgWalletMetamask = (props) => /* @__PURE__ */ React.createElement("svg", wallet_metamask_spreadValues({ width: 32, height: 32, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("g", { clipPath: "url(#wallet_metamask_svg__a)", strokeWidth: 0.25, strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "m28.816 2.667-11.112 8.222 2.066-4.846 9.046-3.376Z", fill: "#E17726", stroke: "#E17726" }), /* @__PURE__ */ React.createElement("path", { d: "m3.185 2.667 11.013 8.298-1.968-4.922-9.045-3.376ZM24.814 21.73l-2.956 4.517 6.33 1.743 1.814-6.16-5.188-.1ZM2.009 21.83l1.802 6.16 6.32-1.743-2.946-4.517-5.176.1Z", fill: "#E27625", stroke: "#E27625" }), /* @__PURE__ */ React.createElement("path", { d: "m9.79 14.1-1.758 2.654 6.264.285-.208-6.742L9.79 14.1ZM22.21 14.101l-4.364-3.88-.142 6.818 6.264-.285L22.21 14.1ZM10.131 26.247l3.792-1.83-3.264-2.544-.528 4.374ZM18.078 24.416l3.78 1.831-.516-4.374-3.264 2.543Z", fill: "#E27625", stroke: "#E27625" }), /* @__PURE__ */ React.createElement("path", { d: "m21.858 26.247-3.78-1.83.307 2.455-.033 1.042 3.506-1.667ZM10.131 26.247l3.518 1.667-.022-1.042.296-2.455-3.792 1.83Z", fill: "#D5BFB2", stroke: "#D5BFB2" }), /* @__PURE__ */ React.createElement("path", { d: "m13.714 20.25-3.144-.92 2.22-1.02.924 1.94ZM18.286 20.25l.923-1.94 2.232 1.02-3.155.92Z", fill: "#233447", stroke: "#233447" }), /* @__PURE__ */ React.createElement("path", { d: "m10.131 26.247.55-4.517-3.495.1 2.945 4.417ZM21.32 21.73l.538 4.517 2.956-4.418-3.495-.099ZM23.968 16.753l-6.264.285.582 3.212.923-1.94 2.232 1.02 2.527-2.577ZM10.57 19.33l2.22-1.02.924 1.94.582-3.212-6.264-.285 2.539 2.576Z", fill: "#CC6228", stroke: "#CC6228" }), /* @__PURE__ */ React.createElement("path", { d: "m8.032 16.753 2.627 5.12-.088-2.544-2.54-2.576ZM21.44 19.33l-.098 2.543 2.627-5.12-2.528 2.576ZM14.296 17.038l-.582 3.212.736 3.794.165-5-.319-2.006ZM17.704 17.038l-.308 1.996.154 5.01.736-3.794-.582-3.212Z", fill: "#E27525", stroke: "#E27525" }), /* @__PURE__ */ React.createElement("path", { d: "m18.286 20.25-.736 3.794.527.372 3.265-2.543.099-2.543-3.155.92ZM10.57 19.33l.088 2.543 3.264 2.543.528-.372-.736-3.793-3.144-.921Z", fill: "#F5841F", stroke: "#F5841F" }), /* @__PURE__ */ React.createElement("path", { d: "m18.353 27.913.032-1.04-.285-.242H13.9l-.274.241.021 1.041-3.517-1.666 1.231 1.009 2.495 1.72h4.276l2.506-1.72 1.22-1.009-3.506 1.666Z", fill: "#C0AC9D", stroke: "#C0AC9D" }), /* @__PURE__ */ React.createElement("path", { d: "m18.077 24.416-.527-.372h-3.1l-.527.372-.297 2.456.275-.241h4.198l.286.241-.308-2.456Z", fill: "#161616", stroke: "#161616" }), /* @__PURE__ */ React.createElement("path", { d: "m29.288 11.426.935-4.539-1.407-4.22-10.738 7.948L22.21 14.1l5.836 1.699 1.286-1.502-.56-.406.89-.81-.681-.527.89-.68-.583-.45ZM1.778 6.887l.945 4.539-.604.45.9.679-.68.526.89.811-.56.406L3.953 15.8l5.836-1.7 4.133-3.485L3.185 2.667l-1.407 4.22Z", fill: "#763E1A", stroke: "#763E1A" }), /* @__PURE__ */ React.createElement("path", { d: "m28.046 15.8-5.836-1.7 1.759 2.654-2.627 5.12 3.473-.044h5.188l-1.957-6.03ZM9.79 14.1l-5.836 1.7-1.945 6.03h5.176l3.474.043-2.627-5.12 1.758-2.652ZM17.703 17.039l.374-6.424 1.693-4.572h-7.54l1.692 4.572.374 6.424.143 2.017.011 4.988h3.1l.01-4.988.143-2.017Z", fill: "#F5841F", stroke: "#F5841F" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "wallet_metamask_svg__a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", transform: "translate(1.778 2.667)", d: "M0 0h28.445v26.31H0z" }))));

/* harmony default export */ var wallet_metamask = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9Ii4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMjguODE2IDIuNjY3LTExLjExMiA4LjIyMiAyLjA2Ni00Ljg0NiA5LjA0Ni0zLjM3NloiIGZpbGw9IiNFMTc3MjYiIHN0cm9rZT0iI0UxNzcyNiIvPjxwYXRoIGQ9Im0zLjE4NSAyLjY2NyAxMS4wMTMgOC4yOTgtMS45NjgtNC45MjItOS4wNDUtMy4zNzZaTTI0LjgxNCAyMS43M2wtMi45NTYgNC41MTcgNi4zMyAxLjc0MyAxLjgxNC02LjE2LTUuMTg4LS4xWk0yLjAwOSAyMS44M2wxLjgwMiA2LjE2IDYuMzItMS43NDMtMi45NDYtNC41MTctNS4xNzYuMVoiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIvPjxwYXRoIGQ9Im05Ljc5IDE0LjEtMS43NTggMi42NTQgNi4yNjQuMjg1LS4yMDgtNi43NDJMOS43OSAxNC4xWk0yMi4yMSAxNC4xMDFsLTQuMzY0LTMuODgtLjE0MiA2LjgxOCA2LjI2NC0uMjg1TDIyLjIxIDE0LjFaTTEwLjEzMSAyNi4yNDdsMy43OTItMS44My0zLjI2NC0yLjU0NC0uNTI4IDQuMzc0Wk0xOC4wNzggMjQuNDE2bDMuNzggMS44MzEtLjUxNi00LjM3NC0zLjI2NCAyLjU0M1oiIGZpbGw9IiNFMjc2MjUiIHN0cm9rZT0iI0UyNzYyNSIvPjxwYXRoIGQ9Im0yMS44NTggMjYuMjQ3LTMuNzgtMS44My4zMDcgMi40NTUtLjAzMyAxLjA0MiAzLjUwNi0xLjY2N1pNMTAuMTMxIDI2LjI0N2wzLjUxOCAxLjY2Ny0uMDIyLTEuMDQyLjI5Ni0yLjQ1NS0zLjc5MiAxLjgzWiIgZmlsbD0iI0Q1QkZCMiIgc3Ryb2tlPSIjRDVCRkIyIi8+PHBhdGggZD0ibTEzLjcxNCAyMC4yNS0zLjE0NC0uOTIgMi4yMi0xLjAyLjkyNCAxLjk0Wk0xOC4yODYgMjAuMjVsLjkyMy0xLjk0IDIuMjMyIDEuMDItMy4xNTUuOTJaIiBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciLz48cGF0aCBkPSJtMTAuMTMxIDI2LjI0Ny41NS00LjUxNy0zLjQ5NS4xIDIuOTQ1IDQuNDE3Wk0yMS4zMiAyMS43M2wuNTM4IDQuNTE3IDIuOTU2LTQuNDE4LTMuNDk1LS4wOTlaTTIzLjk2OCAxNi43NTNsLTYuMjY0LjI4NS41ODIgMy4yMTIuOTIzLTEuOTQgMi4yMzIgMS4wMiAyLjUyNy0yLjU3N1pNMTAuNTcgMTkuMzNsMi4yMi0xLjAyLjkyNCAxLjk0LjU4Mi0zLjIxMi02LjI2NC0uMjg1IDIuNTM5IDIuNTc2WiIgZmlsbD0iI0NDNjIyOCIgc3Ryb2tlPSIjQ0M2MjI4Ii8+PHBhdGggZD0ibTguMDMyIDE2Ljc1MyAyLjYyNyA1LjEyLS4wODgtMi41NDQtMi41NC0yLjU3NlpNMjEuNDQgMTkuMzNsLS4wOTggMi41NDMgMi42MjctNS4xMi0yLjUyOCAyLjU3NlpNMTQuMjk2IDE3LjAzOGwtLjU4MiAzLjIxMi43MzYgMy43OTQuMTY1LTUtLjMxOS0yLjAwNlpNMTcuNzA0IDE3LjAzOGwtLjMwOCAxLjk5Ni4xNTQgNS4wMS43MzYtMy43OTQtLjU4Mi0zLjIxMloiIGZpbGw9IiNFMjc1MjUiIHN0cm9rZT0iI0UyNzUyNSIvPjxwYXRoIGQ9Im0xOC4yODYgMjAuMjUtLjczNiAzLjc5NC41MjcuMzcyIDMuMjY1LTIuNTQzLjA5OS0yLjU0My0zLjE1NS45MlpNMTAuNTcgMTkuMzNsLjA4OCAyLjU0MyAzLjI2NCAyLjU0My41MjgtLjM3Mi0uNzM2LTMuNzkzLTMuMTQ0LS45MjFaIiBmaWxsPSIjRjU4NDFGIiBzdHJva2U9IiNGNTg0MUYiLz48cGF0aCBkPSJtMTguMzUzIDI3LjkxMy4wMzItMS4wNC0uMjg1LS4yNDJIMTMuOWwtLjI3NC4yNDEuMDIxIDEuMDQxLTMuNTE3LTEuNjY2IDEuMjMxIDEuMDA5IDIuNDk1IDEuNzJoNC4yNzZsMi41MDYtMS43MiAxLjIyLTEuMDA5LTMuNTA2IDEuNjY2WiIgZmlsbD0iI0MwQUM5RCIgc3Ryb2tlPSIjQzBBQzlEIi8+PHBhdGggZD0ibTE4LjA3NyAyNC40MTYtLjUyNy0uMzcyaC0zLjFsLS41MjcuMzcyLS4yOTcgMi40NTYuMjc1LS4yNDFoNC4xOThsLjI4Ni4yNDEtLjMwOC0yLjQ1NloiIGZpbGw9IiMxNjE2MTYiIHN0cm9rZT0iIzE2MTYxNiIvPjxwYXRoIGQ9Im0yOS4yODggMTEuNDI2LjkzNS00LjUzOS0xLjQwNy00LjIyLTEwLjczOCA3Ljk0OEwyMi4yMSAxNC4xbDUuODM2IDEuNjk5IDEuMjg2LTEuNTAyLS41Ni0uNDA2Ljg5LS44MS0uNjgxLS41MjcuODktLjY4LS41ODMtLjQ1Wk0xLjc3OCA2Ljg4N2wuOTQ1IDQuNTM5LS42MDQuNDUuOS42NzktLjY4LjUyNi44OS44MTEtLjU2LjQwNkwzLjk1MyAxNS44bDUuODM2LTEuNyA0LjEzMy0zLjQ4NUwzLjE4NSAyLjY2N2wtMS40MDcgNC4yMloiIGZpbGw9IiM3NjNFMUEiIHN0cm9rZT0iIzc2M0UxQSIvPjxwYXRoIGQ9Im0yOC4wNDYgMTUuOC01LjgzNi0xLjcgMS43NTkgMi42NTQtMi42MjcgNS4xMiAzLjQ3My0uMDQ0aDUuMTg4bC0xLjk1Ny02LjAzWk05Ljc5IDE0LjFsLTUuODM2IDEuNy0xLjk0NSA2LjAzaDUuMTc2bDMuNDc0LjA0My0yLjYyNy01LjEyIDEuNzU4LTIuNjUyWk0xNy43MDMgMTcuMDM5bC4zNzQtNi40MjQgMS42OTMtNC41NzJoLTcuNTRsMS42OTIgNC41NzIuMzc0IDYuNDI0LjE0MyAyLjAxNy4wMTEgNC45ODhoMy4xbC4wMS00Ljk4OC4xNDMtMi4wMTdaIiBmaWxsPSIjRjU4NDFGIiBzdHJva2U9IiNGNTg0MUYiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjc3OCAyLjY2NykiIGQ9Ik0wIDBoMjguNDQ1djI2LjMxSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/wallet_walletconnect.svg
var wallet_walletconnect_defProp = Object.defineProperty;
var wallet_walletconnect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var wallet_walletconnect_hasOwnProp = Object.prototype.hasOwnProperty;
var wallet_walletconnect_propIsEnum = Object.prototype.propertyIsEnumerable;
var wallet_walletconnect_defNormalProp = (obj, key, value) => key in obj ? wallet_walletconnect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var wallet_walletconnect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (wallet_walletconnect_hasOwnProp.call(b, prop))
      wallet_walletconnect_defNormalProp(a, prop, b[prop]);
  if (wallet_walletconnect_getOwnPropSymbols)
    for (var prop of wallet_walletconnect_getOwnPropSymbols(b)) {
      if (wallet_walletconnect_propIsEnum.call(b, prop))
        wallet_walletconnect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgWalletWalletconnect = (props) => /* @__PURE__ */ React.createElement("svg", wallet_walletconnect_spreadValues({ width: 32, height: 32, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("path", { d: "M6.551 10.054c5.219-5.11 13.68-5.11 18.898 0l.628.615c.26.256.26.67 0 .925l-2.148 2.104a.34.34 0 0 1-.473 0l-.864-.846c-3.64-3.565-9.543-3.565-13.184 0l-.925.906a.34.34 0 0 1-.473 0l-2.148-2.104a.645.645 0 0 1 0-.925l.69-.675Zm23.341 4.35 1.912 1.873c.261.255.261.67 0 .925l-8.622 8.441a.678.678 0 0 1-.944 0l-6.12-5.99a.17.17 0 0 0-.236 0l-6.12 5.99a.678.678 0 0 1-.944 0L.196 17.203a.644.644 0 0 1 0-.926l1.912-1.872a.678.678 0 0 1 .945 0l6.12 5.992a.17.17 0 0 0 .235 0l6.12-5.992a.678.678 0 0 1 .944 0l6.12 5.992a.17.17 0 0 0 .236 0l6.12-5.992a.678.678 0 0 1 .944 0Z", fill: "#3B99FC" }));

/* harmony default export */ var wallet_walletconnect = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNTUxIDEwLjA1NGM1LjIxOS01LjExIDEzLjY4LTUuMTEgMTguODk4IDBsLjYyOC42MTVjLjI2LjI1Ni4yNi42NyAwIC45MjVsLTIuMTQ4IDIuMTA0YS4zNC4zNCAwIDAgMS0uNDczIDBsLS44NjQtLjg0NmMtMy42NC0zLjU2NS05LjU0My0zLjU2NS0xMy4xODQgMGwtLjkyNS45MDZhLjM0LjM0IDAgMCAxLS40NzMgMGwtMi4xNDgtMi4xMDRhLjY0NS42NDUgMCAwIDEgMC0uOTI1bC42OS0uNjc1Wm0yMy4zNDEgNC4zNSAxLjkxMiAxLjg3M2MuMjYxLjI1NS4yNjEuNjcgMCAuOTI1bC04LjYyMiA4LjQ0MWEuNjc4LjY3OCAwIDAgMS0uOTQ0IDBsLTYuMTItNS45OWEuMTcuMTcgMCAwIDAtLjIzNiAwbC02LjEyIDUuOTlhLjY3OC42NzggMCAwIDEtLjk0NCAwTC4xOTYgMTcuMjAzYS42NDQuNjQ0IDAgMCAxIDAtLjkyNmwxLjkxMi0xLjg3MmEuNjc4LjY3OCAwIDAgMSAuOTQ1IDBsNi4xMiA1Ljk5MmEuMTcuMTcgMCAwIDAgLjIzNSAwbDYuMTItNS45OTJhLjY3OC42NzggMCAwIDEgLjk0NCAwbDYuMTIgNS45OTJhLjE3LjE3IDAgMCAwIC4yMzYgMGw2LjEyLTUuOTkyYS42NzguNjc4IDAgMCAxIC45NDQgMFoiIGZpbGw9IiMzQjk5RkMiLz48L3N2Zz4=");

// EXTERNAL MODULE: ./node_modules/@davatar/react/dist/index.js
var react_dist = __webpack_require__(610);
var dist_default = /*#__PURE__*/__webpack_require__.n(react_dist);
// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var lib = __webpack_require__(74855);
;// CONCATENATED MODULE: ./src/assets/copy.svg
var copy_defProp = Object.defineProperty;
var copy_getOwnPropSymbols = Object.getOwnPropertySymbols;
var copy_hasOwnProp = Object.prototype.hasOwnProperty;
var copy_propIsEnum = Object.prototype.propertyIsEnumerable;
var copy_defNormalProp = (obj, key, value) => key in obj ? copy_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var copy_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (copy_hasOwnProp.call(b, prop))
      copy_defNormalProp(a, prop, b[prop]);
  if (copy_getOwnPropSymbols)
    for (var prop of copy_getOwnPropSymbols(b)) {
      if (copy_propIsEnum.call(b, prop))
        copy_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgCopy = (props) => /* @__PURE__ */ react.createElement("svg", copy_spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M17.25 8.5h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.25v-7a1.75 1.75 0 0 0-1.75-1.75Z", stroke: "#9597B5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ react.createElement("path", { d: "M15.5 8.5V6.75A1.75 1.75 0 0 0 13.75 5h-7A1.75 1.75 0 0 0 5 6.75v7a1.75 1.75 0 0 0 1.75 1.75H8.5", stroke: "#9597B5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }));

/* harmony default export */ var copy = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjI1IDguNWgtN2ExLjc1IDEuNzUgMCAwIDAtMS43NSAxLjc1djdjMCAuOTY2Ljc4NCAxLjc1IDEuNzUgMS43NWg3QTEuNzUgMS43NSAwIDAgMCAxOSAxNy4yNXYtN2ExLjc1IDEuNzUgMCAwIDAtMS43NS0xLjc1WiIgc3Ryb2tlPSIjOTU5N0I1IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE1LjUgOC41VjYuNzVBMS43NSAxLjc1IDAgMCAwIDEzLjc1IDVoLTdBMS43NSAxLjc1IDAgMCAwIDUgNi43NXY3YTEuNzUgMS43NSAwIDAgMCAxLjc1IDEuNzVIOC41IiBzdHJva2U9IiM5NTk3QjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=");

// EXTERNAL MODULE: ./src/components/Modal/index.tsx + 2 modules
var Modal = __webpack_require__(69499);
// EXTERNAL MODULE: ./src/config/chains.ts
var chains = __webpack_require__(13805);
// EXTERNAL MODULE: ./src/config/localStorage.ts
var config_localStorage = __webpack_require__(22837);
// EXTERNAL MODULE: ./src/lib/helperToast.ts
var helperToast = __webpack_require__(71874);
// EXTERNAL MODULE: ./src/lib/rpc/index.ts
var rpc = __webpack_require__(1403);
;// CONCATENATED MODULE: ./src/components/AccountDropdown/account.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var account_modulemodules = ({"connected":"connected___OGUDJ","account":"account___CvyzN","connectedInfo":"connectedInfo___Tl7iT","tip":"tip___vJOBE","btns":"btns___SU7LM","btn":"btn___PUgd5","addressBox":"addressBox___HS0X_"});
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/components/AccountDropdown/index.tsx















var AccountDropdown = function AccountDropdown(props) {
  var account = props.account,
    accountUrl = props.accountUrl;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useJsonRpcProvider = (0,rpc/* useJsonRpcProvider */.E)(chains/* ETH_MAINNET */.p4),
    ethereumProvider = _useJsonRpcProvider.provider;
  var providerName = (0,react.useMemo)(function () {
    return window.localStorage.getItem(config_localStorage/* CURRENT_PROVIDER_LOCALSTORAGE_KEY */.Wr);
  }, []);
  function onDisconnect() {
    props.onDisconnect(function () {
      return setVisible(false);
    });
  }
  var displayAccount = (0,react.useMemo)(function () {
    if (!account) {
      return account;
    }
    if (account.length > 13) {
      return "".concat(account.slice(0, 5), "...").concat(account.slice(account.length - 4));
    }
    return account;
  }, [account]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* default */.Z, {
      width: 560,
      title: "Account",
      visible: visible,
      onClose: function onClose() {
        return setVisible(false);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: account_modulemodules.connectedInfo,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: account_modulemodules.addressBox,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: account_modulemodules.address,
              children: displayAccount
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(lib.CopyToClipboard, {
              text: account,
              onCopy: function onCopy() {
                helperToast/* helperToast.success */.U.success('Address copied to your clipboard');
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgCopy, {})
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: account_modulemodules.tip,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
            id: "Connected with ".concat(providerName)
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: account_modulemodules.btns,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            className: account_modulemodules.btn,
            href: accountUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [' ', /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "View on Explorer"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
            type: "button",
            onClick: onDisconnect,
            className: account_modulemodules.btn,
            children: [' ', /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Disconnect"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: account_modulemodules.connected,
      onClick: function onClick() {
        setVisible(true);
      },
      children: [ethereumProvider && /*#__PURE__*/(0,jsx_runtime.jsx)((dist_default()), {
        size: 24,
        address: account,
        provider: ethereumProvider
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: account_modulemodules.account,
        children: displayAccount
      })]
    })]
  });
};
/* harmony default export */ var components_AccountDropdown = (AccountDropdown);
// EXTERNAL MODULE: ./src/components/App/state.ts
var state = __webpack_require__(74595);
// EXTERNAL MODULE: ./src/lib/chains/index.ts
var lib_chains = __webpack_require__(37432);
// EXTERNAL MODULE: ./src/lib/legacy.ts
var legacy = __webpack_require__(21650);
// EXTERNAL MODULE: ./src/lib/wallets.tsx
var wallets = __webpack_require__(16330);
;// CONCATENATED MODULE: ./src/assets/bnb_24.svg
var bnb_24_defProp = Object.defineProperty;
var bnb_24_getOwnPropSymbols = Object.getOwnPropertySymbols;
var bnb_24_hasOwnProp = Object.prototype.hasOwnProperty;
var bnb_24_propIsEnum = Object.prototype.propertyIsEnumerable;
var bnb_24_defNormalProp = (obj, key, value) => key in obj ? bnb_24_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var bnb_24_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (bnb_24_hasOwnProp.call(b, prop))
      bnb_24_defNormalProp(a, prop, b[prop]);
  if (bnb_24_getOwnPropSymbols)
    for (var prop of bnb_24_getOwnPropSymbols(b)) {
      if (bnb_24_propIsEnum.call(b, prop))
        bnb_24_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgBnb24 = (props) => /* @__PURE__ */ React.createElement("svg", bnb_24_spreadValues({ height: 104.207, width: 88.935, xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("path", { d: "M54.499 86.54v11.679l-10.181 5.988-9.882-5.988V86.54l9.882 5.989zm-54.5-40.425 9.882 5.989v20.063l17.068 10.181v11.679L-.001 78.156zm88.635 0v32.041L61.385 94.027v-11.68l17.068-10.181V52.104zM61.386 30.24l10.181 5.988v11.679L54.499 58.088v20.363l-9.882 5.989-9.882-5.988v-20.36L17.068 47.911V36.233l10.181-5.988 17.069 10.181zM17.068 56.292l9.882 5.988v11.679l-9.882-5.988zm54.5 0v11.679l-9.882 5.988V62.284zM9.88 20.063l10.181 5.989L9.88 32.04v11.679l-9.882-5.988V26.052zm68.873 0 10.181 5.989v11.679l-10.181 5.988V32.04l-9.882-5.988zm-34.436 0 10.181 5.989-10.18 5.988-9.882-5.988zm0-20.063 27.249 15.871-9.882 5.988-17.068-10.181L27.249 21.86l-9.882-5.988z", fill: "#f3ba2f" }));

/* harmony default export */ var bnb_24 = ("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwNC4yMDciIHdpZHRoPSI4OC45MzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjQ5OSA4Ni41NHYxMS42NzlsLTEwLjE4MSA1Ljk4OC05Ljg4Mi01Ljk4OFY4Ni41NGw5Ljg4MiA1Ljk4OXptLTU0LjUtNDAuNDI1IDkuODgyIDUuOTg5djIwLjA2M2wxNy4wNjggMTAuMTgxdjExLjY3OUwtLjAwMSA3OC4xNTZ6bTg4LjYzNSAwdjMyLjA0MUw2MS4zODUgOTQuMDI3di0xMS42OGwxNy4wNjgtMTAuMTgxVjUyLjEwNHpNNjEuMzg2IDMwLjI0bDEwLjE4MSA1Ljk4OHYxMS42NzlMNTQuNDk5IDU4LjA4OHYyMC4zNjNsLTkuODgyIDUuOTg5LTkuODgyLTUuOTg4di0yMC4zNkwxNy4wNjggNDcuOTExVjM2LjIzM2wxMC4xODEtNS45ODggMTcuMDY5IDEwLjE4MXpNMTcuMDY4IDU2LjI5Mmw5Ljg4MiA1Ljk4OHYxMS42NzlsLTkuODgyLTUuOTg4em01NC41IDB2MTEuNjc5bC05Ljg4MiA1Ljk4OFY2Mi4yODR6TTkuODggMjAuMDYzbDEwLjE4MSA1Ljk4OUw5Ljg4IDMyLjA0djExLjY3OWwtOS44ODItNS45ODhWMjYuMDUyem02OC44NzMgMCAxMC4xODEgNS45ODl2MTEuNjc5bC0xMC4xODEgNS45ODhWMzIuMDRsLTkuODgyLTUuOTg4em0tMzQuNDM2IDAgMTAuMTgxIDUuOTg5LTEwLjE4IDUuOTg4LTkuODgyLTUuOTg4em0wLTIwLjA2MyAyNy4yNDkgMTUuODcxLTkuODgyIDUuOTg4LTE3LjA2OC0xMC4xODFMMjcuMjQ5IDIxLjg2bC05Ljg4Mi01Ljk4OHoiIGZpbGw9IiNmM2JhMmYiLz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/ic_arbitrum_24.svg
var ic_arbitrum_24_defProp = Object.defineProperty;
var ic_arbitrum_24_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ic_arbitrum_24_hasOwnProp = Object.prototype.hasOwnProperty;
var ic_arbitrum_24_propIsEnum = Object.prototype.propertyIsEnumerable;
var ic_arbitrum_24_defNormalProp = (obj, key, value) => key in obj ? ic_arbitrum_24_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ic_arbitrum_24_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ic_arbitrum_24_hasOwnProp.call(b, prop))
      ic_arbitrum_24_defNormalProp(a, prop, b[prop]);
  if (ic_arbitrum_24_getOwnPropSymbols)
    for (var prop of ic_arbitrum_24_getOwnPropSymbols(b)) {
      if (ic_arbitrum_24_propIsEnum.call(b, prop))
        ic_arbitrum_24_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgIcArbitrum24 = (props) => /* @__PURE__ */ React.createElement("svg", ic_arbitrum_24_spreadValues({ height: 24.003, width: 24, xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M23.639 14.901A12 12 0 1 1 14.9.361a12 12 0 0 1 8.739 14.54z", fill: "#2d374b" }), /* @__PURE__ */ React.createElement("path", { d: "m14.295 11.15 1.5-2.539 4.033 6.281v1.205l-.019-8.293a.625.625 0 0 0-.289-.5l-7.26-4.176a.64.64 0 0 0-.555 0 .6.6 0 0 0-.065.038l-.025.016L4.571 7.27l-.027.012a.637.637 0 0 0-.1.061.627.627 0 0 0-.26.47l.011 6.759L7.951 8.75a2.754 2.754 0 0 1 2.46-1.007l1.123.03L4.915 18.38l.78.449 6.694-11.046 2.959-.011-6.677 11.325 2.782 1.6.332.191a.638.638 0 0 0 .448.009l7.362-4.266-1.408.816zm.571 8.221-2.81-4.41 1.715-2.911 3.691 5.817z", fill: "#2d374b" }), /* @__PURE__ */ React.createElement("path", { d: "m12.056 14.961 2.81 4.41 2.6-1.5-3.691-5.817zM19.826 16.098v-1.205l-4.033-6.281-1.5 2.539 3.893 6.3 1.408-.816a.624.624 0 0 0 .23-.454z", fill: "#28a0f0" }), /* @__PURE__ */ React.createElement("path", { d: "m2.927 17.234 1.988 1.145 6.614-10.608-1.123-.03a2.754 2.754 0 0 0-2.46 1.007L4.19 14.57l-1.264 1.942zM15.346 7.772l-2.959.011-6.693 11.046 2.34 1.347.636-1.079z", fill: "#fff" }), /* @__PURE__ */ React.createElement("path", { d: "M21.072 7.757a1.885 1.885 0 0 0-.885-1.515l-7.355-4.23a1.913 1.913 0 0 0-1.688 0c-.061.031-7.153 4.144-7.153 4.144a1.882 1.882 0 0 0-1.065 1.6v8.76l1.264-1.942-.011-6.759a.6.6 0 0 1 .009-.073.622.622 0 0 1 .251-.4c.033-.024 7.246-4.2 7.269-4.21a.64.64 0 0 1 .555 0l7.26 4.176a.625.625 0 0 1 .289.5v8.373a.61.61 0 0 1-.217.454l-1.408.816-.726.421-2.6 1.5-2.628 1.527a.638.638 0 0 1-.448-.009L8.67 19.099l-.636 1.079 2.8 1.612.243.137c.1.059.176.1.2.11a1.818 1.818 0 0 0 .743.153 1.871 1.871 0 0 0 .689-.131l7.646-4.428a1.87 1.87 0 0 0 .72-1.408z", fill: "#96bedc" }));

/* harmony default export */ var ic_arbitrum_24 = ("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0LjAwMyIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjMuNjM5IDE0LjkwMUExMiAxMiAwIDEgMSAxNC45LjM2MWExMiAxMiAwIDAgMSA4LjczOSAxNC41NHoiIGZpbGw9IiMyZDM3NGIiLz48cGF0aCBkPSJtMTQuMjk1IDExLjE1IDEuNS0yLjUzOSA0LjAzMyA2LjI4MXYxLjIwNWwtLjAxOS04LjI5M2EuNjI1LjYyNSAwIDAgMC0uMjg5LS41bC03LjI2LTQuMTc2YS42NC42NCAwIDAgMC0uNTU1IDAgLjYuNiAwIDAgMC0uMDY1LjAzOGwtLjAyNS4wMTZMNC41NzEgNy4yN2wtLjAyNy4wMTJhLjYzNy42MzcgMCAwIDAtLjEuMDYxLjYyNy42MjcgMCAwIDAtLjI2LjQ3bC4wMTEgNi43NTlMNy45NTEgOC43NWEyLjc1NCAyLjc1NCAwIDAgMSAyLjQ2LTEuMDA3bDEuMTIzLjAzTDQuOTE1IDE4LjM4bC43OC40NDkgNi42OTQtMTEuMDQ2IDIuOTU5LS4wMTEtNi42NzcgMTEuMzI1IDIuNzgyIDEuNi4zMzIuMTkxYS42MzguNjM4IDAgMCAwIC40NDguMDA5bDcuMzYyLTQuMjY2LTEuNDA4LjgxNnptLjU3MSA4LjIyMS0yLjgxLTQuNDEgMS43MTUtMi45MTEgMy42OTEgNS44MTd6IiBmaWxsPSIjMmQzNzRiIi8+PHBhdGggZD0ibTEyLjA1NiAxNC45NjEgMi44MSA0LjQxIDIuNi0xLjUtMy42OTEtNS44MTd6TTE5LjgyNiAxNi4wOTh2LTEuMjA1bC00LjAzMy02LjI4MS0xLjUgMi41MzkgMy44OTMgNi4zIDEuNDA4LS44MTZhLjYyNC42MjQgMCAwIDAgLjIzLS40NTR6IiBmaWxsPSIjMjhhMGYwIi8+PHBhdGggZD0ibTIuOTI3IDE3LjIzNCAxLjk4OCAxLjE0NSA2LjYxNC0xMC42MDgtMS4xMjMtLjAzYTIuNzU0IDIuNzU0IDAgMCAwLTIuNDYgMS4wMDdMNC4xOSAxNC41N2wtMS4yNjQgMS45NDJ6TTE1LjM0NiA3Ljc3MmwtMi45NTkuMDExLTYuNjkzIDExLjA0NiAyLjM0IDEuMzQ3LjYzNi0xLjA3OXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjEuMDcyIDcuNzU3YTEuODg1IDEuODg1IDAgMCAwLS44ODUtMS41MTVsLTcuMzU1LTQuMjNhMS45MTMgMS45MTMgMCAwIDAtMS42ODggMGMtLjA2MS4wMzEtNy4xNTMgNC4xNDQtNy4xNTMgNC4xNDRhMS44ODIgMS44ODIgMCAwIDAtMS4wNjUgMS42djguNzZsMS4yNjQtMS45NDItLjAxMS02Ljc1OWEuNi42IDAgMCAxIC4wMDktLjA3My42MjIuNjIyIDAgMCAxIC4yNTEtLjRjLjAzMy0uMDI0IDcuMjQ2LTQuMiA3LjI2OS00LjIxYS42NC42NCAwIDAgMSAuNTU1IDBsNy4yNiA0LjE3NmEuNjI1LjYyNSAwIDAgMSAuMjg5LjV2OC4zNzNhLjYxLjYxIDAgMCAxLS4yMTcuNDU0bC0xLjQwOC44MTYtLjcyNi40MjEtMi42IDEuNS0yLjYyOCAxLjUyN2EuNjM4LjYzOCAwIDAgMS0uNDQ4LS4wMDlMOC42NyAxOS4wOTlsLS42MzYgMS4wNzkgMi44IDEuNjEyLjI0My4xMzdjLjEuMDU5LjE3Ni4xLjIuMTFhMS44MTggMS44MTggMCAwIDAgLjc0My4xNTMgMS44NzEgMS44NzEgMCAwIDAgLjY4OS0uMTMxbDcuNjQ2LTQuNDI4YTEuODcgMS44NyAwIDAgMCAuNzItMS40MDh6IiBmaWxsPSIjOTZiZWRjIi8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/ic_avalanche_24.svg
var ic_avalanche_24_defProp = Object.defineProperty;
var ic_avalanche_24_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ic_avalanche_24_hasOwnProp = Object.prototype.hasOwnProperty;
var ic_avalanche_24_propIsEnum = Object.prototype.propertyIsEnumerable;
var ic_avalanche_24_defNormalProp = (obj, key, value) => key in obj ? ic_avalanche_24_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ic_avalanche_24_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ic_avalanche_24_hasOwnProp.call(b, prop))
      ic_avalanche_24_defNormalProp(a, prop, b[prop]);
  if (ic_avalanche_24_getOwnPropSymbols)
    for (var prop of ic_avalanche_24_getOwnPropSymbols(b)) {
      if (ic_avalanche_24_propIsEnum.call(b, prop))
        ic_avalanche_24_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgIcAvalanche24 = (props) => /* @__PURE__ */ React.createElement("svg", ic_avalanche_24_spreadValues({ height: 24, width: 24, xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ React.createElement("circle", { cx: 12, cy: 12, fill: "#e84142", r: 12 }), /* @__PURE__ */ React.createElement("path", { d: "M15.548 12.033a.665.665 0 0 1 1.259 0l2.17 3.809c.348.6.063 1.093-.633 1.093h-4.371c-.689 0-.974-.491-.634-1.093zm-4.2-7.333a.659.659 0 0 1 1.251 0l.483.871 1.14 2a2.081 2.081 0 0 1 0 1.813l-3.825 6.628a2.011 2.011 0 0 1-1.568.919H5.653c-.7 0-.982-.483-.633-1.093z", fill: "#fff" }));

/* harmony default export */ var ic_avalanche_24 = ("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgZmlsbD0iI2U4NDE0MiIgcj0iMTIiLz48cGF0aCBkPSJNMTUuNTQ4IDEyLjAzM2EuNjY1LjY2NSAwIDAgMSAxLjI1OSAwbDIuMTcgMy44MDljLjM0OC42LjA2MyAxLjA5My0uNjMzIDEuMDkzaC00LjM3MWMtLjY4OSAwLS45NzQtLjQ5MS0uNjM0LTEuMDkzem0tNC4yLTcuMzMzYS42NTkuNjU5IDAgMCAxIDEuMjUxIDBsLjQ4My44NzEgMS4xNCAyYTIuMDgxIDIuMDgxIDAgMCAxIDAgMS44MTNsLTMuODI1IDYuNjI4YTIuMDExIDIuMDExIDAgMCAxLTEuNTY4LjkxOUg1LjY1M2MtLjcgMC0uOTgyLS40ODMtLjYzMy0xLjA5M3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/components/NetWorkSelect/network.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var network_modulemodules = ({"currentNetWord":"currentNetWord___jQ9te","selectorIcon":"selectorIcon___gcIPH","tip":"tip___cTqc9","item":"item___eC3Be","img":"img___uT2Jg","check":"check___Gnri2","checked":"checked___FO674","label":"label___Y6UW5"});
;// CONCATENATED MODULE: ./src/components/NetWorkSelect/index.tsx
















// interface INetworkOption {
//   label: string;
//   value: number;
//   icon: string;
// }
var NetWorkSelectProps = function NetWorkSelectProps(props) {
  var chainId = props.chainId;
  //console.log('chainId', chainId)
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    active = _useWeb3React.active;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var networkOptions = (0,react.useMemo)(function () {
    var options = [{
      label: (0,chains/* getChainName */.qz)(chains/* AVALANCHE_FUJITEST */.bx),
      value: chains/* AVALANCHE_FUJITEST */.bx,
      icon: ic_avalanche_24
    }, {
      label: (0,chains/* getChainName */.qz)(chains/* LOCAL */.Fe),
      value: chains/* LOCAL */.Fe,
      icon: bnb_24
    }, {
      label: (0,chains/* getChainName */.qz)(chains/* GOERLI */.vT),
      value: chains/* GOERLI */.vT,
      icon: ic_arbitrum_24
    }];
    // if (isDevelopment()) {
    //     networkOptions.push({
    //         label: getChainName(ARBITRUM_TESTNET),
    //         value: ARBITRUM_TESTNET,
    //         icon: ArbitrumUrl
    //     });
    // }
    return options;
  }, []);
  var onNetworkSelect = function onNetworkSelect(value) {
    if (value === chainId) {
      return;
    }
    return (0,wallets/* switchNetwork */.If)(value, active);
  };
  function getSelectorIconUrl() {
    var _find;
    return (_find = (networkOptions || []).find(function (v) {
      return v.value === chainId;
    })) === null || _find === void 0 ? void 0 : _find.icon;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      width: 560,
      title: "Networks",
      visible: visible,
      onClose: function onClose() {
        return setVisible(false);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: network_modulemodules.list,
        children: (networkOptions || []).map(function (it) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            onClick: function onClick() {
              return onNetworkSelect(it.value);
            },
            className: classnames_default()(network_modulemodules.item, defineProperty_default()({}, network_modulemodules.checked, it.value === chainId)),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: network_modulemodules.check
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: network_modulemodules.label,
              children: it.label
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              className: network_modulemodules.img,
              src: it.icon
            })]
          }, it.value);
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: network_modulemodules.tip,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
          id: "No assets yet\uFF1FYou can bridge ETH from another network, transfer ETH from an exchange. "
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: network_modulemodules.currentNetWord,
      onClick: function onClick() {
        setVisible(true);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        className: network_modulemodules.selectorIcon,
        src: getSelectorIconUrl()
      })
    })]
  });
};
/* harmony default export */ var NetWorkSelect = (NetWorkSelectProps);
;// CONCATENATED MODULE: ./src/components/GlobalOptions/index.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_modulemodules = ({"globalOptions":"globalOptions___FHtJP","connectBtn":"connectBtn____Ddwl","switchNetBox":"switchNetBox___cSxbv","tip":"tip___QXBhL","switchNetBtn":"switchNetBtn___HKdma","wallet":"wallet___jA126","icon":"icon____6O8f","errorTip":"errorTip___YncT6","walletDisable":"walletDisable___lDUYg"});
;// CONCATENATED MODULE: ./src/components/GlobalOptions/index.tsx

























var GlobalOptions = function GlobalOptions(props) {
  var _useChainId = (0,lib_chains/* useChainId */.x)(),
    chainId = _useChainId.chainId;
  var setActivatingConnector = props.setActivatingConnector;
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    deactivate = _useWeb3React.deactivate,
    activate = _useWeb3React.activate,
    active = _useWeb3React.active,
    account = _useWeb3React.account;
  var _AppContext$useContai = state/* AppContext.useContainer */.I.useContainer(),
    walletVisible = _AppContext$useContai.walletVisible,
    setWalletVisible = _AppContext$useContai.setWalletVisible;
  var connectInjectedWallet = (0,wallets/* getInjectedHandler */._G)(activate, deactivate);
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    showSwitchNetwork = _useState2[0],
    setShowSwitchNetwork = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    errorTip = _useState4[0],
    setErrorTip = _useState4[1];
  var _useState5 = (0,react.useState)(Object.create(null)),
    _useState6 = slicedToArray_default()(_useState5, 2),
    disableProviderMap = _useState6[0],
    setDisableProviderMap = _useState6[1];
  var attemptActivateWallet = function attemptActivateWallet(providerName) {
    setErrorTip('');
    localStorage.setItem(config_localStorage/* SHOULD_EAGER_CONNECT_LOCALSTORAGE_KEY */.Cs, 'true');
    localStorage.setItem(config_localStorage/* CURRENT_PROVIDER_LOCALSTORAGE_KEY */.Wr, providerName);
    (0,wallets/* activateInjectedProvider */.nu)(providerName);
    connectInjectedWallet().then(function () {
      setWalletVisible(false);
    }, function (msg) {
      // debugger
      if (msg) {
        helperToast/* helperToast.error */.U.error(msg);
        return;
      }
      setDisableProviderMap(objectSpread2_default()(objectSpread2_default()({}, disableProviderMap), {}, defineProperty_default()({}, providerName, true)));
      setShowSwitchNetwork(true);
    });
  };
  var activateMetaMask = function activateMetaMask() {
    if (!(0,wallets/* hasMetaMaskWalletExtension */.qd)()) {
      setErrorTip('MetaMask Wallet not detected.\n\r Install MetaMask Wallet to start using Depx.');
      return false;
    }
    attemptActivateWallet('MetaMask');
  };

  // const activateCoinBase = () => {
  //   if (!hasCoinBaseWalletExtension()) {
  //     setErrorTip('Coinbase Wallet not detected.\n\r Install Coinbase Wallet to start using Depx.');
  //     return false;
  //   }
  //   attemptActivateWallet("CoinBase");
  // };
  var activateWalletConnect = function activateWalletConnect() {
    localStorage.setItem(config_localStorage/* CURRENT_PROVIDER_LOCALSTORAGE_KEY */.Wr, 'WalletConnect');
    (0,wallets/* getWalletConnectHandler */.a_)(activate, deactivate, setActivatingConnector)();
  };
  var walletList = [{
    title: 'MetaMask',
    iconUrl: wallet_metamask,
    active: activateMetaMask,
    providerName: 'MetaMask'
  }, {
    title: 'Wallet Connect',
    iconUrl: wallet_walletconnect,
    active: activateWalletConnect,
    providerName: 'WalletConnect'
  }];
  var disconnectAccount = (0,react.useCallback)(function () {
    (0,wallets/* clearWalletConnectData */.VK)();
    // force clear localStorage connection for MM/CB Wallet (Brave legacy)
    (0,wallets/* clearWalletLinkData */.hL)();
    deactivate();
  }, [deactivate]);
  function onDisconnect(closeModal) {
    disconnectAccount();
    localStorage.removeItem(config_localStorage/* SHOULD_EAGER_CONNECT_LOCALSTORAGE_KEY */.Cs);
    localStorage.removeItem(config_localStorage/* CURRENT_PROVIDER_LOCALSTORAGE_KEY */.Wr);
    closeModal();
  }
  function renderWalletActive() {
    if (!account || !active) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* default */.Z, {
          title: "Connect Wallet",
          visible: walletVisible,
          onClose: function onClose() {
            return setWalletVisible(false);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [walletList.map(function (w) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(index_modulemodules.wallet, defineProperty_default()({}, index_modulemodules.walletDisable, disableProviderMap[w.providerName])),
                onClick: function onClick() {
                  if (!disableProviderMap[w.providerName]) {
                    w.active();
                  }
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: w.title
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: w.iconUrl,
                  className: index_modulemodules.icon
                })]
              }, w.title);
            }), errorTip && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: index_modulemodules.errorTip,
              children: errorTip
            }), showSwitchNetwork && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: index_modulemodules.switchNetBox,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: index_modulemodules.tip,
                children: "Your wallet is not connected to Arbitrum."
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: index_modulemodules.switchNetBtn,
                onClick: function onClick() {
                  (0,wallets/* switchNetwork */.If)(chainId, true, function () {
                    setShowSwitchNetwork(false);
                  });
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  children: "Switch to Arbitrum"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgArbitrum, {})]
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
          type: "button",
          className: index_modulemodules.connectBtn,
          onClick: function onClick() {
            setWalletVisible(true);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SvgWallet, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Connet Wallet"
            })
          })]
        })]
      });
    }
    var accountUrl = (0,legacy/* getAccountUrl */.ET)(chainId, account);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_AccountDropdown, {
        onDisconnect: onDisconnect,
        account: account,
        accountUrl: accountUrl
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: index_modulemodules.globalOptions,
    children: [renderWalletActive(), /*#__PURE__*/(0,jsx_runtime.jsx)(NetWorkSelect, {
      chainId: chainId
    })]
  });
};
/* harmony default export */ var components_GlobalOptions = (GlobalOptions);
;// CONCATENATED MODULE: ./src/components/Nav/index.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Nav_index_modulemodules = ({"nav":"nav___NGmcJ","active":"active___q_t6f"});
;// CONCATENATED MODULE: ./src/components/Nav/index.tsx




var menus = [{
  path: '/overview',
  title: 'Overview'
}, {
  path: '/trade',
  title: 'Trade'
}, {
  path: '/rewards',
  title: 'Rewards'
}, {
  path: '/more',
  title: 'More'
}];
var Nav = function Nav() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: Nav_index_modulemodules.nav,
    children: menus.map(function (m) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* NavLink */.OL, {
        to: m.path,
        className: function className(_ref) {
          var isActive = _ref.isActive;
          return isActive ? Nav_index_modulemodules.active : undefined;
        },
        children: m.title
      }, m.path);
    })
  });
};
/* harmony default export */ var components_Nav = (Nav);
;// CONCATENATED MODULE: ./src/components/App/app.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var app_modulemodules = ({"header":"header___ZYlY4","globalOptions":"globalOptions___zjCl4","main":"main___I7KJC"});
;// CONCATENATED MODULE: ./src/components/App/index.tsx


















// const options = [
//     { value: 'dark', label: 'dark' },
//     { value: 'light', label: 'light' }
// ];



var Zoom = (0,react_toastify_esm/* cssTransition */.vU)({
  enter: 'zoomIn',
  exit: 'zoomOut',
  appendPosition: false,
  collapse: true,
  collapseDuration: 200
});
var App = function App() {
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    connector = _useWeb3React.connector,
    library = _useWeb3React.library;
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    activatingConnector = _useState2[0],
    setActivatingConnector = _useState2[1];
  var _useChainId = (0,lib_chains/* useChainId */.x)(),
    chainId = _useChainId.chainId;
  var isDev = "production" === 'development';
  (0,react.useEffect)(function () {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector, chainId]);
  var triedEager = (0,wallets/* useEagerConnect */.yW)(setActivatingConnector);
  (0,wallets/* useInactiveListener */.fJ)(!triedEager || !!activatingConnector);
  (0,wallets/* useHandleUnsupportedNetwork */.gn)();
  var _AppContext$useContai = state/* AppContext.useContainer */.I.useContainer(),
    pendingTxns = _AppContext$useContai.pendingTxns,
    setPendingTxns = _AppContext$useContai.setPendingTxns;
  (0,react.useEffect)(function () {
    var checkPendingTxns = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var updatedPendingTxns, i, pendingTxn, receipt, txUrl, _txUrl;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              updatedPendingTxns = [];
              i = 0;
            case 2:
              if (!(i < pendingTxns.length)) {
                _context.next = 15;
                break;
              }
              pendingTxn = pendingTxns[i];
              _context.next = 6;
              return library.getTransactionReceipt(pendingTxn.hash);
            case 6:
              receipt = _context.sent;
              if (!receipt) {
                _context.next = 11;
                break;
              }
              if (receipt.status === 0) {
                txUrl = (0,chains/* getExplorerUrl */.jY)(chainId) + 'tx/' + pendingTxn.hash;
                helperToast/* helperToast.error */.U.error( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
                    id: "Txn failed."
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                    href: txUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
                      id: "View"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})]
                }));
              }
              if (receipt.status === 1 && pendingTxn.message) {
                _txUrl = (0,chains/* getExplorerUrl */.jY)(chainId) + 'tx/' + pendingTxn.hash;
                helperToast/* helperToast.success */.U.success( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: [pendingTxn.message, ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                    href: _txUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
                      id: "View"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})]
                }));
              }
              return _context.abrupt("continue", 12);
            case 11:
              updatedPendingTxns.push(pendingTxn);
            case 12:
              i++;
              _context.next = 2;
              break;
            case 15:
              if (updatedPendingTxns.length !== pendingTxns.length) {
                setPendingTxns(updatedPendingTxns);
              }
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function checkPendingTxns() {
        return _ref.apply(this, arguments);
      };
    }();
    var interval = setInterval(function () {
      checkPendingTxns();
    }, 2 * 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [library, pendingTxns, chainId]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_toastify_esm/* ToastContainer */.Ix, {
      limit: 1,
      transition: Zoom,
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      newestOnTop: false,
      closeOnClick: false,
      draggable: false,
      pauseOnHover: true
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: app_modulemodules.header,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: app_modulemodules.logo,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: nav_logo
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Nav, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(components_GlobalOptions, {
        setActivatingConnector: setActivatingConnector
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: app_modulemodules.main,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Outlet */.j3, {})
    })]
  });
};
/* harmony default export */ var components_App = (App);
;// CONCATENATED MODULE: ./src/layouts/index.tsx







function getLibrary(provider) {
  var library = new web3_provider/* Web3Provider */.Q(provider);
  return library;
}
function Layout() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* SWRConfig */.J$, {
    value: {
      refreshInterval: 5000
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(core_esm/* Web3ReactProvider */.Ht, {
      getLibrary: getLibrary,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(state/* AppContext.Provider */.I.Provider, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_App, {})
      })
    })
  });
}

/***/ }),

/***/ 37432:
/*!*********************************!*\
  !*** ./src/lib/chains/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ useChainId; }
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/core */ 34713);
/* harmony import */ var _config_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/chains */ 13805);
/* harmony import */ var _config_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/localStorage */ 22837);



function useChainId() {
  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)(),
    chainId = _useWeb3React.chainId;
  if (!chainId) {
    var chainIdFromLocalStorage = localStorage.getItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .SELECTED_NETWORK_LOCAL_STORAGE_KEY */ .HC);
    if (chainIdFromLocalStorage) {
      chainId = parseInt(chainIdFromLocalStorage);
      if (!chainId) {
        // localstorage value is invalid
        localStorage.removeItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .SELECTED_NETWORK_LOCAL_STORAGE_KEY */ .HC);
      }
    }
  }
  if (!chainId || !_config_chains__WEBPACK_IMPORTED_MODULE_1__/* .SUPPORTED_CHAIN_IDS.includes */ .FQ.includes(chainId)) {
    chainId = _config_chains__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_CHAIN_ID */ .rC;
  }
  return {
    chainId: chainId
  };
}

/***/ }),

/***/ 21650:
/*!***************************!*\
  !*** ./src/lib/legacy.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET": function() { return /* binding */ getAccountUrl; },
/* harmony export */   "FB": function() { return /* binding */ LONG; },
/* harmony export */   "Qo": function() { return /* binding */ SHORT; },
/* harmony export */   "VZ": function() { return /* binding */ LIMIT; },
/* harmony export */   "YO": function() { return /* binding */ MARKET; },
/* harmony export */   "bD": function() { return /* binding */ MIN_PROFIT_TIME; },
/* harmony export */   "pQ": function() { return /* binding */ CHART_PERIODS; }
/* harmony export */ });
/* unused harmony exports MAX_LEVERAGE, INCREASE, DECREASE, STOP, USDG_DECIMALS, SWAP, BASIS_POINTS_DIVISOR, USD_DECIMALS, DUST_BNB, PRECISION */
/* harmony import */ var _config_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/chains */ 13805);
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbers */ 24069);


var MIN_PROFIT_TIME = 0;
var MAX_LEVERAGE = (/* unused pure expression or super */ null && (100 * 10000));
var INCREASE = 'Increase';
var DECREASE = 'Decrease';
var STOP = 'Stop';
var USDG_DECIMALS = 18;
var SWAP = 'Swap';
var LONG = 'Long';
var SHORT = 'Short';
var BASIS_POINTS_DIVISOR = 10000;
var USD_DECIMALS = 30;
var DUST_BNB = '2000000000000000';
var MARKET = 'Market';
var LIMIT = 'Limit';
var PRECISION = (0,_numbers__WEBPACK_IMPORTED_MODULE_1__/* .expandDecimals */ .Jl)(1, 30);
var CHART_PERIODS = {
  '5m': 60 * 5,
  '15m': 60 * 15,
  '1h': 60 * 60,
  '4h': 60 * 60 * 4,
  '1d': 60 * 60 * 24
};
function getAccountUrl(chainId, account) {
  if (!account) {
    return (0,_config_chains__WEBPACK_IMPORTED_MODULE_0__/* .getExplorerUrl */ .jY)(chainId);
  }
  return (0,_config_chains__WEBPACK_IMPORTED_MODULE_0__/* .getExplorerUrl */ .jY)(chainId) + 'address/' + account;
}

/***/ }),

/***/ 24069:
/*!****************************!*\
  !*** ./src/lib/numbers.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2": function() { return /* binding */ parseValue; },
/* harmony export */   "Jl": function() { return /* binding */ expandDecimals; },
/* harmony export */   "_b": function() { return /* binding */ bigNumberify; },
/* harmony export */   "dN": function() { return /* binding */ formatAmount; }
/* harmony export */ });
/* unused harmony exports trimZeroDecimals, limitDecimals, numberWithCommas, padDecimals, formatKeyAmount, formatArrayAmount, formatAmountFree */
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ 2593);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ 35553);

function bigNumberify(n) {
  try {
    return ethers__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(n);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('bigNumberify error', e);
    return ethers__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(0);
  }
}
function expandDecimals(n, decimals) {
  // console.log(n)
  // console.log(decimals)
  // @ts-ignore
  return bigNumberify(n).mul(bigNumberify(10).pow(decimals));
}
var trimZeroDecimals = function trimZeroDecimals(amount) {
  if (parseFloat(amount) === parseInt(amount)) {
    return parseInt(amount).toString();
  }
  return amount;
};
var limitDecimals = function limitDecimals(amount, maxDecimals) {
  var amountStr = amount.toString();
  if (maxDecimals === undefined) {
    return amountStr;
  }
  if (maxDecimals === 0) {
    return amountStr.split('.')[0];
  }
  var dotIndex = amountStr.indexOf('.');
  if (dotIndex !== -1) {
    var decimals = amountStr.length - dotIndex - 1;
    if (decimals > maxDecimals) {
      amountStr = amountStr.substr(0, amountStr.length - (decimals - maxDecimals));
    }
  }
  return amountStr;
};
function numberWithCommas(x) {
  if (!x) {
    return '...';
  }
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
var padDecimals = function padDecimals(amount, minDecimals) {
  var amountStr = amount.toString();
  var dotIndex = amountStr.indexOf('.');
  if (dotIndex !== -1) {
    var decimals = amountStr.length - dotIndex - 1;
    if (decimals < minDecimals) {
      amountStr = amountStr.padEnd(amountStr.length + (minDecimals - decimals), '0');
    }
  } else {
    amountStr = amountStr + '.0000';
  }
  return amountStr;
};
var formatAmount = function formatAmount(amount, tokenDecimals, displayDecimals, useCommas, defaultValue) {
  if (!defaultValue) {
    defaultValue = '...';
  }
  if (amount === undefined || amount.toString().length === 0) {
    return defaultValue;
  }
  if (displayDecimals === undefined) {
    displayDecimals = 4;
  }
  var amountStr = ethers__WEBPACK_IMPORTED_MODULE_1__/* .formatUnits */ .bM(amount, tokenDecimals);
  amountStr = limitDecimals(amountStr, displayDecimals);
  if (displayDecimals !== 0) {
    amountStr = padDecimals(amountStr, displayDecimals);
  }
  if (useCommas) {
    return numberWithCommas(amountStr);
  }
  return amountStr;
};
var formatKeyAmount = function formatKeyAmount(map, key, tokenDecimals, displayDecimals, useCommas) {
  if (!map || !map[key]) {
    return '...';
  }
  return formatAmount(map[key], tokenDecimals, displayDecimals, useCommas);
};
var formatArrayAmount = function formatArrayAmount(arr, index, tokenDecimals, displayDecimals, useCommas) {
  if (!arr || !arr[index]) {
    return '...';
  }
  return formatAmount(arr[index], tokenDecimals, displayDecimals, useCommas);
};
var formatAmountFree = function formatAmountFree(amount, tokenDecimals, displayDecimals) {
  if (!amount) {
    return '...';
  }
  var amountStr = ethers.utils.formatUnits(amount, tokenDecimals);
  amountStr = limitDecimals(amountStr, displayDecimals);
  return trimZeroDecimals(amountStr);
};
var parseValue = function parseValue(value, tokenDecimals) {
  if (value instanceof ethers__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O$) {
    return value;
  }
  var pValue = parseFloat(value);
  if (isNaN(pValue)) {
    return undefined;
  }
  value = limitDecimals(value, tokenDecimals);
  var amount = ethers__WEBPACK_IMPORTED_MODULE_1__/* .parseUnits */ .vz(value, tokenDecimals);
  return bigNumberify(amount);
};

/***/ })

}]);