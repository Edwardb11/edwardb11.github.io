"use strict";
exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 6526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ projectVariants),
/* harmony export */   Ji: () => (/* binding */ fadeIn),
/* harmony export */   Ym: () => (/* binding */ slideIn),
/* harmony export */   iM: () => (/* binding */ slideUp),
/* harmony export */   v5: () => (/* binding */ getSectionAnimation)
/* harmony export */ });
/* unused harmony export sectionVariants */
/**
 * Make component fade in from opacity 0 to opacity 1
 * @param {number} [delay=0] - in seconds
 * @returns {Variants} Variants
 */ const fadeIn = (delay = 0)=>({
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay
            }
        }
    });
/**
 * Makes component slide in from given direction
 * @param {number} [object.delay=0] - delay in seconds
 * @param {Direction} [object.direction="up"] - The direction from which the component should slide in
 * @param {number} [object.offset=10] - The offset from which components should slide in
 * @param {number} [object.duration] - Transition's duration
 * @returns {Variants} Variants
 */ const slideIn = ({ delay = 0, direction = "up", offset = 10 })=>{
    return {
        hidden: {
            y: direction === "down" ? -offset : direction === "up" ? offset : 0,
            x: direction === "left" ? -offset : direction === "right" ? offset : 0,
            opacity: 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay
            }
        }
    };
};
/**
 * Slide's component in up direction
 * @param {number} [object.delay=0] - The transition's delay
 * @param {number} [object.duration=1.25] - Duration of transition
 * @param {number} [object.offset=20] -  The offset from which components should slide in
 * @returns {Variants} Variants
 */ // slideIn({
//   delay,
//   duration,
//   offset,
// });
const slideUp = ({ delay = 0, duration = 1.25, offset = 20 })=>({
        hidden: {
            y: offset,
            opacity: 0
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                delay,
                duration
            }
        }
    });
// * SECTION VARIANTS
// * For sections
const sectionVariants = slideUp({
    delay: 0.5,
    duration: 1.75,
    offset: 50
});
const getSectionAnimation = {
    variants: sectionVariants,
    initial: "hidden",
    whileInView: "show",
    viewport: {
        once: true
    }
};
// * For projects
const projectVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    show: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.2 * i
            }
        })
};


/***/ }),

/***/ 3067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9930);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// For separating animation props from button props
const buttonProps = [
    "center",
    "children",
    "className",
    "size",
    "type",
    "href"
];
const Button = (props)=>{
    const { className, children, type = "button", size = "sm", center = false } = props;
    const classes = `${size === "sm" ? "p-2 px-4 text-sm border-[1.5px] " : "text-sm p-4 px-6 border-2"} block ${center ? "mx-auto" : ""} w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`;
    // TODO: Needs to improve this framer motion logic
    if (props.type === "link") {
        const { sameTab, ...motionProps } = props;
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__/* .removeKeys */ .lu)(motionProps, buttonProps);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
            ...motionProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: classes,
                href: props.href,
                target: sameTab ? "_self" : "_blank",
                rel: "noopener noreferrer",
                children: children
            })
        });
    }
    if (type == "button") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: type,
            className: classes,
            onClick: props.onClick,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _context_theme_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(263);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const DarkModeButton = ({ className, onClick, ...rest })=>{
    const { isDark, toggleTheme } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_theme_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    const clickHandler = (e)=>{
        onClick && onClick(e);
        toggleTheme();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
        className: `rounded-lg p-1 hover:text-accent focus:text-accent focus:outline-none focus:bg-bg-secondary cursor-pointer w-fit ${className} duration-200`,
        onClick: clickHandler,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            icon: isDark ? "carbon:sun" : "ph:moon",
            width: "26",
            height: "26"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkModeButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const HeroImage = ({ src, alt })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-64 h-64 group sm:w-auto sm:h-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: src,
                alt: alt,
                width: 300,
                height: 300,
                className: "rounded shadow-xl"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroImage);


/***/ }),

/***/ 3128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const Link = ({ href, className = "", children, onClick = ()=>{}, withPadding = false, ...rest })=>{
    if (withPadding) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            className: `group ${className}`,
            onClick: onClick,
            ...rest,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "relative w-fit",
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: href,
        className: `relative ${className} group`,
        onClick: onClick,
        ...rest,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:outline-none group-focus:w-full bg-accent duration-300 ease-in-scroll"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 6147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const ListItem = ({ children, className = "" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: `before:content-['▹'] flex before:mr-3 before:text-accent before:block ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);


/***/ }),

