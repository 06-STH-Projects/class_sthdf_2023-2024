"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[63408],{

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

/***/ 90095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_011_presentation_slides_md_a79_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-projects-prj-011-presentation-slides-md-a79.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_011_presentation_slides_md_a79_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ011/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ011/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ011/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ011/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ011/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.230981+00:00","fm_version_comment":"","guid":"83a2cbcd-0864-490c-94d9-a07fe656c230","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ011","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ011/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ011/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ011/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.230981+00:00',
	fm_version_comment: '',
	guid: '83a2cbcd-0864-490c-94d9-a07fe656c230',
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
const contentTitle = 'PRJ011 — Presentation';

const assets = {

};



const toc = [{
  "value": "Authors",
  "id": "authors",
  "level": 2
}, {
  "value": "Team Photo",
  "id": "team-photo",
  "level": 2
}, {
  "value": "Page Tree",
  "id": "page-tree",
  "level": 2
}, {
  "value": "Personal Mini Projects",
  "id": "personal-mini-projects",
  "level": 3
}, {
  "value": "Main Team Project",
  "id": "main-team-project",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj011--presentation",
        children: "PRJ011 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A system for checking the correct posture during sedentary work with the help of a sensor and a buzzer, which prevents health problems related to the spine and musculoskeletal system."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authors",
      children: "Authors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Andrej Dubovsky (S012),"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Filip Bugár (S009),"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Radovan Cyprich (S010),"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Samuel Kačeriak (S017)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "team-photo",
      children: "Team Photo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "page-tree",
      children: "Page Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "personal-mini-projects",
      children: "Personal Mini Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D Printing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arduino"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accelerometer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gyroskop"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "main-team-project",
      children: "Main Team Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Business Layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System Layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technology Layer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical Documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outcomes and Results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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



/***/ })

}]);