/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  /* outline: 1px solid red; */
}

body {
  height: 100vh;
  background-color: lightgray;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container,
input,
select,
button,
.popup-card {
  border-radius: 10px;
  border: 1px solid grey;
}

.card-container {
  padding: 30px;
  background-color: whitesmoke;
  box-shadow: 0 0 20px grey;
  width: clamp(400px, 50%, 80%);

  display: grid;
  grid-template-rows: auto 1fr;
  gap: 30px;
}

h1 {
  justify-self: center;
}

form {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-template-rows: repeat(4, min-content);
  gap: 30px;
}

div.email {
  grid-column: 1/3;
}

input,
select {
  width: 100%;
  padding: 10px;
}

label::after {
  content: " *";
  color: red;
}

form > div {
  display: grid;
  row-gap: 5px;
  column-gap: 20px;
  align-items: center;
}

.error {
  color: red;
  font-size: 0.7em;
}

button {
  width: min-content;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1em;
}

button:hover {
  filter: brightness(120%);
}

button:active {
  filter: brightness(80%);
}

button[type="reset"] {
  background-color: lightgray;
}

button[type="submit"] {
  justify-self: end;
  background-color: green;
  color: white;
}

select option:first-of-type {
  display: none;
}

input:invalid,
select:invalid {
  border: 2px solid maroon;
  background-color: rgb(255, 210, 216);
}

option {
  background-color: white;
}

dialog {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-card {
  background-color: lightgrey;
  padding: 30px;
  box-shadow: 0 0 30px black;
  width: clamp(300px, 50%, 80%);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

dialog button {
  background-color: green;
  color: white;
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;;;;EAKE,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,6BAA6B;;EAE7B,aAAa;EACb,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,oDAAoD;EACpD,0CAA0C;EAC1C,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,wBAAwB;EACxB,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,YAAY;;EAEZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n  /* outline: 1px solid red; */\n}\n\nbody {\n  height: 100vh;\n  background-color: lightgray;\n  font-size: 16px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-container,\ninput,\nselect,\nbutton,\n.popup-card {\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n.card-container {\n  padding: 30px;\n  background-color: whitesmoke;\n  box-shadow: 0 0 20px grey;\n  width: clamp(400px, 50%, 80%);\n\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 30px;\n}\n\nh1 {\n  justify-self: center;\n}\n\nform {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(150px, 1fr));\n  grid-template-rows: repeat(4, min-content);\n  gap: 30px;\n}\n\ndiv.email {\n  grid-column: 1/3;\n}\n\ninput,\nselect {\n  width: 100%;\n  padding: 10px;\n}\n\nlabel::after {\n  content: \" *\";\n  color: red;\n}\n\nform > div {\n  display: grid;\n  row-gap: 5px;\n  column-gap: 20px;\n  align-items: center;\n}\n\n.error {\n  color: red;\n  font-size: 0.7em;\n}\n\nbutton {\n  width: min-content;\n  padding: 10px 20px;\n  font-weight: bold;\n  font-size: 1em;\n}\n\nbutton:hover {\n  filter: brightness(120%);\n}\n\nbutton:active {\n  filter: brightness(80%);\n}\n\nbutton[type=\"reset\"] {\n  background-color: lightgray;\n}\n\nbutton[type=\"submit\"] {\n  justify-self: end;\n  background-color: green;\n  color: white;\n}\n\nselect option:first-of-type {\n  display: none;\n}\n\ninput:invalid,\nselect:invalid {\n  border: 2px solid maroon;\n  background-color: rgb(255, 210, 216);\n}\n\noption {\n  background-color: white;\n}\n\ndialog {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  border: none;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popup-card {\n  background-color: lightgrey;\n  padding: 30px;\n  box-shadow: 0 0 30px black;\n  width: clamp(300px, 50%, 80%);\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\ndialog button {\n  background-color: green;\n  color: white;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/nodes.js":
/*!**********************!*\
  !*** ./src/nodes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   confirmPassword: () => (/* binding */ confirmPassword),
/* harmony export */   confirmPasswordErrorPara: () => (/* binding */ confirmPasswordErrorPara),
/* harmony export */   country: () => (/* binding */ country),
/* harmony export */   countryErrorPara: () => (/* binding */ countryErrorPara),
/* harmony export */   email: () => (/* binding */ email),
/* harmony export */   emailErrorPara: () => (/* binding */ emailErrorPara),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   password: () => (/* binding */ password),
/* harmony export */   passwordErrorPara: () => (/* binding */ passwordErrorPara),
/* harmony export */   popup: () => (/* binding */ popup),
/* harmony export */   zip: () => (/* binding */ zip),
/* harmony export */   zipErrorPara: () => (/* binding */ zipErrorPara)
/* harmony export */ });
const form = document.querySelector("form");
const popup = document.querySelector("dialog");

// Inputs
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

// Error fields
const emailErrorPara = document.querySelector("div.email p");
const countryErrorPara = document.querySelector("div.country p");
const zipErrorPara = document.querySelector("div.zip p");
const passwordErrorPara = document.querySelector("div.password p");
const confirmPasswordErrorPara = document.querySelector(
  "div.confirm-password p",
);




/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   togglePopup: () => (/* binding */ togglePopup)
/* harmony export */ });
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset */ "./src/reset.js");