/***/ 2331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const NavButton = ({ onClick, className, navbarCollapsed })=>{
    const classes = `bg-accent h-0.5 w-7 duration-200 ${navbarCollapsed ? "absolute" : ""}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${className} w-7 h-7 group transition focus:outline-none`,
        onClick: onClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `space-y-1.5 flex flex-col items-end relative ${navbarCollapsed ? "space-y-0 rotate-90 duration-300 delay-100" : "group-hover:space-y-1 group-focus:space-y-1"}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${classes} ${navbarCollapsed ? "rotate-45" : ""}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${classes} w-6 ${navbarCollapsed ? "opacity-0" : "opacity-100"}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${classes} ${navbarCollapsed ? "-rotate-45" : "w-5"}`
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavButton);


/***/ }),

/***/ 7464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7314);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ProjectCard = ({ name, url, repo, year, img, tags, ...rest })=>{
    // To avoid hydration failed error
    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    return domLoaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ...rest,
        className: "w-full max-w-[350px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: (e)=>{
                // Don't run this if the clicked target is an anchor element
                if (e.target.closest("a")) return;
                window.open(url);
            },
            className: "block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "overflow-hidden h-[200px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: img,
                        alt: name,
                        width: 300,
                        height: 300,
                        placeholder: "blur",
                        blurDataURL: _utils_config__WEBPACK_IMPORTED_MODULE_5__/* .blurImageURL */ .jS,
                        className: "object-cover w-full h-full"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-4 py-3 space-y-1",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-mono text-xs capitalize",
                                    children: tags.join(" | ")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center space-x-1.5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: repo,
                                            className: "block duration-200 hover:text-accent",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                icon: "tabler:brand-github",
                                                width: 20,
                                                height: 20
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: url,
                                            className: "block duration-200 hover:text-accent",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                icon: "ci:external-link",
                                                width: 22,
                                                height: 22
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                            className: "flex justify-between font-medium capitalize duration-200 group-hover:text-accent",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mr-1",
                                    children: year
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const SEO = (seoData)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "title",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "author",
                content: seoData.author
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: seoData.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: seoData.keywords.join(", ")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: seoData.url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: seoData.url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: seoData.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: seoData.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:url",
                content: seoData.url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:title",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:description",
                content: seoData.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:image",
                content: seoData.image
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1077);
/* harmony import */ var _lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_1__);


const ShowLottie = ({ path, className = "" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `max-w-sm md:max-w-md ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lottiefiles_react_lottie_player__WEBPACK_IMPORTED_MODULE_1__.Player, {
            autoplay: true,
            loop: true,
            src: path
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowLottie);


/***/ }),

/***/ 5344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6526);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Sidebar = ({ children, className = "", side = "left" })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .fadeIn */ .Ji)(2.75),
        initial: "hidden",
        animate: "show",
        className: `fixed bottom-0 flex-col items-center hidden md:flex ${className} ${side === "left" ? "left-6 xl:left-12" : "right-6 xl:right-12"}`,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-slate-500 h-24 w-0.5 mt-5"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9930);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([___WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Skill = ({ lottie, title, skills, points, className = "", ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        className: `flex gap-8 sm:gap-10 flex-col lg:flex-row items-center ${className}`,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-14 lg:w-1/2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "mb-5 text-2xl text-center capitalize sm:text-3xl",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap justify-center gap-2",
                        children: skills.map(({ name, icon })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .SkillIcon */ .yv, {
                                src: icon,
                                name: name
                            }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__/* .getId */ .zv)()))
                    }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__/* .getId */ .zv)()),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "space-y-2 text-base",
                        children: points.map((point)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .HC, {
                                children: point
                            }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__/* .getId */ .zv)()))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .ShowLottie */ .y2, {
                path: lottie,
                className: "md:min-h-[448px] md:min-w-[448px]"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skill);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SkillIcon = ({ src, name })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative grid text-2xl rounded-full shadow-md bg-bg-secondary dark:shadow-xl h-14 w-14 sm:h-16 sm:w-16 place-items-center group",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                icon: src,
                width: "32",
                height: "32"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100",
                children: [
                    name,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 255 255",
                        xmlSpace: "preserve",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                            className: "fill-current",
                            points: "0,0 127.5,127.5 255,0"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6516);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SocialIcon = ({ icon, url })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            href: url,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                icon: icon,
                width: 24,
                height: 24
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const SocialLink = ({ href, children, className = "" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: href,
        target: "_blank",
        className: `block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLink);


/***/ }),

/***/ 7003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _hooks_use_window_width__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(227);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9930);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3128);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6147);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






