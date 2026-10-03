"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[57799],{

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blender-katsune-0025ca6c957aaf3bd1e4452f0b2b44f5.png");

/***/ }),

/***/ 23623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Component_Diagram_nice-c5dcb30e281b98874b813397338a1c15.png");

/***/ }),

/***/ 23921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Paw-04057fb7fd2abdc56185f2942c82da26.jpg");

/***/ }),

/***/ 26625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_20240112_130120-47705444adcfcb1bbc8b9d50f3f80265.jpg");

/***/ }),

/***/ 28176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_20240112_130110-c3c5292d972976770c4fcca87f6bdeb1.jpg");

/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 31676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Use_Case_Model-03aee1189be621b066f0e15aeb551476.jpg");

/***/ }),

/***/ 38785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Circuit_scheme-8f1ac54329b3e572e6c9199d57a9a048.pdf");

/***/ }),

/***/ 45907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_030_presentation_slides_md_aaa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-projects-prj-030-presentation-slides-md-aaa.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_030_presentation_slides_md_aaa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ030/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ030/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ030/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ030/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ030/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.337976+00:00","fm_version_comment":"","guid":"df8b0e8f-78b7-4928-ab52-e98511db6fc6","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ030","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ030/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ030/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ030/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.337976+00:00',
	fm_version_comment: '',
	guid: 'df8b0e8f-78b7-4928-ab52-e98511db6fc6',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2026-10-03 09:50',
	modified: '2026-10-03 09:50',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'PRJ030 — Presentation';

const assets = {

};