const togglePopup = () => {
  _nodes__WEBPACK_IMPORTED_MODULE_0__.popup.classList.toggle("hidden");
};

const againBtn = _nodes__WEBPACK_IMPORTED_MODULE_0__.popup.querySelector("button");

againBtn.addEventListener("click", () => {
  (0,_reset__WEBPACK_IMPORTED_MODULE_1__.clearForm)();
  togglePopup();
});




/***/ }),

/***/ "./src/reset.js":
/*!**********************!*\
  !*** ./src/reset.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearForm: () => (/* binding */ clearForm),
/* harmony export */   clearText: () => (/* binding */ clearText)
/* harmony export */ });
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");


const clearText = (node) => {
  const selectNode = node;
  selectNode.textContent = "";
};

const clearForm = () => {
  _nodes__WEBPACK_IMPORTED_MODULE_0__.form.reset();
};




/***/ }),

/***/ "./src/showErrors.js":
/*!***************************!*\
  !*** ./src/showErrors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showConfirmPasswordError: () => (/* binding */ showConfirmPasswordError),
/* harmony export */   showCountryError: () => (/* binding */ showCountryError),
/* harmony export */   showEmailError: () => (/* binding */ showEmailError),
/* harmony export */   showPasswordError: () => (/* binding */ showPasswordError),
/* harmony export */   showZipError: () => (/* binding */ showZipError)
/* harmony export */ });
/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset */ "./src/reset.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");



const showEmailError = (string) => {
  (0,_reset__WEBPACK_IMPORTED_MODULE_0__.clearText)(_nodes__WEBPACK_IMPORTED_MODULE_1__.emailErrorPara);
  _nodes__WEBPACK_IMPORTED_MODULE_1__.emailErrorPara.textContent = string;
};

const showCountryError = (string) => {
  (0,_reset__WEBPACK_IMPORTED_MODULE_0__.clearText)(_nodes__WEBPACK_IMPORTED_MODULE_1__.countryErrorPara);
  _nodes__WEBPACK_IMPORTED_MODULE_1__.countryErrorPara.textContent = string;
};

const showZipError = (string) => {
  (0,_reset__WEBPACK_IMPORTED_MODULE_0__.clearText)(_nodes__WEBPACK_IMPORTED_MODULE_1__.zipErrorPara);
  _nodes__WEBPACK_IMPORTED_MODULE_1__.zipErrorPara.textContent = string;
};

const showPasswordError = (string) => {
  (0,_reset__WEBPACK_IMPORTED_MODULE_0__.clearText)(_nodes__WEBPACK_IMPORTED_MODULE_1__.passwordErrorPara);
  _nodes__WEBPACK_IMPORTED_MODULE_1__.passwordErrorPara.textContent = string;
};

const showConfirmPasswordError = (string) => {
  (0,_reset__WEBPACK_IMPORTED_MODULE_0__.clearText)(_nodes__WEBPACK_IMPORTED_MODULE_1__.confirmPasswordErrorPara);
  _nodes__WEBPACK_IMPORTED_MODULE_1__.confirmPasswordErrorPara.textContent = string;
};




/***/ }),

/***/ "./src/submitForm.js":
/*!***************************!*\
  !*** ./src/submitForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _validateConfirmPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateConfirmPass */ "./src/validateConfirmPass.js");
/* harmony import */ var _validateCountry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateCountry */ "./src/validateCountry.js");
/* harmony import */ var _validateEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateEmail */ "./src/validateEmail.js");
/* harmony import */ var _validatePass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validatePass */ "./src/validatePass.js");
/* harmony import */ var _validateZip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validateZip */ "./src/validateZip.js");








const submit = _nodes__WEBPACK_IMPORTED_MODULE_0__.form.querySelector("button[type=submit]");