const Tablist = ({ experiences })=>{
    const [activeExperience, setActiveExperience] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const windowWidth = (0,_hooks_use_window_width__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { role, company, companyUrl, started, upto, tasks } = experiences[activeExperience];
    const sm = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__/* .getBreakpointsWidth */ .ad)("sm");
    const sliderStyle = windowWidth <= sm ? {
        left: `calc(${activeExperience}*120px)`
    } : {
        top: `calc(${activeExperience}*2.5rem)`
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px]",
                children: [
                    experiences.map(({ company }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${i === activeExperience ? "text-accent" : ""}`,
                            onClick: ()=>setActiveExperience(i),
                            children: company
                        }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__/* .getId */ .zv)())),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: sliderStyle,
                        className: "absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-1 space-y-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                className: "text-lg font-medium capitalize text-dark-2",
                                children: [
                                    role,
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        href: companyUrl,
                                        target: "_blank",
                                        className: "text-accent",
                                        children: [
                                            "@",
                                            company
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-mono text-xs capitalize",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        started,
                                        " - ",
                                        upto
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "space-y-2",
                        children: tasks.map((task)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: task
                            }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__/* .getId */ .zv)()))
                    })
                ]
            }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__/* .getId */ .zv)())
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tablist);


/***/ }),

/***/ 3752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Wrapper = ({ children, as = "section", className = "", id = "", animate = true, ...rest })=>{
    if (animate) {
        const MotionTag = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion)(as);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MotionTag, {
            id: id,
            className: `py-24 md:py-32 ${className}`,
            ...rest,
            children: children
        });
    }
    if (as === "section") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section, {
            id: id,
            className: `py-24 md:py-32 ${className}`,
            ...rest,
            children: children
        });
    }
    const CustomTag = `${as}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomTag, {
        id: id,
        className: `py-24 md:py-32 ${className}`,
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HC: () => (/* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   HJ: () => (/* reexport safe */ _SEO__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   IW: () => (/* reexport safe */ _SocialLink__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   QZ: () => (/* reexport safe */ _SocialIcon__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   UH: () => (/* reexport safe */ _Skill__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   YE: () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   ZG: () => (/* reexport safe */ _HeroImage__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   fe: () => (/* reexport safe */ _NavButton__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   ib: () => (/* reexport safe */ _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   im: () => (/* reexport safe */ _Wrapper__WEBPACK_IMPORTED_MODULE_15__.Z),
/* harmony export */   p$: () => (/* reexport safe */ _Tablist__WEBPACK_IMPORTED_MODULE_14__.Z),
/* harmony export */   rU: () => (/* reexport safe */ _Link__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   t: () => (/* reexport safe */ _ProjectCard__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   y2: () => (/* reexport safe */ _ShowLottie__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   yv: () => (/* reexport safe */ _SkillIcon__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   zx: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3067);
/* harmony import */ var _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6393);
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9697);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3128);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6147);
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2331);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7464);
/* harmony import */ var _SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9607);
/* harmony import */ var _ShowLottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2532);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5344);
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5138);
/* harmony import */ var _SkillIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3772);
/* harmony import */ var _SocialIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4622);
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6516);
/* harmony import */ var _Tablist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7003);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Button__WEBPACK_IMPORTED_MODULE_0__, _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__, _ProjectCard__WEBPACK_IMPORTED_MODULE_6__, _Sidebar__WEBPACK_IMPORTED_MODULE_9__, _Skill__WEBPACK_IMPORTED_MODULE_10__, _SkillIcon__WEBPACK_IMPORTED_MODULE_11__, _SocialIcon__WEBPACK_IMPORTED_MODULE_12__, _Wrapper__WEBPACK_IMPORTED_MODULE_15__]);
([_Button__WEBPACK_IMPORTED_MODULE_0__, _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__, _ProjectCard__WEBPACK_IMPORTED_MODULE_6__, _Sidebar__WEBPACK_IMPORTED_MODULE_9__, _Skill__WEBPACK_IMPORTED_MODULE_10__, _SkillIcon__WEBPACK_IMPORTED_MODULE_11__, _SocialIcon__WEBPACK_IMPORTED_MODULE_12__, _Wrapper__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6526);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9930);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const About = ()=>{
    const { title, img, list } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_4__.aboutSection;
    // To avoid hydration error
    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    return domLoaded ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
        id: "about",
        ..._animations__WEBPACK_IMPORTED_MODULE_1__/* .getSectionAnimation */ .v5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "heading-secondary",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col items-center gap-16 lg:items-start lg:flex-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-4 lg:w-3/5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Hi, my name is Edward Brito, I'm a Full-Stack developer with around 2 years of experience in developing web applications."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "My main focus these days is to continue learning backend development."
                            }),
                            list && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: list.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "grid w-2/3 grid-cols-2 gap-1 text-sm",
                                        children: list.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ListItem */ .HC, {
                                                children: item
                                            }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_3__/* .getId */ .zv)()))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .HeroImage */ .ZG, {
                        src: img,
                        alt: _utils_portfolio__WEBPACK_IMPORTED_MODULE_4__/* .author */ .v.name
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6526);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Contact = ()=>{
    const { subtitle, title, paragraphs, link } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_3__.contactSection;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
        id: "contact",
        className: "max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32",
        ..._animations__WEBPACK_IMPORTED_MODULE_1__/* .getSectionAnimation */ .v5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-3 font-mono text-sm capitalize text-accent",
                children: subtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "heading-secondary !mb-5",
                children: title
            }),
            paragraphs.map((paragraph, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: paragraph
                }, i)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                type: "link",
                size: "lg",
                href: link,
                center: true,
                className: "mt-12",
                children: "Say Hello"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3371:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4277);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Email = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Sidebar */ .YE, {
        side: "right",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .SocialLink */ .IW, {
            href: `mailto:${_utils_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .author */ .v.email}`,
            className: "[writing-mode:vertical-lr] font-mono tracking-widest text-xs",
            children: _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .author */ .v.email
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8407:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6526);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5616);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Experience = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {
        id: "experience",
        className: "max-w-3xl py-32 mx-auto",
        ..._animations__WEBPACK_IMPORTED_MODULE_1__/* .getSectionAnimation */ .v5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "heading-secondary",
                children: _utils_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .experienceSection */ .TC.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Tablist */ .p$, {
                experiences: _utils_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .experienceSection */ .TC.experiences
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SocialLinks__WEBPACK_IMPORTED_MODULE_2__]);
_SocialLinks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "max-w-lg mx-auto mb-5 font-mono text-xs text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "flex justify-center gap-3 mb-3 md:hidden"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: _utils_portfolio__WEBPACK_IMPORTED_MODULE_1__/* .footerSection */ .jI.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "transition hover:text-accent",
                children: _utils_portfolio__WEBPACK_IMPORTED_MODULE_1__/* .footerSection */ .jI.title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6526);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var _hooks_use_window_width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(227);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9930);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5616);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Hero = ()=>{
    const { cta, subtitle, title, tagline, description, specialText } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__.heroSection;
    const windowWidth = (0,_hooks_use_window_width__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const md = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getBreakpointsWidth */ .ad)("md");
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;
    const getAnimationDelay = (i, increment = 0.15)=>DEFAULT_ANIMATION_DELAY + increment * i;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
        id: "hero",
        className: "flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(0)
                }),
                initial: "hidden",
                animate: "show",
                className: "font-mono text-sm md:text-base text-accent",
                children: subtitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h1, {
                        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideUp */ .iM)({
                            delay: getAnimationDelay(1)
                        }),
                        initial: "hidden",
                        animate: "show",
                        className: "text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h1, {
                        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideUp */ .iM)({
                            delay: getAnimationDelay(2)
                        }),
                        initial: "hidden",
                        animate: "show",
                        className: "leading-[1.2]",
                        children: tagline
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(3)
                }),
                initial: "hidden",
                animate: "show",
                className: "max-w-xl text-base md:text-lg",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(4)
                }),
                initial: "hidden",
                animate: "show",
                className: "font-mono text-xs md:text-sm text-accent",
                children: specialText
            }),
            cta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                size: "lg",
                type: "link",
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(5)
                }),
                initial: "hidden",
                animate: "show",
                href: cta?.url ?? "#",
                className: `mt-5 xs:mt-8 md:mt-10 ${cta.hideInDesktop ? "md:hidden" : ""}`,
                sameTab: cta?.sameTab,
                children: cta.title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3371);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2440);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(931);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3244);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Email__WEBPACK_IMPORTED_MODULE_1__, _Footer__WEBPACK_IMPORTED_MODULE_2__, _Navbar__WEBPACK_IMPORTED_MODULE_3__, _Social__WEBPACK_IMPORTED_MODULE_4__]);
