"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/chatbox.js":
/*!*******************************!*\
  !*** ./components/chatbox.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChatBox = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                backgroundColor: \"blue\",\n                fontFamily: \"Arial, sans-serif\",\n                maxWidth: \"400px\",\n                margin: \"0 0 0 auto\",\n                padding: \"20px\",\n                borderLeft: \"4px solid black\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-scroll\",\n                style: {\n                    backgroundColor: \"red\",\n                    padding: \"20px\",\n                    height: \"85vh\",\n                    msOverflowStyle: \"none\",\n                    scrollbarWidth: \"thin\",\n                    WebkitOverflowScrolling: \"touch\",\n                    scrollbarColor: \"transparent transparent\"\n                },\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"You\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"InfoBot\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-5\",\n                        style: {\n                            marginTop: \"10px\",\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\",\n                                style: {\n                                    padding: \"8px\",\n                                    borderRadius: \"4px\",\n                                    border: \"1px solid #ddd\",\n                                    background: \"#2E4374\",\n                                    border: \"1px solid #333\",\n                                    color: \"#fff\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendMessage,\n                                style: {\n                                    marginLeft: \"10px\",\n                                    padding: \"8px 12px\",\n                                    borderRadius: \"4px\",\n                                    backgroundColor: \"#3498db\",\n                                    color: \"#fff\",\n                                    border: \"none\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"DTIS5OvIgs5cgWPHCj6NEqfd+m8=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENBRUYsOERBQUNDO2dDQUNDQyxTQUFTOUM7Z0NBQ1RlLE9BQU87b0NBQ0xnQyxZQUFZO29DQUNaM0IsU0FBUztvQ0FDVHFCLGNBQWM7b0NBQ2R6QixpQkFBaUI7b0NBQ2pCNEIsT0FBTztvQ0FDUEYsUUFBUTtvQ0FDUk0sUUFBUTtnQ0FDVjswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQXpITXJEO0tBQUFBO0FBMkhOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdGJveC5qcz9lODUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDaGF0Qm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChuZXdNZXNzYWdlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIHRoZSB1c2VyJ3MgbWVzc2FnZVxyXG4gICAgY29uc3QgdXBkYXRlZE1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzLCB7IHRleHQ6IG5ld01lc3NhZ2UsIHNlbmRlcjogXCJ1c2VyXCIgfV07XHJcbiAgICBzZXRNZXNzYWdlcyh1cGRhdGVkTWVzc2FnZXMpO1xyXG4gICAgc2V0TmV3TWVzc2FnZShcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld01lc3NhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlcidzIG1lc3NhZ2UgdG8gdGhlIGJhY2tlbmQgdXNpbmcgQXhpb3NcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXRcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gQXNzdW1pbmcgdGhlIHNlcnZlciByZXNwb25kcyB3aXRoIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgYm90J3MgbWVzc2FnZVxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIGJvdGggdGhlIHVzZXIncyBtZXNzYWdlIGFuZCB0aGUgYm90J3MgcmVzcG9uc2VcclxuICAgICAgc2V0TWVzc2FnZXMoWy4uLnVwZGF0ZWRNZXNzYWdlcywgeyB0ZXh0OiByZXNwb25zZURhdGEsIHNlbmRlcjogXCJib3RcIiB9XSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3IsIGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBpbiB0aGUgY2hhdCBib3hcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgIGJvcmRlckxlZnQ6IFwiNHB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9J292ZXJmbG93LXktc2Nyb2xsJ1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogXCJyZWRcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI4NXZoXCIsXHJcbiAgICAgICAgICAgIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBJRS9FZGdlXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiBcInRoaW5cIiwgLy8gSGlkZSBzY3JvbGxiYXIgZm9yIEZpcmVmb3hcclxuICAgICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcclxuICAgICAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IFwidHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVyID09PSBcInVzZXJcIiA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0IGNoYXQtZW5kJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaW1hZ2UgYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE1MzQ1Mjg3NDE3NzUtNTM5OTRhNjlkYWViLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWhlYWRlcic+WW91PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1YmJsZSc+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LXN0YXJ0Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaW1hZ2UgYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE1MzQ1Mjg3NDE3NzUtNTM5OTRhNjlkYWViLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWhlYWRlcic+SW5mb0JvdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idWJibGUnPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS01J1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgbWVzc2FnZS4uLidcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2RkZFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMkU0Mzc0XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMzNcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNDk4ZGJcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNoYXRCb3giLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJ1cGRhdGVkTWVzc2FnZXMiLCJ0ZXh0Iiwic2VuZGVyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsIm1lc3NhZ2UiLCJoZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwiZGF0YSIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImhlaWdodCIsImNsYXNzTmFtZSIsIm1zT3ZlcmZsb3dTdHlsZSIsInNjcm9sbGJhcldpZHRoIiwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJzY3JvbGxiYXJDb2xvciIsIm1hcCIsImluZGV4IiwiaW1nIiwic3JjIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJidXR0b24iLCJvbkNsaWNrIiwibWFyZ2luTGVmdCIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});