const submitForm = (event) => {
  event.preventDefault();
  if (!_nodes__WEBPACK_IMPORTED_MODULE_0__.form.checkValidity()) {
    (0,_validateEmail__WEBPACK_IMPORTED_MODULE_4__.validateEmail)();
    (0,_validateCountry__WEBPACK_IMPORTED_MODULE_3__.validateCountry)();
    (0,_validateZip__WEBPACK_IMPORTED_MODULE_6__.validateZip)();
    (0,_validatePass__WEBPACK_IMPORTED_MODULE_5__.validatePassword)();
    (0,_validateConfirmPass__WEBPACK_IMPORTED_MODULE_2__.validateConfirmPassword)();
  } else {
    (0,_popup__WEBPACK_IMPORTED_MODULE_1__.togglePopup)();
  }
};

submit.addEventListener("click", submitForm);


/***/ }),

/***/ "./src/validateConfirmPass.js":
/*!************************************!*\
  !*** ./src/validateConfirmPass.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateConfirmPassword: () => (/* binding */ validateConfirmPassword)
/* harmony export */ });
/* harmony import */ var _showErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showErrors */ "./src/showErrors.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");



const passMismatch = () => {
  _nodes__WEBPACK_IMPORTED_MODULE_1__.confirmPassword.pattern = _nodes__WEBPACK_IMPORTED_MODULE_1__.password.value;
  return _nodes__WEBPACK_IMPORTED_MODULE_1__.confirmPassword.validity.patternMismatch;
};

const validateConfirmPassword = () => {
  if (_nodes__WEBPACK_IMPORTED_MODULE_1__.confirmPassword.validity.valueMissing) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showConfirmPasswordError)("Please re-enter your password");
  } else if (passMismatch()) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showConfirmPasswordError)("Passwords must match");
  } else {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showConfirmPasswordError)("");
  }
};

_nodes__WEBPACK_IMPORTED_MODULE_1__.confirmPassword.addEventListener("input", validateConfirmPassword);




/***/ }),

/***/ "./src/validateCountry.js":
/*!********************************!*\
  !*** ./src/validateCountry.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   country: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_2__.country),
/* harmony export */   validateCountry: () => (/* binding */ validateCountry)
/* harmony export */ });
/* harmony import */ var _showErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showErrors */ "./src/showErrors.js");
/* harmony import */ var _validateZip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateZip */ "./src/validateZip.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");




const validateCountry = () => {
  if (_nodes__WEBPACK_IMPORTED_MODULE_2__.country.validity.valueMissing) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showCountryError)("Please select a country");
  } else {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showCountryError)("");
  }
};

_nodes__WEBPACK_IMPORTED_MODULE_2__.country.addEventListener("input", () => {
  validateCountry();
  (0,_validateZip__WEBPACK_IMPORTED_MODULE_1__.validateZip)();
});




/***/ }),

/***/ "./src/validateEmail.js":
/*!******************************!*\
  !*** ./src/validateEmail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateEmail: () => (/* binding */ validateEmail)
/* harmony export */ });
/* harmony import */ var _showErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showErrors */ "./src/showErrors.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");



const validateEmail = () => {
  if (_nodes__WEBPACK_IMPORTED_MODULE_1__.email.validity.valueMissing) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showEmailError)("Please enter an email");
  } else if (_nodes__WEBPACK_IMPORTED_MODULE_1__.email.validity.typeMismatch) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showEmailError)("Use the pattern: john@appleseed");
  } else {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showEmailError)("");
  }
};

_nodes__WEBPACK_IMPORTED_MODULE_1__.email.addEventListener("input", validateEmail);




/***/ }),

/***/ "./src/validatePass.js":
/*!*****************************!*\
  !*** ./src/validatePass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   password: () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_1__.password),
/* harmony export */   validatePassword: () => (/* binding */ validatePassword)
/* harmony export */ });
/* harmony import */ var _showErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showErrors */ "./src/showErrors.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");



const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$";

const passwordRequirements =
  "at least one uppercase letter, one lowercase letter, one number, and is at least 8 characters long";

_nodes__WEBPACK_IMPORTED_MODULE_1__.password.pattern = regex;

const validatePassword = () => {
  if (_nodes__WEBPACK_IMPORTED_MODULE_1__.password.validity.valueMissing) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showPasswordError)(`Please enter a password`);
  } else if (_nodes__WEBPACK_IMPORTED_MODULE_1__.password.validity.patternMismatch) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showPasswordError)(`Password must have ${passwordRequirements}`);
  } else {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showPasswordError)("");
  }
};

_nodes__WEBPACK_IMPORTED_MODULE_1__.password.addEventListener("input", validatePassword);




/***/ }),

/***/ "./src/validateZip.js":
/*!****************************!*\
  !*** ./src/validateZip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateZip: () => (/* binding */ validateZip)