([_Email__WEBPACK_IMPORTED_MODULE_1__, _Footer__WEBPACK_IMPORTED_MODULE_2__, _Navbar__WEBPACK_IMPORTED_MODULE_3__, _Social__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Layout = ({ children, className = "" })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: `mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`,
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Social__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Email__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6526);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var _hooks_use_window_width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(227);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9930);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5616);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









/**
 * Hides the navbar while scrolling down
 * @param {Object} config
 * @param {String} [config.id=navbar] - id of navbar
 * @param {Number} [config.offset=100] - offset of navbar in px
 */ const hideNavWhileScrolling = ({ id = "navbar", offset = 100, when = true })=>{
    const nav = document.getElementById(id);
    if (!nav) return;
    let prevScrollPos = window.pageYOffset;
    window.onscroll = ()=>{
        if (when) {
            const curScrollPos = window.pageYOffset;
            if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
            else nav.style.top = "0";
            prevScrollPos = curScrollPos;
        }
    };
};
const NavItem = ({ href, children, onClick, index, delay })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
        className: "group",
        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideIn */ .Ym)({
            delay: delay + index / 10,
            direction: "down"
        }),
        initial: "hidden",
        animate: "show",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU, {
            href: href || `/#${children}`,
            className: "block p-2 duration-500 hover:text-accent",
            onClick: onClick,
            withPadding: true,
            children: children
        })
    });
};
const Navbar = ()=>{
    const { cta, navLinks } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__.navbarSection;
    const [navbarCollapsed, setNavbarCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const windowWidth = (0,_hooks_use_window_width__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const md = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getBreakpointsWidth */ .ad)("md");
    const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        hideNavWhileScrolling({
            when: !navbarCollapsed
        });
    }, [
        navbarCollapsed
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.header, {
        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .fadeIn */ .Ji)(0.5),
        initial: "hidden",
        animate: "show",
        id: "navbar",
        className: "fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "relative text-2xl capitalize font-signature text-accent group top-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: "/#hero",
                    className: "block",
                    children: [
                        _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .author */ .v.name,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .NavButton */ .fe, {
                onClick: ()=>{
                    setNavbarCollapsed((prev)=>!prev);
                },
                navbarCollapsed: navbarCollapsed,
                className: "md:invisible"
            }),
            (navbarCollapsed || windowWidth > md) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center",
                    children: [
                        navLinks.map(({ name, url }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                                href: url,
                                index: i,
                                delay: ANIMATION_DELAY,
                                onClick: ()=>setNavbarCollapsed(false),
                                children: name
                            }, i)),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between gap-5 xl:gap-6",
                            children: [
                                cta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                    type: "link",
                                    href: cta.url,
                                    sameTab: cta?.sameTab,
                                    variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideIn */ .Ym)({
                                        delay: ANIMATION_DELAY + navLinks.length / 10,
                                        direction: "down"
                                    }),
                                    initial: "hidden",
                                    animate: "show",
                                    children: cta.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .DarkModeButton */ .ib, {
                                    onClick: ()=>setNavbarCollapsed(false),
                                    variants: (0,_animations__WEBPACK_IMPORTED_MODULE_1__/* .slideIn */ .Ym)({
                                        delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                                        direction: "down"
                                    }),
                                    initial: "hidden",
                                    animate: "show"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6526);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4277);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7314);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9930);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5616);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Projects = ()=>{
    const { projects, title } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__.projectsSection;
    const [showMore, setShowMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const topProjects = projects.slice(0, _utils_config__WEBPACK_IMPORTED_MODULE_7__/* .PROJECTS_INITIALLY */ .tp);
    const visibleProjects = showMore ? projects : topProjects;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Wrapper */ .im, {
        id: "projects",
        animate: false,
        ..._animations__WEBPACK_IMPORTED_MODULE_2__/* .getSectionAnimation */ .v5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h2, {
                className: "heading-secondary text-center !mb-12",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center",
                children: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .sortByYear */ .z_)(visibleProjects).map((project, i)=>{
                    if (i < _utils_config__WEBPACK_IMPORTED_MODULE_7__/* .PROJECTS_INITIALLY */ .tp) {
                        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_3__/* .ProjectCard */ .t, {
                            ...project,
                            key: project.id,
                            variants: _animations__WEBPACK_IMPORTED_MODULE_2__/* .projectVariants */ .G,
                            initial: "hidden",
                            whileInView: "show",
                            custom: i,
                            viewport: {
                                once: true
                            }
                        });
                    }
                    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_3__/* .ProjectCard */ .t, {
                        ...project,
                        key: project.id,
                        variants: _animations__WEBPACK_IMPORTED_MODULE_2__/* .projectVariants */ .G,
                        initial: "hidden",
                        animate: "show",
                        custom: i - _utils_config__WEBPACK_IMPORTED_MODULE_7__/* .PROJECTS_INITIALLY */ .tp
                    });
                })
            }),
            projects.length > _utils_config__WEBPACK_IMPORTED_MODULE_7__/* .PROJECTS_INITIALLY */ .tp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                size: "lg",
                className: "!mt-20",
                center: true,
                onClick: ()=>setShowMore((prev)=>!prev),
                children: showMore ? "show less" : "show more"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6526);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4277);
