/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/scripts/helpers.js":
/*!**************************************!*\
  !*** ./assets/js/scripts/helpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disableScroll: () => (/* binding */ disableScroll),\n/* harmony export */   enableScroll: () => (/* binding */ enableScroll)\n/* harmony export */ });\n/** Disabled scroll */\nvar disableScroll = function disableScroll() {\n  var body = document.body;\n  var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';\n  var pagePosition = window.scrollY;\n  body.style.paddingRight = paddingOffset;\n  body.classList.add('disable-scroll');\n  body.dataset.position = pagePosition;\n  body.style.top = -pagePosition + 'px';\n};\nvar enableScroll = function enableScroll() {\n  var body = document.body;\n  var pagePosition = parseInt(document.body.dataset.position, 10);\n  body.style.top = 'auto';\n  body.classList.remove('disable-scroll');\n  body.style.paddingRight = '0px';\n  window.scroll({\n    top: pagePosition,\n    left: 0\n  });\n  body.removeAttribute('data-position');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvc2NyaXB0cy9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztFQUMvQixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0QsSUFBSTtFQUUxQixJQUFJRSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHSCxRQUFRLENBQUNELElBQUksQ0FBQ0ssV0FBVyxHQUFHLElBQUk7RUFDeEUsSUFBSUMsWUFBWSxHQUFHSCxNQUFNLENBQUNJLE9BQU87RUFFakNQLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxZQUFZLEdBQUdQLGFBQWE7RUFDdkNGLElBQUksQ0FBQ1UsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDcENYLElBQUksQ0FBQ1ksT0FBTyxDQUFDQyxRQUFRLEdBQUdQLFlBQVk7RUFDcENOLElBQUksQ0FBQ1EsS0FBSyxDQUFDTSxHQUFHLEdBQUcsQ0FBQ1IsWUFBWSxHQUFHLElBQUk7QUFDekMsQ0FBQztBQUVNLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7RUFDOUIsSUFBTWYsSUFBSSxHQUFHQyxRQUFRLENBQUNELElBQUk7RUFFMUIsSUFBSU0sWUFBWSxHQUFHVSxRQUFRLENBQUNmLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDWSxPQUFPLENBQUNDLFFBQVEsRUFBRSxFQUFFLENBQUM7RUFDL0RiLElBQUksQ0FBQ1EsS0FBSyxDQUFDTSxHQUFHLEdBQUcsTUFBTTtFQUN2QmQsSUFBSSxDQUFDVSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztFQUV2Q2pCLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxZQUFZLEdBQUcsS0FBSztFQUMvQk4sTUFBTSxDQUFDZSxNQUFNLENBQUM7SUFDVkosR0FBRyxFQUFFUixZQUFZO0lBQ2pCYSxJQUFJLEVBQUU7RUFDVixDQUFDLENBQUM7RUFDRm5CLElBQUksQ0FBQ29CLGVBQWUsQ0FBQyxlQUFlLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZXhfd2VicGFja19jb25maWcvLi9hc3NldHMvanMvc2NyaXB0cy9oZWxwZXJzLmpzP2M2MDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIERpc2FibGVkIHNjcm9sbCAqL1xyXG5leHBvcnQgY29uc3QgZGlzYWJsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGxldCBwYWRkaW5nT2Zmc2V0ID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgIGxldCBwYWdlUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmdPZmZzZXQ7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtc2Nyb2xsJyk7XHJcbiAgICBib2R5LmRhdGFzZXQucG9zaXRpb24gPSBwYWdlUG9zaXRpb247XHJcbiAgICBib2R5LnN0eWxlLnRvcCA9IC1wYWdlUG9zaXRpb24gKyAncHgnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW5hYmxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgbGV0IHBhZ2VQb3NpdGlvbiA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuZGF0YXNldC5wb3NpdGlvbiwgMTApO1xyXG4gICAgYm9keS5zdHlsZS50b3AgPSAnYXV0byc7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtc2Nyb2xsJyk7XHJcblxyXG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuICAgIHdpbmRvdy5zY3JvbGwoe1xyXG4gICAgICAgIHRvcDogcGFnZVBvc2l0aW9uLFxyXG4gICAgICAgIGxlZnQ6IDBcclxuICAgIH0pO1xyXG4gICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKTtcclxufSJdLCJuYW1lcyI6WyJkaXNhYmxlU2Nyb2xsIiwiYm9keSIsImRvY3VtZW50IiwicGFkZGluZ09mZnNldCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInBhZ2VQb3NpdGlvbiIsInNjcm9sbFkiLCJzdHlsZSIsInBhZGRpbmdSaWdodCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJwb3NpdGlvbiIsInRvcCIsImVuYWJsZVNjcm9sbCIsInBhcnNlSW50IiwicmVtb3ZlIiwic2Nyb2xsIiwibGVmdCIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/scripts/helpers.js\n");

/***/ }),