/* harmony export */ });
/* harmony import */ var _showErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showErrors */ "./src/showErrors.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./src/nodes.js");



const constraints = {
  switzerland: {
    regex: "^\\d{4}$",
    errorMsg: "Switzerland ZIPs must have exactly 4 digits: e.g. 1950",
  },
  france: {
    regex: "^\\d{5}$",
    errorMsg: "France ZIPs must have exactly 5 digits: e.g. 75012",
  },
  germany: {
    regex: "^\\d{5}$",
    errorMsg: "Germany ZIPs must have exactly 5 digits: e.g. 12345",
  },
  netherland: {
    regex: "^\\d{4}\\s?[A-Z]{2}$",
    errorMsg:
      "Netherland ZIPs must have exactly 4 digits, followed by 2 uppercase letters: e.g. '1234 AB' or '1234AB'",
  },
};

let failRegexMsg;

const failRegex = () => {
  const selectCountry = _nodes__WEBPACK_IMPORTED_MODULE_1__.country.value;
  const { regex, errorMsg } = constraints[selectCountry];
  _nodes__WEBPACK_IMPORTED_MODULE_1__.zip.pattern = regex;
  if (_nodes__WEBPACK_IMPORTED_MODULE_1__.zip.validity.patternMismatch) failRegexMsg = errorMsg;
  return _nodes__WEBPACK_IMPORTED_MODULE_1__.zip.validity.patternMismatch;
};

const validateZip = () => {
  if (!_nodes__WEBPACK_IMPORTED_MODULE_1__.country.value) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showZipError)("Please select a country first");
  } else if (_nodes__WEBPACK_IMPORTED_MODULE_1__.zip.validity.valueMissing) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showZipError)("Please enter a zip code");
  } else if (failRegex()) {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showZipError)(failRegexMsg);
  } else {
    (0,_showErrors__WEBPACK_IMPORTED_MODULE_0__.showZipError)("");
  }
};

_nodes__WEBPACK_IMPORTED_MODULE_1__.zip.addEventListener("input", validateZip);




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitForm */ "./src/submitForm.js");
/* harmony import */ var _validateConfirmPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateConfirmPass */ "./src/validateConfirmPass.js");
/* harmony import */ var _validateCountry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateCountry */ "./src/validateCountry.js");
/* harmony import */ var _validateEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateEmail */ "./src/validateEmail.js");
/* harmony import */ var _validatePass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validatePass */ "./src/validatePass.js");
/* harmony import */ var _validateZip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validateZip */ "./src/validateZip.js");