/* harmony import */ var _context_theme_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(263);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Skills = ()=>{
    const { title, skills } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_4__.skillsSection;
    const { isDark } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_theme_context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
        id: "skills",
        ..._animations__WEBPACK_IMPORTED_MODULE_1__/* .getSectionAnimation */ .v5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-center heading-secondary",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "space-y-32",
                children: skills.map(({ id, lottie, softwareSkills, points, title })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Skill */ .UH, {
                        className: "odd:lg:flex-row-reverse",
                        lottie: lottie[isDark ? "dark" : "light"],
                        skills: softwareSkills,
                        points: points,
                        title: title,
                        ..._animations__WEBPACK_IMPORTED_MODULE_1__/* .getSectionAnimation */ .v5
                    }, id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4277);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _SocialLinks__WEBPACK_IMPORTED_MODULE_2__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _SocialLinks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Social = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Sidebar */ .YE, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 650:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4277);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SocialLinks = ({ className = "" })=>{
    const { socialLinks } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__.socialSection;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: className,
        children: socialLinks.map(({ icon, url })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .SocialIcon */ .QZ, {
                icon: icon,
                url: url
            }, url))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLinks);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ar: () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   CL: () => (/* reexport safe */ _About__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   VM: () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   a3: () => (/* reexport safe */ _Experience__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   nA: () => (/* reexport safe */ _Skills__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   pj: () => (/* reexport safe */ _Projects__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   r8: () => (/* reexport safe */ _Contact__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5466);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3371);
/* harmony import */ var _Experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8407);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2440);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3361);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(305);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(931);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7243);
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6231);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3244);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_About__WEBPACK_IMPORTED_MODULE_0__, _Contact__WEBPACK_IMPORTED_MODULE_1__, _Email__WEBPACK_IMPORTED_MODULE_2__, _Experience__WEBPACK_IMPORTED_MODULE_3__, _Footer__WEBPACK_IMPORTED_MODULE_4__, _Hero__WEBPACK_IMPORTED_MODULE_5__, _Layout__WEBPACK_IMPORTED_MODULE_6__, _Navbar__WEBPACK_IMPORTED_MODULE_7__, _Projects__WEBPACK_IMPORTED_MODULE_8__, _Skills__WEBPACK_IMPORTED_MODULE_9__, _Social__WEBPACK_IMPORTED_MODULE_10__, _SocialLinks__WEBPACK_IMPORTED_MODULE_11__]);
([_About__WEBPACK_IMPORTED_MODULE_0__, _Contact__WEBPACK_IMPORTED_MODULE_1__, _Email__WEBPACK_IMPORTED_MODULE_2__, _Experience__WEBPACK_IMPORTED_MODULE_3__, _Footer__WEBPACK_IMPORTED_MODULE_4__, _Hero__WEBPACK_IMPORTED_MODULE_5__, _Layout__WEBPACK_IMPORTED_MODULE_6__, _Navbar__WEBPACK_IMPORTED_MODULE_7__, _Projects__WEBPACK_IMPORTED_MODULE_8__, _Skills__WEBPACK_IMPORTED_MODULE_9__, _Social__WEBPACK_IMPORTED_MODULE_10__, _SocialLinks__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindowWidth = ()=>{
    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    if (false) {}
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWindowWidth(window.innerWidth);
    }, []);
    return windowWidth;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowWidth);