const toc = [{
  "value": "Useless Cat Box",
  "id": "useless-cat-box",
  "level": 2
}, {
  "value": "Description/Introduction",
  "id": "descriptionintroduction",
  "level": 2
}, {
  "value": "Business layer",
  "id": "business-layer",
  "level": 2
}, {
  "value": "System layer",
  "id": "system-layer",
  "level": 2
}, {
  "value": "Technology layer",
  "id": "technology-layer",
  "level": 2
}, {
  "value": "Activity diagram",
  "id": "activity-diagram",
  "level": 2
}, {
  "value": "Design",
  "id": "design",
  "level": 2
}, {
  "value": "The box",
  "id": "the-box",
  "level": 3
}, {
  "value": "The head",
  "id": "the-head",
  "level": 3
}, {
  "value": "The paw",
  "id": "the-paw",
  "level": 3
}, {
  "value": "The Microbit and electrical parts",
  "id": "the-microbit-and-electrical-parts",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 2
}, {
  "value": "Outcomes",
  "id": "outcomes",
  "level": 2
}, {
  "value": "Future work",
  "id": "future-work",
  "level": 2
}, {
  "value": "Podporné súbory",
  "id": "podporné-súbory",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj030--presentation",
        children: "PRJ030 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "useless-cat-box",
      children: "Useless Cat Box"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "descriptionintroduction",
      children: "Description/Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The useless cat box is a funny contraption/device that primarily seeks to entertain the user. The useless cat box is a mechanical/electrical device that mimics a real cat in a box reacting to user switching a two-positional switch. After the user switches the switch, the box lid is opened, and the cat's head along with its paw are revealed. The cat subsequently presses the switch in order to reset it and the cover subsequently closes. The cat also performs this action in multiple ways, so that the animation does not get stale."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the user switches the switch to the up-facing position, a positional servomotor opens the box lid to display the attached cat head and give way for the paw. The paw, which is attached to another positional servomotor is then rotated in such a way, that it resets the switch to the down-facing position.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Component simple diagram",
        src: (__webpack_require__(23623)/* ["default"] */ .A) + "",
        width: "789",
        height: "431"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Use case simple diagram",
        src: (__webpack_require__(84834)/* ["default"] */ .A) + "",
        width: "692",
        height: "217"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "business-layer",
      children: "Business layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our business layer contains only single simple use case, because the only purpose of our device is to entertain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Use case diagram",
        src: (__webpack_require__(31676)/* ["default"] */ .A) + "",
        width: "692",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "system-layer",
      children: "System layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to best describe the system from the perspective of high level components, a high-level view of the components used in the circuit was created by grouping together all components of the system. The relationships between these components are showcased via association, which describes how each component is connected together via the battery board."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Component diagram",
        src: (__webpack_require__(54523)/* ["default"] */ .A) + "",
        width: "789",
        height: "431"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technology-layer",
      children: "Technology layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To best showcase how the technology was being used and connected in a more thorough detail and accuracy, a technology layer is being presented, which has the form of a circuit scheme."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Circuit scheme",
        src: (__webpack_require__(63409)/* ["default"] */ .A) + "",
        width: "877",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activity-diagram",
      children: "Activity diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The activity diagram is shown herein order to showcase the flow of the device operation. We have created 6 different animations that the cat performs to turn off the switch after its manual activation. After the switch has been turned down, the whole system subsequently awaits another switch signal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Activity diagram",
        src: (__webpack_require__(66823)/* ["default"] */ .A) + "",
        width: "707",
        height: "1061"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "design",
      children: "Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-box",
      children: "The box"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The outermost shell of the device, the wooden box, is made out of a 3mm thick sheet of plywood. All sides of the box with the exception of the lid have dovetail joints that have been secured with a permanent glue solution after the box had been assembled. The lid of the box is connected with the box shell with a door hinge, which itself is being attached to the wood with a double sided tape. The dimensions of the box are listed in the table below:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (cm)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.72"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-head",
      children: "The head"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The head of the cat is a 3D printed piece that's attached to the upper lid of the box using another door hinge. This attachment helps to balance the head in such a way, that it always appears inclined at almost 90° perpendicular to the bottom of the box. The dimensions of the cat head are listed as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (cm)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Width"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.53"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.74"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Height"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.02"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-paw",
      children: "The paw"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Similarly to the cat head, the paw is also a 3D printed piece that's being attached to the box via a positional servo motor. The paw is curved in such a way that it can hit the switch and reset it, while having the necessary torque to do so. The length of the arm is 6.63cm."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-microbit-and-electrical-parts",
      children: "The Microbit and electrical parts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All of these parts combined together form the brain and muscle of the box, as they operate all the functionality of it. The Microbit processor has a Kitronik board attached to it with a battery attachment dock, along with two slots for servomotors. Each slot operates a single servomotor, one servomotor opens the lid of the box, the other operates the paw to press the switch. The servomotors being used are the positional SG90 servomotors. Both servomotors are attached to the box using a combination of supporting LEGO pieces and double sided tape. A two positional switch is also connected to the Microbit processor via two wires. This switch is attached to the box via a 6mm wide hole that was drilled to the front side of the box using a power drill. The Microbit itself is positioned on the left back side of the box without being permanently attached as to ease maintenance. While the cover opening servomotor is positioned behind the head of the cat, the paw operating servomotor is positioned on the left side of the cat head."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before the physical work even begun on the project, the logical part has already been implemented. First, the logical circuit and the corresponding code with the animations had been developed and tested online via Tinkercad."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Working on the logic circuit in Tinkercad",
        src: (__webpack_require__(91389)/* ["default"] */ .A) + "",
        width: "2992",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First step of physical implementation was the creation of the shell, that will hold the whole assembly by itself - the box. The box was created on a wood laser cutter. After the parts of the box have been gathered, they were subsequently assembled via the dovetale joints and glued together by a permanent glue solution."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the box was created, it was time to make the physical components. Both the head and the paw have been 3D printed using a turqoiuse ABS fillament and the details, such as the eyes, paw pads, nose and ears have been painted with paints used for plastic models."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "3D printing the arm or paw",
        src: (__webpack_require__(96234)/* ["default"] */ .A) + "",
        width: "2992",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "3D printed paw with paw pads",
        src: (__webpack_require__(23921)/* ["default"] */ .A) + "",
        width: "2992",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Painted head with details",
        src: (__webpack_require__(64650)/* ["default"] */ .A) + "",
        width: "2992",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the 3D parts have been printed, the next logical step was to assemble the circuit as a whole and test out the code using actual electircal parts that will be used in the final prototype."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The models themselves had been modeled in the 3D modeling software Blender. Both the head and the paw were scaled as to fit the real-world dimensions. All together, they were also arranged to create a somewhat representational prototype."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Blender katsune head",
        src: (__webpack_require__(313)/* ["default"] */ .A) + "",
        width: "1920",
        height: "1039"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Blender useless box arrangement",
        src: (__webpack_require__(48509)/* ["default"] */ .A) + "",
        width: "1920",
        height: "1040"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Connecting components",
        src: (__webpack_require__(76595)/* ["default"] */ .A) + "",
        width: "2992",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before the whole circuit could be inserted and permanently attached to the box, the head and the switch had to be added first. Using a 6mm wide power drill a hole was drilled to the front side of the box and subsequently the switch was inserted through it and secured using an attached nut. The cat head was glued to the top lid of the box with the connection being secured with a door hinge."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Assembly of the head to the box lid with the switch in place",
        src: (__webpack_require__(28176)/* ["default"] */ .A) + "",
        width: "2992",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After this was done, the cat paw was secured to the servomotor via a horn attachment that came with the servomotor and screwed to place with accessory screws. The servomotor has also been placed and glued to a LEGO stand to position it correctly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "The attachment of the paw to the servomotor",
        src: (__webpack_require__(26625)/* ["default"] */ .A) + "",
        width: "2992",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After the hand was attached and tested to correctly reset the switch, it was time to finally assemble the whole thing together. The end result of this assembly is showcased in the video detailed in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#outcomes",
        children: "Outcomes section"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lastly, as a bonus and an artistic touch, a message has been engraved to the top lid of the box that suggests to the user that \"they are supposed to do not the cat\"."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Engraving message on top",
        src: (__webpack_require__(81779)/* ["default"] */ .A) + "",
        width: "3000",
        height: "4000"
      }), "{width=50%}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "outcomes",
      children: "Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Useless box is a fun and interactive experience that can keep you occupied for a long time. Arguing with the box to make the switch stay on. The box never allows that, and has fun ways to do it. Merging funny joke and interactive toy to create a fun experience for any age category. The final result is a wooden box with a simple switch and text on the top."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Link to the video of box demonstration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.youtube.com/embed/bIh0acDwSKU",
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://img.youtube.com/vi/bIh0acDwSKU/hqdefault.jpg",
          alt: "Watch the video"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-work",
      children: "Future work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Currently the Useless Box has multiple problems and shortcomings that could be resolved with future upgrades. The main problem to solve is the faulty switch or Micro", ":bit", ", where the box is only triggered every 2nd switch. The less important problem that could be fixed is redisigning the box into a more complex one that wouldn't have problems with overhangs and gaps in the box. This requires a more complex box and hinge solution too complicated for the prototype.\nThe shortcoming of the prototype is the durability. Most of the things are attached together by double-sided tape and supported by Lego. This was to make the implementation and designing process easier and faster. This causes a concern, where after being used multiple times, the tape can slowly start peeling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podporné-súbory",
      children: "Podporné súbory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(38785)/* ["default"] */ .A) + "",
          children: "Circuit_scheme"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 48509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blender-uselessbox-71b3c0b6bb4bd76537c722eb0f9110ca.png");

/***/ }),

/***/ 54523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Component_Diagram-ffdb88677a2f9779db275ec8725b0f83.jpg");

/***/ }),

/***/ 63409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/logic_picture-ab7cc05932d396b815d014825be309ba.png");

/***/ }),

/***/ 64650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/41832b26-46bf-47c3-820c-2dd11c24d66d-38359062199c97cbdad42b26fb0676a0.jpg");

/***/ }),

/***/ 66823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Activity_Diagram-09d6840b90c73b39f5a50b12587b3361.jpg");

/***/ }),

/***/ 76595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_20240110_172441-8f676de6d0331a5ec55b9543f8897aaf.jpg");

/***/ }),

/***/ 81779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_20240112_151916-8be11bb261c4f3f8c5f2c5c90579f32d.jpg");

/***/ }),

/***/ 84834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Use_Case_Model_nice-ce0dca8e6565ce2b3e55955b33052627.png");

/***/ }),

/***/ 91389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_20240110_162244-3b25a195c9096ef8d784a3d7e471f995.jpg");

/***/ }),

/***/ 96234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_20240110_162250-bec58476c62a94171c6fe0ecdf0201cc.jpg");

/***/ })

}]);