// display defaults on first load
(0,_validateEmail__WEBPACK_IMPORTED_MODULE_4__.validateEmail)();
(0,_validateCountry__WEBPACK_IMPORTED_MODULE_3__.validateCountry)();
(0,_validateZip__WEBPACK_IMPORTED_MODULE_6__.validateZip)();
(0,_validatePass__WEBPACK_IMPORTED_MODULE_5__.validatePassword)();
(0,_validateConfirmPass__WEBPACK_IMPORTED_MODULE_2__.validateConfirmPassword)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNkLElBQUkseURBQVk7QUFDaEIsSUFBSSxTQUFTLHVDQUFHO0FBQ2hCLElBQUkseURBQVk7QUFDaEIsSUFBSTtBQUNKLElBQUkseURBQVk7QUFDaEIsSUFBSTtBQUNKLElBQUkseURBQVk7QUFDaEI7QUFDQTs7QUFFQSx1Q0FBRzs7QUFFb0I7Ozs7Ozs7VUMvQ3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDQTtBQUMwQztBQUNaO0FBQ0o7QUFDRTtBQUNOOztBQUU1QztBQUNBLDZEQUFhO0FBQ2IsaUVBQWU7QUFDZix5REFBVztBQUNYLCtEQUFnQjtBQUNoQiw2RUFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLXdpdGgtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLXdpdGgtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLXdpdGgtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vc3JjL25vZGVzLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vc3JjL3Jlc2V0LmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vc3JjL3Nob3dFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLXdpdGgtanMvLi9zcmMvc3VibWl0Rm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL3NyYy92YWxpZGF0ZUNvbmZpcm1QYXNzLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vc3JjL3ZhbGlkYXRlQ291bnRyeS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL3NyYy92YWxpZGF0ZUVtYWlsLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzLy4vc3JjL3ZhbGlkYXRlUGFzcy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL3NyYy92YWxpZGF0ZVppcC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLXdpdGgtanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24td2l0aC1qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyLFxuaW5wdXQsXG5zZWxlY3QsXG5idXR0b24sXG4ucG9wdXAtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGdyZXk7XG4gIHdpZHRoOiBjbGFtcCg0MDBweCwgNTAlLCA4MCUpO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIGdhcDogMzBweDtcbn1cblxuaDEge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcbiAgZ2FwOiAzMHB4O1xufVxuXG5kaXYuZW1haWwge1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmZvcm0gPiBkaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiA1cHg7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xufVxuXG5idXR0b25bdHlwZT1cInJlc2V0XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5zZWxlY3Qgb3B0aW9uOmZpcnN0LW9mLXR5cGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dDppbnZhbGlkLFxuc2VsZWN0OmludmFsaWQge1xuICBib3JkZXI6IDJweCBzb2xpZCBtYXJvb247XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxMCwgMjE2KTtcbn1cblxub3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmRpYWxvZyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMzBweCBibGFjaztcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MCUsIDgwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG5cbmRpYWxvZyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlOztFQUVmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7O0VBRTdCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9EQUFvRDtFQUNwRCwwQ0FBMEM7RUFDMUMsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTs7RUFFWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyLFxcbmlucHV0LFxcbnNlbGVjdCxcXG5idXR0b24sXFxuLnBvcHVwLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IGdyZXk7XFxuICB3aWR0aDogY2xhbXAoNDAwcHgsIDUwJSwgODAlKTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbi1jb250ZW50KTtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuZGl2LmVtYWlsIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiICpcXFwiO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuZm9ybSA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogNXB4O1xcbiAgY29sdW1uLWdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnNlbGVjdCBvcHRpb246Zmlyc3Qtb2YtdHlwZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkLFxcbnNlbGVjdDppbnZhbGlkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG1hcm9vbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxMCwgMjE2KTtcXG59XFxuXFxub3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMzBweCBibGFjaztcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNTAlLCA4MCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcblxuLy8gSW5wdXRzXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIik7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xuY29uc3QgemlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBcIik7XG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzc3dvcmRcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tcGFzc3dvcmRcIik7XG5cbi8vIEVycm9yIGZpZWxkc1xuY29uc3QgZW1haWxFcnJvclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmVtYWlsIHBcIik7XG5jb25zdCBjb3VudHJ5RXJyb3JQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jb3VudHJ5IHBcIik7XG5jb25zdCB6aXBFcnJvclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnppcCBwXCIpO1xuY29uc3QgcGFzc3dvcmRFcnJvclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnBhc3N3b3JkIHBcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmRFcnJvclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcImRpdi5jb25maXJtLXBhc3N3b3JkIHBcIixcbik7XG5cbmV4cG9ydCB7XG4gIGZvcm0sXG4gIHBvcHVwLFxuICBlbWFpbCxcbiAgY291bnRyeSxcbiAgemlwLFxuICBwYXNzd29yZCxcbiAgY29uZmlybVBhc3N3b3JkLFxuICBlbWFpbEVycm9yUGFyYSxcbiAgY291bnRyeUVycm9yUGFyYSxcbiAgemlwRXJyb3JQYXJhLFxuICBwYXNzd29yZEVycm9yUGFyYSxcbiAgY29uZmlybVBhc3N3b3JkRXJyb3JQYXJhLFxufTtcbiIsImltcG9ydCB7IHBvcHVwIH0gZnJvbSBcIi4vbm9kZXNcIjtcbmltcG9ydCB7IGNsZWFyRm9ybSB9IGZyb20gXCIuL3Jlc2V0XCI7XG5cbmNvbnN0IHRvZ2dsZVBvcHVwID0gKCkgPT4ge1xuICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3QgYWdhaW5CdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuXG5hZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhckZvcm0oKTtcbiAgdG9nZ2xlUG9wdXAoKTtcbn0pO1xuXG5leHBvcnQgeyB0b2dnbGVQb3B1cCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL25vZGVzXCI7XG5cbmNvbnN0IGNsZWFyVGV4dCA9IChub2RlKSA9PiB7XG4gIGNvbnN0IHNlbGVjdE5vZGUgPSBub2RlO1xuICBzZWxlY3ROb2RlLnRleHRDb250ZW50ID0gXCJcIjtcbn07XG5cbmNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgZm9ybS5yZXNldCgpO1xufTtcblxuZXhwb3J0IHsgY2xlYXJUZXh0LCBjbGVhckZvcm0gfTtcbiIsImltcG9ydCB7IGNsZWFyVGV4dCB9IGZyb20gXCIuL3Jlc2V0XCI7XG5pbXBvcnQge1xuICBlbWFpbEVycm9yUGFyYSxcbiAgY291bnRyeUVycm9yUGFyYSxcbiAgemlwRXJyb3JQYXJhLFxuICBwYXNzd29yZEVycm9yUGFyYSxcbiAgY29uZmlybVBhc3N3b3JkRXJyb3JQYXJhLFxufSBmcm9tIFwiLi9ub2Rlc1wiO1xuXG5jb25zdCBzaG93RW1haWxFcnJvciA9IChzdHJpbmcpID0+IHtcbiAgY2xlYXJUZXh0KGVtYWlsRXJyb3JQYXJhKTtcbiAgZW1haWxFcnJvclBhcmEudGV4dENvbnRlbnQgPSBzdHJpbmc7XG59O1xuXG5jb25zdCBzaG93Q291bnRyeUVycm9yID0gKHN0cmluZykgPT4ge1xuICBjbGVhclRleHQoY291bnRyeUVycm9yUGFyYSk7XG4gIGNvdW50cnlFcnJvclBhcmEudGV4dENvbnRlbnQgPSBzdHJpbmc7XG59O1xuXG5jb25zdCBzaG93WmlwRXJyb3IgPSAoc3RyaW5nKSA9PiB7XG4gIGNsZWFyVGV4dCh6aXBFcnJvclBhcmEpO1xuICB6aXBFcnJvclBhcmEudGV4dENvbnRlbnQgPSBzdHJpbmc7XG59O1xuXG5jb25zdCBzaG93UGFzc3dvcmRFcnJvciA9IChzdHJpbmcpID0+IHtcbiAgY2xlYXJUZXh0KHBhc3N3b3JkRXJyb3JQYXJhKTtcbiAgcGFzc3dvcmRFcnJvclBhcmEudGV4dENvbnRlbnQgPSBzdHJpbmc7XG59O1xuXG5jb25zdCBzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IgPSAoc3RyaW5nKSA9PiB7XG4gIGNsZWFyVGV4dChjb25maXJtUGFzc3dvcmRFcnJvclBhcmEpO1xuICBjb25maXJtUGFzc3dvcmRFcnJvclBhcmEudGV4dENvbnRlbnQgPSBzdHJpbmc7XG59O1xuXG5leHBvcnQge1xuICBzaG93RW1haWxFcnJvcixcbiAgc2hvd0NvdW50cnlFcnJvcixcbiAgc2hvd1ppcEVycm9yLFxuICBzaG93UGFzc3dvcmRFcnJvcixcbiAgc2hvd0NvbmZpcm1QYXNzd29yZEVycm9yLFxufTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi9ub2Rlc1wiO1xuaW1wb3J0IHsgdG9nZ2xlUG9wdXAgfSBmcm9tIFwiLi9wb3B1cFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVDb25maXJtUGFzc3dvcmQgfSBmcm9tIFwiLi92YWxpZGF0ZUNvbmZpcm1QYXNzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUNvdW50cnkgfSBmcm9tIFwiLi92YWxpZGF0ZUNvdW50cnlcIjtcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tIFwiLi92YWxpZGF0ZUVtYWlsXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSBcIi4vdmFsaWRhdGVQYXNzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVppcCB9IGZyb20gXCIuL3ZhbGlkYXRlWmlwXCI7XG5cbmNvbnN0IHN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPXN1Ym1pdF1cIik7XG5cbmNvbnN0IHN1Ym1pdEZvcm0gPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIHZhbGlkYXRlRW1haWwoKTtcbiAgICB2YWxpZGF0ZUNvdW50cnkoKTtcbiAgICB2YWxpZGF0ZVppcCgpO1xuICAgIHZhbGlkYXRlUGFzc3dvcmQoKTtcbiAgICB2YWxpZGF0ZUNvbmZpcm1QYXNzd29yZCgpO1xuICB9IGVsc2Uge1xuICAgIHRvZ2dsZVBvcHVwKCk7XG4gIH1cbn07XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XG4iLCJpbXBvcnQgeyBzaG93Q29uZmlybVBhc3N3b3JkRXJyb3IgfSBmcm9tIFwiLi9zaG93RXJyb3JzXCI7XG5pbXBvcnQgeyBjb25maXJtUGFzc3dvcmQsIHBhc3N3b3JkIH0gZnJvbSBcIi4vbm9kZXNcIjtcblxuY29uc3QgcGFzc01pc21hdGNoID0gKCkgPT4ge1xuICBjb25maXJtUGFzc3dvcmQucGF0dGVybiA9IHBhc3N3b3JkLnZhbHVlO1xuICByZXR1cm4gY29uZmlybVBhc3N3b3JkLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaDtcbn07XG5cbmNvbnN0IHZhbGlkYXRlQ29uZmlybVBhc3N3b3JkID0gKCkgPT4ge1xuICBpZiAoY29uZmlybVBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHNob3dDb25maXJtUGFzc3dvcmRFcnJvcihcIlBsZWFzZSByZS1lbnRlciB5b3VyIHBhc3N3b3JkXCIpO1xuICB9IGVsc2UgaWYgKHBhc3NNaXNtYXRjaCgpKSB7XG4gICAgc2hvd0NvbmZpcm1QYXNzd29yZEVycm9yKFwiUGFzc3dvcmRzIG11c3QgbWF0Y2hcIik7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0NvbmZpcm1QYXNzd29yZEVycm9yKFwiXCIpO1xuICB9XG59O1xuXG5jb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHZhbGlkYXRlQ29uZmlybVBhc3N3b3JkKTtcblxuZXhwb3J0IHsgdmFsaWRhdGVDb25maXJtUGFzc3dvcmQgfTtcbiIsImltcG9ydCB7IHNob3dDb3VudHJ5RXJyb3IgfSBmcm9tIFwiLi9zaG93RXJyb3JzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVppcCB9IGZyb20gXCIuL3ZhbGlkYXRlWmlwXCI7XG5pbXBvcnQgeyBjb3VudHJ5IH0gZnJvbSBcIi4vbm9kZXNcIjtcblxuY29uc3QgdmFsaWRhdGVDb3VudHJ5ID0gKCkgPT4ge1xuICBpZiAoY291bnRyeS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBzaG93Q291bnRyeUVycm9yKFwiUGxlYXNlIHNlbGVjdCBhIGNvdW50cnlcIik7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0NvdW50cnlFcnJvcihcIlwiKTtcbiAgfVxufTtcblxuY291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICB2YWxpZGF0ZUNvdW50cnkoKTtcbiAgdmFsaWRhdGVaaXAoKTtcbn0pO1xuXG5leHBvcnQgeyBjb3VudHJ5LCB2YWxpZGF0ZUNvdW50cnkgfTtcbiIsImltcG9ydCB7IHNob3dFbWFpbEVycm9yIH0gZnJvbSBcIi4vc2hvd0Vycm9yc1wiO1xuaW1wb3J0IHsgZW1haWwgfSBmcm9tIFwiLi9ub2Rlc1wiO1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKCkgPT4ge1xuICBpZiAoZW1haWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgc2hvd0VtYWlsRXJyb3IoXCJQbGVhc2UgZW50ZXIgYW4gZW1haWxcIik7XG4gIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgc2hvd0VtYWlsRXJyb3IoXCJVc2UgdGhlIHBhdHRlcm46IGpvaG5AYXBwbGVzZWVkXCIpO1xuICB9IGVsc2Uge1xuICAgIHNob3dFbWFpbEVycm9yKFwiXCIpO1xuICB9XG59O1xuXG5lbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdmFsaWRhdGVFbWFpbCk7XG5cbmV4cG9ydCB7IHZhbGlkYXRlRW1haWwgfTtcbiIsImltcG9ydCB7IHNob3dQYXNzd29yZEVycm9yIH0gZnJvbSBcIi4vc2hvd0Vycm9yc1wiO1xuaW1wb3J0IHsgcGFzc3dvcmQgfSBmcm9tIFwiLi9ub2Rlc1wiO1xuXG5jb25zdCByZWdleCA9IFwiXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcXFxkKS57OCx9JFwiO1xuXG5jb25zdCBwYXNzd29yZFJlcXVpcmVtZW50cyA9XG4gIFwiYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgaXMgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmdcIjtcblxucGFzc3dvcmQucGF0dGVybiA9IHJlZ2V4O1xuXG5jb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKCkgPT4ge1xuICBpZiAocGFzc3dvcmQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoYFBsZWFzZSBlbnRlciBhIHBhc3N3b3JkYCk7XG4gIH0gZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgc2hvd1Bhc3N3b3JkRXJyb3IoYFBhc3N3b3JkIG11c3QgaGF2ZSAke3Bhc3N3b3JkUmVxdWlyZW1lbnRzfWApO1xuICB9IGVsc2Uge1xuICAgIHNob3dQYXNzd29yZEVycm9yKFwiXCIpO1xuICB9XG59O1xuXG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdmFsaWRhdGVQYXNzd29yZCk7XG5cbmV4cG9ydCB7IHBhc3N3b3JkLCB2YWxpZGF0ZVBhc3N3b3JkIH07XG4iLCJpbXBvcnQgeyBzaG93WmlwRXJyb3IgfSBmcm9tIFwiLi9zaG93RXJyb3JzXCI7XG5pbXBvcnQgeyBjb3VudHJ5LCB6aXAgfSBmcm9tIFwiLi9ub2Rlc1wiO1xuXG5jb25zdCBjb25zdHJhaW50cyA9IHtcbiAgc3dpdHplcmxhbmQ6IHtcbiAgICByZWdleDogXCJeXFxcXGR7NH0kXCIsXG4gICAgZXJyb3JNc2c6IFwiU3dpdHplcmxhbmQgWklQcyBtdXN0IGhhdmUgZXhhY3RseSA0IGRpZ2l0czogZS5nLiAxOTUwXCIsXG4gIH0sXG4gIGZyYW5jZToge1xuICAgIHJlZ2V4OiBcIl5cXFxcZHs1fSRcIixcbiAgICBlcnJvck1zZzogXCJGcmFuY2UgWklQcyBtdXN0IGhhdmUgZXhhY3RseSA1IGRpZ2l0czogZS5nLiA3NTAxMlwiLFxuICB9LFxuICBnZXJtYW55OiB7XG4gICAgcmVnZXg6IFwiXlxcXFxkezV9JFwiLFxuICAgIGVycm9yTXNnOiBcIkdlcm1hbnkgWklQcyBtdXN0IGhhdmUgZXhhY3RseSA1IGRpZ2l0czogZS5nLiAxMjM0NVwiLFxuICB9LFxuICBuZXRoZXJsYW5kOiB7XG4gICAgcmVnZXg6IFwiXlxcXFxkezR9XFxcXHM/W0EtWl17Mn0kXCIsXG4gICAgZXJyb3JNc2c6XG4gICAgICBcIk5ldGhlcmxhbmQgWklQcyBtdXN0IGhhdmUgZXhhY3RseSA0IGRpZ2l0cywgZm9sbG93ZWQgYnkgMiB1cHBlcmNhc2UgbGV0dGVyczogZS5nLiAnMTIzNCBBQicgb3IgJzEyMzRBQidcIixcbiAgfSxcbn07XG5cbmxldCBmYWlsUmVnZXhNc2c7XG5cbmNvbnN0IGZhaWxSZWdleCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0Q291bnRyeSA9IGNvdW50cnkudmFsdWU7XG4gIGNvbnN0IHsgcmVnZXgsIGVycm9yTXNnIH0gPSBjb25zdHJhaW50c1tzZWxlY3RDb3VudHJ5XTtcbiAgemlwLnBhdHRlcm4gPSByZWdleDtcbiAgaWYgKHppcC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIGZhaWxSZWdleE1zZyA9IGVycm9yTXNnO1xuICByZXR1cm4gemlwLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaDtcbn07XG5cbmNvbnN0IHZhbGlkYXRlWmlwID0gKCkgPT4ge1xuICBpZiAoIWNvdW50cnkudmFsdWUpIHtcbiAgICBzaG93WmlwRXJyb3IoXCJQbGVhc2Ugc2VsZWN0IGEgY291bnRyeSBmaXJzdFwiKTtcbiAgfSBlbHNlIGlmICh6aXAudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgc2hvd1ppcEVycm9yKFwiUGxlYXNlIGVudGVyIGEgemlwIGNvZGVcIik7XG4gIH0gZWxzZSBpZiAoZmFpbFJlZ2V4KCkpIHtcbiAgICBzaG93WmlwRXJyb3IoZmFpbFJlZ2V4TXNnKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93WmlwRXJyb3IoXCJcIik7XG4gIH1cbn07XG5cbnppcC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdmFsaWRhdGVaaXApO1xuXG5leHBvcnQgeyB2YWxpZGF0ZVppcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL3N1Ym1pdEZvcm1cIjtcbmltcG9ydCB7IHZhbGlkYXRlQ29uZmlybVBhc3N3b3JkIH0gZnJvbSBcIi4vdmFsaWRhdGVDb25maXJtUGFzc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVDb3VudHJ5IH0gZnJvbSBcIi4vdmFsaWRhdGVDb3VudHJ5XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSBcIi4vdmFsaWRhdGVFbWFpbFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVQYXNzd29yZCB9IGZyb20gXCIuL3ZhbGlkYXRlUGFzc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVaaXAgfSBmcm9tIFwiLi92YWxpZGF0ZVppcFwiO1xuXG4vLyBkaXNwbGF5IGRlZmF1bHRzIG9uIGZpcnN0IGxvYWRcbnZhbGlkYXRlRW1haWwoKTtcbnZhbGlkYXRlQ291bnRyeSgpO1xudmFsaWRhdGVaaXAoKTtcbnZhbGlkYXRlUGFzc3dvcmQoKTtcbnZhbGlkYXRlQ29uZmlybVBhc3N3b3JkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=