/***/ }),

/***/ 7314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jS: () => (/* binding */ blurImageURL),
/* harmony export */   mH: () => (/* binding */ resumeFileName),
/* harmony export */   tp: () => (/* binding */ PROJECTS_INITIALLY)
/* harmony export */ });
const PROJECTS_INITIALLY = 6;
const resumeFileName = "resume.pdf";
const blurImageURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAEZAmYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==";


/***/ }),

/***/ 9930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ad: () => (/* binding */ getBreakpointsWidth),
/* harmony export */   lu: () => (/* binding */ removeKeys),
/* harmony export */   z_: () => (/* binding */ sortByYear),
/* harmony export */   zv: () => (/* binding */ getId)
/* harmony export */ });
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2987);
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8842);
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__);


const fullConfig = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default()((_tailwind_config__WEBPACK_IMPORTED_MODULE_0___default()));
/**
 * Returns the breakpoint's width
 * @param breakpoint - Configured breakpoints: xs sm md lg xl 2xl
 * @returns width - Width of the breakpoint
 */ const getBreakpointsWidth = (breakpoint)=>{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return +fullConfig?.theme?.screens[breakpoint].slice(0, -2);
};
/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */ const getId = ()=>`id${Math.random().toString(16).slice(2)}`;
/**
 * Returns the projects by sorting them by year (descending)
 * @param {ProjectType[]} projects array of projects
 * @returns {ProjectType[]} array of sorted projects
 */ const sortByYear = (projects)=>{
    return projects.sort((a, b)=>b.year - a.year);
};
/**
 * Modifies the given object by removing the given keys
 * @param object object from which keys need to be removed
 * @param keys array of keys which needs to be removed from the object
 */ const removeKeys = (object, keys)=>{
    keys.forEach((field)=>delete object[field]);
};


/***/ }),

