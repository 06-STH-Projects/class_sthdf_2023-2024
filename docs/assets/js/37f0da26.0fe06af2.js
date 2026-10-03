"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[27790],{

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

/***/ 89824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_class_sthdf_about_index_md_37f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-class-sthdf-about-index-md-37f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_class_sthdf_about_index_md_37f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/class-sthdf/about/index","title":"📘 About the Course","description":"Overview of the STHDF 2023–2024 course – goals, format, tooling, and outcomes.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/class-sthdf/about/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/class-sthdf/about","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/class-sthdf/about/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/class-sthdf/about/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"course","permalink":"/tags/course"},{"inline":true,"label":"overview","permalink":"/tags/overview"}],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.017885+00:00","fm_version_comment":"","guid":"693b167f-c382-437a-85de-33e0fa47961d","dao":"class_sthdf_dashboard","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":"","title":"📘 About the Course","description":"Overview of the STHDF 2023–2024 course – goals, format, tooling, and outcomes.","sidebar_label":"About the Course","sidebar_position":1,"keywords":["STHDF","course","overview"],"tags":["course","overview"],"knife":{"type":"page","owner_alias":"TEACHING_TEAM","version":0.1,"status":"draft","related_prj":[],"kc_refs":[]}},"sidebar":"tutorialSidebar","previous":{"title":"🧭 Class STHDF – Overview","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/class-sthdf/"},"next":{"title":"Assignments & Milestones","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/class-sthdf/conditions/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/class-sthdf/about/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.017885+00:00',
	fm_version_comment: '',
	guid: '693b167f-c382-437a-85de-33e0fa47961d',
	dao: 'class_sthdf_dashboard',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
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
	fm_reserved2: '',
	title: '📘 About the Course',
	description: 'Overview of the STHDF 2023–2024 course – goals, format, tooling, and outcomes.',
	sidebar_label: 'About the Course',
	sidebar_position: 1,
	keywords: [
		'STHDF',
		'course',
		'overview'
	],
	tags: [
		'course',
		'overview'
	],
	knife: {
		type: 'page',
		owner_alias: 'TEACHING_TEAM',
		version: 0.1,
		status: 'draft',
		related_prj: [],
		kc_refs: []
	}
};
const contentTitle = 'About the Course';

const assets = {

};



const toc = [{
  "value": "Ciele",
  "id": "ciele",
  "level": 2
}, {
  "value": "Forma",
  "id": "forma",
  "level": 2
}, {
  "value": "Výstupy",
  "id": "výstupy",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/class-sthdf/",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "about-the-course",
        children: "About the Course"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stručný popis predmetu STHDF 2023–2024. (Nahradíš vlastným obsahom.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ciele",
      children: "Ciele"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozvoj systémového myslenia v IT a digitálnej fabrikácii."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tímová spolupráca a KNIFE prístup."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "forma",
      children: "Forma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workshop/ateliér, learning-by-doing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "výstupy",
      children: "Výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4 míľniky: About Me, Knowledge Contribution, Project Summary, Project Outcomes."
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



/***/ })

}]);