/***/ "./assets/js/scripts/mobile-menu.js":
/*!******************************************!*\
  !*** ./assets/js/scripts/mobile-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./assets/js/scripts/helpers.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  /** Mobile menu */\n  var burger = document.querySelector('.header-burger');\n  var headerMenu = document.querySelector('.header-menu');\n  var closeButton = document.querySelector('.header-close');\n  if (burger && headerMenu && closeButton) {\n    burger.addEventListener('click', function (e) {\n      e.preventDefault();\n      headerMenu.classList.add('active');\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();\n    });\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      headerMenu.classList.remove('active');\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.enableScroll)();\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvc2NyaXB0cy9tb2JpbGUtbWVudS5qcyIsIm1hcHBpbmdzIjoiOztBQUF3RDtBQUd4REUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hEO0VBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN2RCxJQUFNQyxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN6RCxJQUFNRSxXQUFXLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUUzRCxJQUFJRCxNQUFNLElBQUlFLFVBQVUsSUFBSUMsV0FBVyxFQUFFO0lBQ3JDSCxNQUFNLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBSyxDQUFDLEVBQUk7TUFDbENBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFFbEJILFVBQVUsQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQ2xDWCx1REFBYSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUZPLFdBQVcsQ0FBQ0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFLLENBQUMsRUFBSTtNQUN2Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUVsQkgsVUFBVSxDQUFDSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDckNYLHNEQUFZLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZXhfd2VicGFja19jb25maWcvLi9hc3NldHMvanMvc2NyaXB0cy9tb2JpbGUtbWVudS5qcz9jZmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpc2FibGVTY3JvbGwsIGVuYWJsZVNjcm9sbCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgLyoqIE1vYmlsZSBtZW51ICovXHJcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1cmdlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbWVudScpO1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWNsb3NlJyk7XHJcblxyXG4gICAgaWYgKGJ1cmdlciAmJiBoZWFkZXJNZW51ICYmIGNsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRpc2FibGVTY3JvbGwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaGVhZGVyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZW5hYmxlU2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyJdLCJuYW1lcyI6WyJkaXNhYmxlU2Nyb2xsIiwiZW5hYmxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnVyZ2VyIiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnUiLCJjbG9zZUJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/scripts/mobile-menu.js\n");

/***/ }),

/***/ "./assets/styles/scss/app.scss":
/*!*************************************!*\
  !*** ./assets/styles/scss/app.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc3R5bGVzL3Njc3MvYXBwLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxleF93ZWJwYWNrX2NvbmZpZy8uL2Fzc2V0cy9zdHlsZXMvc2Nzcy9hcHAuc2Nzcz9iOTNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/styles/scss/app.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/app": 0,
/******/ 			"assets/styles/css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkalex_webpack_config"] = self["webpackChunkalex_webpack_config"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/styles/css/app"], () => (__webpack_require__("./assets/js/scripts/helpers.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/styles/css/app"], () => (__webpack_require__("./assets/js/scripts/mobile-menu.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/styles/css/app"], () => (__webpack_require__("./assets/styles/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;