/***/ 5616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TC: () => (/* binding */ experienceSection),
/* harmony export */   aboutSection: () => (/* binding */ aboutSection),
/* harmony export */   contactSection: () => (/* binding */ contactSection),
/* harmony export */   hD: () => (/* binding */ seoData),
/* harmony export */   heroSection: () => (/* binding */ heroSection),
/* harmony export */   jI: () => (/* binding */ footerSection),
/* harmony export */   navbarSection: () => (/* binding */ navbarSection),
/* harmony export */   projectsSection: () => (/* binding */ projectsSection),
/* harmony export */   skillsSection: () => (/* binding */ skillsSection),
/* harmony export */   socialSection: () => (/* binding */ socialSection),
/* harmony export */   v: () => (/* binding */ author)
/* harmony export */ });
/* unused harmony exports socialLinks, educationSection */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7314);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9930);


/*
 * =========================
 * AUTHOR INFO
 * =========================
 */ const socialLinks = {
    facebook: "https://www.facebook.com/EdwardBritoDiaz/",
    instagram: "https://www.instagram.com/brito_edward11/",
    twitter: "https://twitter.com/brito_edward11",
    github: "https://github.com/Edwardb11",
    linkedin: "https://www.linkedin.com/in/edwardb11/"
};
const author = {
    name: "Edward Brito",
    email: "edwardbrito11@hotmail.com"
};
const seoData = {
    title: "Edward Brito | Full-Stack Developer",
    description: "Edward Brito is a Full-Stack developer who specializes in building complete Frontend and Backend applications.",
    author: author.name,
    image: "",
    url: "https://edwardb11-github-io.vercel.app/",
    keywords: [
        "Edward",
        "Edward Brito",
        "@brito_edward11",
        "edwardbrito",
        "Portfolio",
        "Edward Portfolio ",
        "Edward Brito Portfolio"
    ]
};
/*
 * =========================
 * SECTIONS
 * =========================
 */ // Navbar Section
