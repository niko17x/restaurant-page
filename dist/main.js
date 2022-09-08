/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./cursive.ttf */ \"./src/cursive.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'cursive';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('trueType');\\n    font-weight: 600;\\n    font-style: normal;\\n}\\n\\n\\n\\nbody {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'cursive';\\n    font-size: 70px;\\n    background: rgb(239, 239, 239);\\n}\\n\\n#tab {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    text-align: center;\\n    margin-top: 50px;\\n    cursor: pointer;\\n}\\n\\n\\n/* ? HOME.JS */\\n\\n#title {\\n    display: grid;\\n    place-content: center;\\n}\\n\\n#title-img > img {\\n    border: 5px solid rgb(185, 195, 255);\\n    border-radius: 5% 0 5% 0;\\n    max-width: 50%;\\n    height: auto;\\n}\\n\\n#hero-img {\\n    height: 65vh;\\n    display: block;\\n    margin-left: auto;\\n    margin-right: auto;\\n}\\n\\n\\n\\n/*! INTRO TEXT SECTION... */\\n\\n#intro-text {\\n    display: grid;\\n    margin-left: 2rem;\\n    margin-right: 2rem;\\n}\\n\\n.intro-title {\\n    place-self: center;\\n}\\n\\n.intro-para {\\n    display: grid;\\n    grid-template-rows: repeat(4, autofill);\\n    place-items: center;\\n}\\n\\n.intro-para > p {\\n    font-size: 50px;\\n}\\n\\n.intro-para > h3 {\\n    font-size: 50px;\\n    border-bottom: 1px solid black;\\n    border-top: 1px solid black;\\n}\\n\\n.intro-para > ul {\\n    font-size: 40px;\\n}\\n\\n.closing-text > p {\\n    font-size: 80px;\\n    text-align: center;\\n}\\n\\n\\n/* ? MENU.JS */\\n\\n.menu-items {\\n    display: grid;\\n    grid-template-rows: repeat(4, autofill);\\n    margin-left: 2rem;\\n    margin-right: 2rem;\\n    margin-bottom: 5em;\\n    margin: 2rem 2rem 4rem 0;\\n}\\n\\n.menu-title {\\n    border-bottom: 2px solid black;\\n    font-size: 70px;\\n}\\n\\n.menu-items > h3,\\n.menu-items > span {\\n    place-self: center;\\n}\\n\\n.menu-items > p {\\n    width: 35rem;\\n    place-self: center;\\n    text-align: center;\\n}\\n\\n\\n.menu-img > img {\\n    height: 200px;\\n    max-width: 30%;\\n    height: auto;\\n    display: block;\\n    margin: auto;\\n    border: 5px solid rgb(185, 195, 255);\\n    border-radius: 5% 0 5% 0;\\n}\\n\\n.menu-price::before {\\n    content: '$';\\n}\\n\\n\\n\\n/* ? CONTACT.JS */\\n\\n/* TEXT BOX INPUT AREA: */\\n.form {\\n    display: grid;\\n    place-content: center;\\n}\\n\\n.input-form {\\n    display: grid;\\n}\\n\\ninput,\\ntextarea {\\n    width: 30rem;\\n    height: 3.2rem;\\n    padding: .01rem 0.7rem;\\n    font-size: 2rem;\\n}\\n\\ntextarea {\\n    height: 10rem;\\n    resize: none;\\n}\\n\\nbutton {\\n    margin: 2rem 0;\\n}\\n\\n/* TODO: WORK ON THE SUBMIT BUTTON AND THE REST OF THE STYLING. REMEMBER, THIS PROJECT ALONG WITH ALL THE OTHER PROJECTS THAT YOUR WORKING ON WILL BE ON YOUR PORTFOLIO FOR FUTURE EMPLOYERS TO POTENTIALLY SEE AND JUDGE YOUR SKILLS ON. */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactTitle\": () => (/* binding */ renderContactTitle),\n/* harmony export */   \"renderForm\": () => (/* binding */ renderForm)\n/* harmony export */ });\n// TODO: CREATE THE CONTACTS PAGE!\n\nconst renderContactTitle = () => {\n    const container = document.querySelector('#container');\n\n    const divContactPage = document.createElement('div');\n    divContactPage.setAttribute('id', 'contact-page');\n\n    const divTitle = document.createElement('div');\n    divTitle.setAttribute('id', 'title');\n\n    const h1 = document.createElement('h1');\n    h1.innerText = \"We would love to hear from you!\"\n\n    divTitle.appendChild(h1);\n    container.append(divTitle, divContactPage);\n};\n\n\n/* <div id=\"contact-form\">\n            <form action=\"\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" name=\"name\" id=\"name\" required>\n    \n                <label for=\"email\">email</label>\n                <input type=\"email\" name=\"email\" id=\"email\" required>\n    \n                <label for=\"textbox\"></label>\n                <textarea name=\"textbox\" id=\"textbox\" cols=\"30\" rows=\"10\"></textarea>\n            </form>\n        </div> */\n\nconst renderForm = () => {\n    const contactPage = document.querySelector('#contact-page');\n\n    const divContactForm = document.createElement('div');\n    divContactForm.setAttribute('id', 'contact-form');\n\n    const form = document.createElement('form');\n    form.classList.add('form');\n\n    const labelName = document.createElement('label');\n    labelName.setAttribute('for', 'name');\n    labelName.innerText = 'Name';\n\n    const divName = document.createElement('div');\n    divName.classList.add('input-form')\n\n    const inputName = document.createElement('input');\n    inputName.setAttribute('type', 'text');\n    inputName.setAttribute('name', 'name');\n    inputName.setAttribute('id', 'name');\n    inputName.setAttribute('required', '');\n\n    const divEmail = document.createElement('div');\n    divEmail.classList.add('input-form')\n\n    const labelEmail = document.createElement('label');\n    labelEmail.setAttribute('for', 'email');\n    labelEmail.innerText = \"Email\";\n\n    const inputEmail = document.createElement('input');\n    inputName.setAttribute('type', 'email');\n    inputName.setAttribute('name', 'email');\n    inputName.setAttribute('id', 'email');\n    inputName.setAttribute('required', '');\n\n    const divTextArea = document.createElement('div');\n    divTextArea.classList.add('input-form')\n\n    const inputTextBox = document.createElement('label');\n    inputTextBox.setAttribute('for', 'textbox');\n    inputTextBox.innerText = \"Write your message here\"\n\n\n    const textBox = document.createElement('textarea');\n    textBox.setAttribute('name', 'text-box');\n    textBox.setAttribute('id', 'text-box');\n    textBox.setAttribute('cols', '30');\n    textBox.setAttribute('rows', '10');\n    \n    const submitBtn = document.createElement('button');\n    submitBtn.setAttribute('type', 'submit');\n    submitBtn.innerText = \"Submit\";\n\n\n    divName.append(labelName, inputName);\n    divEmail.append(labelEmail, inputEmail);\n    divTextArea.append(inputTextBox, textBox);\n\n    form.append(divName, divEmail, divTextArea, submitBtn);\n    divContactForm.append(form);\n    contactPage.append(divContactForm);\n};\n\n// const renderSubmitBtn = () => {\n//     const contactForm = document.querySelector('#contact-form');\n\n//     const submitBtn = document.createElement('button');\n//     submitBtn.setAttribute('type', 'submit');\n//     submitBtn.innerText = 'Submit';\n\n//     contactForm.appendChild(submitBtn);\n// }\n\n//! TESTING - FUNCTION TO PASS IN PARAMETERS FOR MULTIPLE FORM LABELS/INPUTS:\n// const labelName, attribute name, innerText name.\n// function createLabel(attName, innerName) {\n//     const labelName = document.createElement('label');\n//     labelName.setAttribute('for', attName);\n//     labelName.innerText = innerName;\n//     return labelName;\n// };\n\n// function createInput(attType, attName) {\n//     const inputName = document.createElement('input');\n//     inputName.setAttribute('type', attType);\n//     inputName.setAttribute('name', attName);\n//     inputName.setAttribute('id', attName);\n//     inputName.setAttribute('required');\n//     return inputName;\n\n// };\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderClosingText\": () => (/* binding */ renderClosingText),\n/* harmony export */   \"renderImg\": () => (/* binding */ renderImg),\n/* harmony export */   \"renderMainTitle\": () => (/* binding */ renderMainTitle),\n/* harmony export */   \"renderTxt\": () => (/* binding */ renderTxt)\n/* harmony export */ });\n/* harmony import */ var _title_img_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title-img.jpeg */ \"./src/title-img.jpeg\");\n// MAIN HOME PAGE OF WEBSITE.\n\n\n\nconst renderMainTitle = () => {\n    const container = document.querySelector('#container');\n\n    const divHomePage = document.createElement('div');\n    divHomePage.setAttribute('id', 'home-page');\n\n    const divTitle = document.createElement('div');\n    divTitle.setAttribute('id', 'title');\n\n    const h1 = document.createElement('h1');\n    h1.innerText = \"Welcome to Delish Oatmeals!\"\n\n    divTitle.appendChild(h1);\n    container.append(divTitle, divHomePage);\n};\n// //! TESTING - Attempting to create one title creating function for all pages.\n// const renderMainTitle = (newDiv, att, innerTxt) => {\n//     const container = document.querySelector('#container');\n\n//     newDiv = document.createElement('div');\n//     newDiv.setAttribute('id', att);\n\n//     const divTitle = document.createElement('div');\n//     divTitle.setAttribute('id', 'title');\n\n//     const h1 = document.createElement('h1');\n//     h1.innerText = innerTxt;\n\n//     divTitle.appendChild(h1);\n//     container.append(divTitle, newDiv);\n// };\n\nconst renderImg = () => {\n    const divHomePage = document.querySelector('#home-page');\n\n    const div = document.createElement('div');\n    div.setAttribute('id', 'title-img');\n\n    const heroImg = new Image();\n    heroImg.src = _title_img_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    heroImg.setAttribute('id', 'hero-img')\n\n    div.appendChild(heroImg);\n    divHomePage.appendChild(div);\n};\n\nconst renderTxt = () => {\n    const divHomePage = document.querySelector('#home-page');\n\n    const divIntroText = document.createElement('div');\n    divIntroText.setAttribute('id', 'intro-text');\n\n    const divIntroTitle = document.createElement('div');\n    divIntroTitle.className = \"intro-title\";\n\n    const divIntroPara = document.createElement('div');\n    divIntroPara.className = \"intro-para\";\n\n    const h2 = document.createElement('h2');\n    h2.innerText = \"What's the deal with Oatmeal anyways?\";\n\n    const p1 = document.createElement('p');\n    p1.innerText = 'There isn\\’t a single morning when my grandmother doesn\\'t start her day without a steaming bowl of freshly cooked oats doused in milk. It always made me look at her quizzically and wonder... Why oats? Yes, it\\'s healthy, but can one really have it every single day? Nutritionist Gargi Sharma says, \"Oats are rich in soluble fibers which help in lowering cholesterol levels. These soluble fibers help increase intestinal transit time and reduce glucose absorption. Oats also contain beta glucan which is a lipid lowering agent. A very healthy breakfast option - you can spruce your oats with fruits and crunchy nuts\" Be it a quick fix for hunger pangs, a light and hearty evening snack or the much needed energy to carry you through your hectic morning, oats is the one superfood that can easily fit itself to suit your needs.';\n\n    const p2 = document.createElement('p');\n    p2.innerText = 'Protein-packed, full of fiber and low on fat, oats are designed to boost your energy levels and help you lead a healthy lifestyle. They are not only good for the stomach but are interestingly super filling, satisfying and versatile. Oats contain a wide range of nutrients like fiber, vitamin E, essential fatty acids, etc. which make them top the healthy food charts. We tell you benefits of oats.';\n\n    const h3 = document.createElement('h3');\n    h3.innerText = \"Here are the some benefits of including oatmeal in your diet:\"\n\n    // Creating bullet points:\n    const ul = document.createElement('ul');\n    const li1 = document.createElement('li');\n    li1.innerText = \"Packed with nutrition\"\n    const li2 = document.createElement('li');\n    li2.innerText = \"Rich in antioxidants\"\n    const li3 = document.createElement('li');\n    li3.innerText = \"Contains a fiber called beta-glucan\";\n    const li4 = document.createElement('li');\n    li4.innerText = \"They can lower cholesterol\";\n    const li5 = document.createElement('li');\n    li5.innerText = \"Improves blood sugar control\";\n\n    // Appending everything together:\n    ul.append(li1, li2, li3, li4, li5);\n    divIntroTitle.append(h2);\n    divIntroPara.append(p1, p2, h3, ul);\n    divIntroText.append(divIntroTitle, divIntroPara); // '.append' allows multiple nodes to be used.\n    divHomePage.appendChild(divIntroText); // '.appendChild' allows ONE node to be used.\n};\n\nconst renderClosingText = () => {\n    const homePage = document.querySelector('#home-page');\n\n    const div = document.createElement('div');\n    div.classList.add('closing-text');\n\n    const p = document.createElement('p');\n    p.innerText = \"Now go get yourself a bowl... or two!\";\n\n    div.appendChild(p);\n    homePage.appendChild(div);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _oatmeal_item1_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oatmeal-item1.jpeg */ \"./src/oatmeal-item1.jpeg\");\n/* harmony import */ var _oatmeal_item2_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oatmeal-item2.jpeg */ \"./src/oatmeal-item2.jpeg\");\n/* harmony import */ var _oatmeal_item3_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oatmeal-item3.jpeg */ \"./src/oatmeal-item3.jpeg\");\n/* harmony import */ var _oatmeal_item4_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oatmeal-item4.jpeg */ \"./src/oatmeal-item4.jpeg\");\n/* harmony import */ var _oatmeal_item5_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oatmeal-item5.jpeg */ \"./src/oatmeal-item5.jpeg\");\n\n\n\n\n\n// IMAGES:\n\n\n\n\n\n\n\n\n\nclass Render {\n    // FUNCTION FOR REMOVING ALL NODES:\n    static removeNodes(parent) {\n        while (parent.firstChild) {\n            parent.removeChild(parent.firstChild);\n        }\n    };\n\n    static homePage() {\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderMainTitle)(\"Welcome to Delish Oatmeals!\");\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderImg)();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderTxt)();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderClosingText)();\n    };\n    \n    static menuPage(){\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuTitle)(\"Here's the Menu!\");\n    \n        // Enter in new menu items:\n        // (img, title, description, price):\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuItems)(_oatmeal_item1_jpeg__WEBPACK_IMPORTED_MODULE_4__, 'Berry Berry Oats', 'Try our delicious raspberry, blueberry oatmeal with almonds and honey to top it all off. The deliciousness will overload your taste buds!', 6.75);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuItems)(_oatmeal_item2_jpeg__WEBPACK_IMPORTED_MODULE_5__, 'Banana Berry Oats', 'Protein rich oatmeal perfect for after working out! Infused with organic peanut butter to help boost those nutrients.', 6.25);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuItems)(_oatmeal_item3_jpeg__WEBPACK_IMPORTED_MODULE_6__, 'Yoghurt-y Goodness', 'A bit of oatmeal, bananas, strawberries, granola and topped off with blueberries. All on top of homemade yoghurt. Delicious!', 8.75);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuItems)(_oatmeal_item4_jpeg__WEBPACK_IMPORTED_MODULE_7__, 'Fruity and Earthy', 'Nuts, nuts and more nuts! Oh and add some strawberries, cream and do not forget about the blueberries.', 6);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenuItems)(_oatmeal_item5_jpeg__WEBPACK_IMPORTED_MODULE_8__, 'Brain Food', 'Raisons, oatmeal, healthy seeds, honey and lots of cereal. This is one hearty breakfast for anyone ready to tackle the day!', 7.70);\n    };\n  \n    static contactPage() {\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.renderContactTitle)();\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.renderForm)();\n    };\n};\n\n\n\n\nconst tabHome = document.querySelector('#tab-home');\nconst tabMenu = document.querySelector('#tab-menu');\nconst tabContact = document.querySelector('#tab-contact');\nconst container = document.querySelector('#container');\n\n\n\ntabHome.addEventListener('click', () => {\n    Render.removeNodes(container); // Remove existing nodes.\n    Render.homePage();\n});\n\ntabMenu.addEventListener('click', () => {\n    Render.removeNodes(container);\n    Render.menuPage();\n});\n\ntabContact.addEventListener('click', () => {\n    Render.removeNodes(container);\n    Render.contactPage();\n});\n\n\n\n\n// Default page load:\nRender.homePage();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuItems\": () => (/* binding */ renderMenuItems),\n/* harmony export */   \"renderMenuTitle\": () => (/* binding */ renderMenuTitle)\n/* harmony export */ });\n\nconst renderMenuTitle = (txt) => {\n    const container = document.querySelector('#container');\n    const divMenuPage = document.createElement('div');\n    divMenuPage.setAttribute('id', 'menu-page');\n\n    const divTitle = document.createElement('div');\n    divTitle.setAttribute('id', 'title');\n\n    const h1 = document.createElement('h1');\n    h1.innerText = \"Check out the Menu!\";\n\n    divTitle.appendChild(h1);\n    container.append(divTitle, divMenuPage);\n};\n\n// ! PUT EACH MENU ITEM INTO AN ARRAY, LOOP THROUGH EACH TO GENERATE:\nconst renderMenuItems = (img, title, description, price) => {\n    const container = document.querySelector('#container');\n    const menuPage = container.querySelector('#menu-page');\n\n    const divMenuItems = document.createElement('div');\n    divMenuItems.classList.add('menu-items'); // Should be linked to this tag.\n\n    const menuTitle = document.createElement('h3');\n    menuTitle.classList.add('menu-title');\n    menuTitle.innerText = title;\n\n    const divMenuImg = document.createElement('div');\n    divMenuImg.classList.add('menu-img');\n    const newImg = new Image();\n    newImg.src = img;\n\n    const menuDescription = document.createElement('p');\n    menuDescription.classList.add('menu-description');\n    menuDescription.innerText = description;\n\n    const menuPrice = document.createElement('span');\n    menuPrice.classList.add('menu-price');\n    menuPrice.innerText = price;\n\n    divMenuImg.appendChild(newImg);\n    divMenuItems.append(menuTitle, divMenuImg, menuDescription, menuPrice);\n    menuPage.append(divMenuItems)\n\n};\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/cursive.ttf":
/*!*************************!*\
  !*** ./src/cursive.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c975665505f592d580ba.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/cursive.ttf?");

/***/ }),

/***/ "./src/oatmeal-item1.jpeg":
/*!********************************!*\
  !*** ./src/oatmeal-item1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2aeaea40871beded44b.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/oatmeal-item1.jpeg?");

/***/ }),

/***/ "./src/oatmeal-item2.jpeg":
/*!********************************!*\
  !*** ./src/oatmeal-item2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7259ee8559b2b254df09.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/oatmeal-item2.jpeg?");

/***/ }),

/***/ "./src/oatmeal-item3.jpeg":
/*!********************************!*\
  !*** ./src/oatmeal-item3.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b913f25bde4d4520748.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/oatmeal-item3.jpeg?");

/***/ }),

/***/ "./src/oatmeal-item4.jpeg":
/*!********************************!*\
  !*** ./src/oatmeal-item4.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f6208c084009a71c0f0.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/oatmeal-item4.jpeg?");

/***/ }),

/***/ "./src/oatmeal-item5.jpeg":
/*!********************************!*\
  !*** ./src/oatmeal-item5.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ffaca5d646c44e8ecde.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/oatmeal-item5.jpeg?");

/***/ }),

/***/ "./src/title-img.jpeg":
/*!****************************!*\
  !*** ./src/title-img.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6625c3fb1c3b2276d83a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/title-img.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;