const navbarSection = {
    navLinks: [
        {
            name: "about",
            url: "/#about"
        },
        {
            name: "skills",
            url: "/#skills"
        },
        {
            name: "experience",
            url: "/#experience"
        },
        {
            name: "projects",
            url: "/#projects"
        },
        {
            name: "contact",
            url: "/#contact"
        }
    ],
    cta: {
        title: "resume",
        url: `/${_config__WEBPACK_IMPORTED_MODULE_1__/* .resumeFileName */ .mH}`
    }
};
// * Hero Section
const heroSection = {
    subtitle: "Hi, my name is",
    title: "Edward Brito.",
    tagline: "I create visually pleasing interfaces for the web.",
    description: "I am a Full-Stack web developer having experience in web applications with React.js and Next.js with TypeScript and TailwindCSS and Next.Js and ExpressJs.",
    // specialText: 'Currently available for remote job & freelance',
    cta: {
        title: "see my resume",
        url: `/${_config__WEBPACK_IMPORTED_MODULE_1__/* .resumeFileName */ .mH}`,
        hideInDesktop: true
    }
};
// * About Section
const aboutSection = {
    title: "about me",
    list: {
        title: "Here are a few technologies I’ve been working with recently:",
        items: [
            "ReactJs",
            "NextJs",
            "TailwindCSS",
            "ExpressJs",
            "NestJs",
            "TypeScript",
            "PostgreSQL",
            "AppSheet"
        ]
    },
    img: "/edward-brito.jpeg"
};
// * Skills Section
const skillsSection = {
    title: "what i do",
    skills: [
        {
            id: (0,_helper__WEBPACK_IMPORTED_MODULE_0__/* .getId */ .zv)(),
            title: "full stack development",
            lottie: {
                light: "/lotties/frontend.json",
                dark: "/lotties/frontend-dark.json"
            },
            points: [
                "Building responsive static websites using Next.js",
                "Building responsive Single Page Apps in React.js",
                "Building RESTful APIs in Express and NestJs"
            ],
            softwareSkills: [
                {
                    name: "html-5",
                    icon: "vscode-icons:file-type-html"
                },
                {
                    name: "CSS-3",
                    icon: "vscode-icons:file-type-css"
                },
                {
                    name: "javaScript",
                    icon: "vscode-icons:file-type-js-official"
                },
                {
                    name: "typeScript",
                    icon: "vscode-icons:file-type-typescript-official"
                },
                {
                    name: "python",
                    icon: "vscode-icons:file-type-python"
                },
                {
                    name: "nodejs",
                    icon: "logos:nodejs-icon"
                },
                {
                    name: "reactjs",
                    icon: "logos:react"
                },
                {
                    name: "nextjs",
                    icon: "logos:nextjs-icon"
                },
                {
                    name: "tailwindcss",
                    icon: "logos:tailwindcss-icon"
                },
                {
                    name: "redux",
                    icon: "logos:redux"
                },
                {
                    name: "database",
                    icon: "vscode-icons:file-type-sql"
                },
                {
                    name: "mysql",
                    icon: "vscode-icons:file-type-mysql"
                },
                {
                    name: "nestjs",
                    icon: "vscode-icons:file-type-nestjs"
                }
            ]
        }
    ]
};
// * Experience Section
const experienceSection = {
    title: "where i've worked",
    experiences: [
        {
            company: "Intellisys D. Corp.",
            companyUrl: "https://www.linkedin.com/company/intellisys-d--corp-/mycompany/",
            role: "Full-Stack Developer",
            started: "august 2021",
            upto: "present",
            tasks: [
                "I worked on the development of the telemedicine website TuHospital.do",
                "Develop API with NestJs, Graphql Postgres and TypeScript. ",
                "Collaborated with diverse  team of developers."
            ]
        }
    ]
};
const educationSection = {
    title: "where i've worked",
    experiences: [
        {
            company: "SHMTH Capital",
            companyUrl: "https://www.linkedin.com/company/shmth-capital/about/",
            role: "frontend developer intern",
            started: "april 2023",
            upto: "july 2023",
            tasks: [
                "Built trading platform using TradingView library.",
                "Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.",
                "Collaborated with diverse nationwide team of developers."
            ]
        },
        {
            company: "webnetics",
            companyUrl: "https://webnetic.vercel.app/",
            role: "frontend developer",
            started: "june 2022",
            upto: "january 2023",
            tasks: [
                "Built static frontend UI from the ground up using Next.js and Figma handover designs.",
                "Architected the folder structure and initial setup of the app.",
                "Reviewed and approved multiple Pull requests.",
                "Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing."
            ]
        },
        {
            company: "Kronos",
            companyUrl: "https://kronos-sscbs-21.github.io/proj-kronos-site/",
            role: "designer & developer",
            started: "january 2021",
            upto: "june 2021",
            tasks: [
                "Designed social media posts.",
                "Worked remotely with designing & tech team."
            ]
        }
    ]
};
// * Projects Section
const projectsSection = {
    title: "my projects",
    projects: [
        {
            id: (0,_helper__WEBPACK_IMPORTED_MODULE_0__/* .getId */ .zv)(),
            name: "image animations",
            url: "https://image-animations.vercel.app/",
            repo: "https://github.com/vatsalsinghkv/image-animations",
            img: "https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png",
            year: 2023,
            tags: [
                "CSS Animations",
                "Sass"
            ]
        },
        {
            id: (0,_helper__WEBPACK_IMPORTED_MODULE_0__/* .getId */ .zv)(),
            name: "fylo landing page",
            url: "https://fylo-kv.netlify.app/",
            repo: "https://github.com/vatsalsinghkv/fylo",
            img: "https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png",
            year: 2023,
            tags: [
                "Html",
                "Tailwind",
                "TS"
            ]
        }
    ]
};
// * Contact Section
const contactSection = {
    title: "get in touch",
    subtitle: "what's next",
    paragraphs: [
        // 'I’m currently looking for a remote job or any new opportunities.',
        "Whether you have a project to discuss or just want to say hi, my inbox is open for all!"
    ],
    link: `mailto:${author.email}`
};
// Social Links Section
const socialSection = {
    socialLinks: [
        {
            icon: "tabler:brand-github",
            url: socialLinks.github
        },
        {
            icon: "mdi:instagram",
            url: socialLinks.instagram
        },
        {
            icon: "lucide:twitter",
            url: socialLinks.twitter
        },
        {
            icon: "lucide:linkedin",
            url: socialLinks.linkedin
        },
        {
            icon: "lucide:facebook",
            url: socialLinks.facebook
        }
    ]
};
// Footer Section
const footerSection = {
    title: "Made with ☕ and ❤️ by Edwardb11",
    link: "https://github.com/Edwardb11/edwardb11.github.io"
};


/***/ }),

/***/ 2987:
/***/ ((module) => {

/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                signature: [
                    "agustina",
                    "sans-serif"
                ],
                sans: [
                    "Inter",
                    "sans-serif"
                ],
                mono: [
                    "Roboto Mono",
                    "monospace"
                ]
            },
            screens: {
                xs: "375px"
            },
            colors: {
                bg: "var(--color-bg)",
                "bg-secondary": "var(--color-bg-secondary)",
                accent: "var(--color-accent)",
                "accent-light": "var(--color-accent-light)",
                text: "var(--color-text)",
                "dark-1": "var(--color-dark-1)",
                "dark-2": "var(--color-dark-2)",
                "dark-3": "var(--color-dark-3)"
            },
            transitionTimingFunction: {
                "in-scroll": "cubic-bezier(0.645, 0.045, 0.355, 1)"
            },
            gridTemplateColumns: {
                "auto-300": "repeat(auto-fill, minmax(300px, 1fr))",
                "auto-250": "repeat(auto-fill, minmax(250px, 1fr))"
            }
        }
    },
    plugins: []
};


/***/ })

};
;