"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[8109],{

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

/***/ 59120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_041_presentation_slides_md_c8b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-projects-prj-041-presentation-slides-md-c8b.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_041_presentation_slides_md_c8b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ041/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ041/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ041/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ041/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ041/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.383250+00:00","fm_version_comment":"","guid":"7ed271bc-6990-406c-bfe5-4dce94774151","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ041","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ041/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ041/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ041/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.383250+00:00',
	fm_version_comment: '',
	guid: '7ed271bc-6990-406c-bfe5-4dce94774151',
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
const contentTitle = 'PRJ041 — Presentation';

const assets = {

};



const toc = [{
  "value": "Web Parser and Full-Text Searcher for Plant and Flower Classification: Project Outcomes",
  "id": "web-parser-and-full-text-searcher-for-plant-and-flower-classification-project-outcomes",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Project Overview",
  "id": "project-overview",
  "level": 2
}, {
  "value": "Application components",
  "id": "application-components",
  "level": 3
}, {
  "value": "Challenges",
  "id": "challenges",
  "level": 3
}, {
  "value": "Methodology",
  "id": "methodology",
  "level": 2
}, {
  "value": "Data Scraping and Parsing",
  "id": "data-scraping-and-parsing",
  "level": 3
}, {
  "value": "Data Organization",
  "id": "data-organization",
  "level": 3
}, {
  "value": "Schema Design",
  "id": "schema-design",
  "level": 3
}, {
  "value": "Search Functionality",
  "id": "search-functionality",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "Use Case Diagram",
  "id": "use-case-diagram",
  "level": 3
}, {
  "value": "Application Demo Example",
  "id": "application-demo-example",
  "level": 2
}, {
  "value": "Application Architecture Overview",
  "id": "application-architecture-overview",
  "level": 2
}, {
  "value": "Preparatory Module",
  "id": "preparatory-module",
  "level": 3
}, {
  "value": "Purpose and Functionality",
  "id": "purpose-and-functionality",
  "level": 4
}, {
  "value": "Advantages",
  "id": "advantages",
  "level": 4
}, {
  "value": "Component Diagram",
  "id": "component-diagram",
  "level": 4
}, {
  "value": "Executional Module",
  "id": "executional-module",
  "level": 3
}, {
  "value": "Purpose and Functionality",
  "id": "purpose-and-functionality-1",
  "level": 4
}, {
  "value": "Advantages",
  "id": "advantages-1",
  "level": 4
}, {
  "value": "Component Diagram",
  "id": "component-diagram-1",
  "level": 4
}, {
  "value": "Integration of Modules",
  "id": "integration-of-modules",
  "level": 3
}, {
  "value": "Architecture Diagram",
  "id": "architecture-diagram",
  "level": 3
}, {
  "value": "Technical Flow Diagrams",
  "id": "technical-flow-diagrams",
  "level": 3
}, {
  "value": "Preparatory Module",
  "id": "preparatory-module-1",
  "level": 4
}, {
  "value": "Executional Module",
  "id": "executional-module-1",
  "level": 4
}, {
  "value": "Sequence Diagrams",
  "id": "sequence-diagrams",
  "level": 3
}, {
  "value": "Preparatory Module",
  "id": "preparatory-module-2",
  "level": 4
}, {
  "value": "Executional Module",
  "id": "executional-module-2",
  "level": 4
}, {
  "value": "Activity Diagram",
  "id": "activity-diagram",
  "level": 3
}, {
  "value": "Data Flow Diagram",
  "id": "data-flow-diagram",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}, {
  "value": "Knowledge Acquired",
  "id": "knowledge-acquired",
  "level": 2
}, {
  "value": "Further Development Suggestions",
  "id": "further-development-suggestions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
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
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj041--presentation",
        children: "PRJ041 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web-parser-and-full-text-searcher-for-plant-and-flower-classification-project-outcomes",
      children: "Web Parser and Full-Text Searcher for Plant and Flower Classification: Project Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Web Parser and Full-Text Searcher project was developed to address the need for efficient and automated extraction of botanical data from the web. This Python-based console application is designed to crawl relevant databases and web pages, extract information on plant and flower classification, and provide a full-text search functionality. This document outlines the project's objectives, methodologies, and outcomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-overview",
      children: "Project Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The primary goal of this project was to create a tool that enables users to gather and search through botanical data efficiently. The application is particularly useful for researchers, botanists, and enthusiasts in the field of plant and flower classification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://i.ibb.co/D9PQ0wq/business.jpg",
        alt: "Business use"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-components",
      children: "Application components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://i.ibb.co/T1QHPfN/comp.jpg",
        alt: "Application components"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenges",
      children: "Challenges"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One of the main challenges was sourcing a database with plaintext data suitable for scraping and parsing. I had to navigate around javascript-based obfuscators, which are commonly used to prevent automated data extraction. The solution involved brute scraping and parsing techniques."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The second challenge was limitation of the Colab environment and issues with some libraries for indexing, which required adjustment of the software toolkit."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "methodology",
      children: "Methodology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-scraping-and-parsing",
      children: "Data Scraping and Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Library Selection"
        }), ": The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requests_html"
        }), " library was chosen for its ability to bypass page bans typically encountered with standard scraping tools."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Extraction Process"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Iterated through an alphabetical index of plant names."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scraped links and HTML codes from each page."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Used regular expressions to isolate and extract the article body."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Parsed plaintext sections for CSV storage."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-organization",
      children: "Data Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CSV Creation"
        }), ": Extracted data was organized into a CSV format, with non-plaintext content removed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Indexing with Whoosh"
        }), ": The dataset was indexed using Whoosh, a Python-based library, to facilitate efficient searching (and mitigate Colab issues with Lucene)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema-design",
      children: "Schema Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The schema for the dataset includes the following fields: latin_name, common_name, family, hazards, habitats, regions, physical_characteristics, synonyms, edible_uses, medicinal_uses, other_uses, cultivation_details, propagation, and other_names."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "search-functionality",
      children: "Search Functionality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-field Parser with Field-Boosting"
        }), ": Implemented to prioritize search results based on field relevance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ranking Algorithm"
        }), ": BM25F algorithm was used for its reliability over TF-IDF in the Colab environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query Syntax"
        }), ": Supports simple keyword queries, such as “rose”, or more complex, as “rose europe”. Boolean queries are also available: “europe AND rose”, “europe OR rose”. And field-specific queries, such as: “regions", ":europe", " AND marigold” (AND/OR are case-sensitive)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are only 2 use cases for this whole app:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scrap and parse the web database thus updating the application knowledge base."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search for data in the stored knowledge base."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-diagram",
      children: "Use Case Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702864620953.png",
        alt: "Use Case Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "application-demo-example",
      children: "Application Demo Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://i.ibb.co/7GZZC7m/Capture.png",
        alt: "Application Demo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "application-architecture-overview",
      children: "Application Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The application consists of 2 separate modules: preparatory and execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://i.ibb.co/FmR2FTH/modules.png",
        alt: "Modules"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "preparatory-module",
      children: "Preparatory Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "purpose-and-functionality",
      children: "Purpose and Functionality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Scraping and Parsing"
        }), ": This module is responsible for the initial phase of the application, which involves scraping data from specified web pages and databases. It uses advanced scraping techniques to navigate through javascript-based obfuscators and extract plaintext data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Processing and Indexing"
        }), ": After scraping, the data is parsed, organized into a structured CSV format, and then indexed for efficient searching. This process involves cleaning the data to ensure accuracy and relevance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages",
      children: "Advantages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Efficiency in Data Management"
        }), ": By separating the data preparation tasks, the Preparatory Module allows for a one-time, intensive data processing operation. This approach minimizes the computational load during the search phase."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibility in Data Updating"
        }), ": The module can be run independently to update or refresh the dataset as needed, without interfering with the search functionality."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "component-diagram",
      children: "Component Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702888970399.png",
        alt: "Component Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "executional-module",
      children: "Executional Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "purpose-and-functionality-1",
      children: "Purpose and Functionality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Interface and Search Execution"
        }), ": This module is the user-facing part of the application. It provides a Command Line Interface (CLI) where users can input their search queries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Retrieval and Display"
        }), ": Leveraging the indexed data prepared by the Preparatory Module, it executes the search queries and displays the results to the user in an organized manner."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-1",
      children: "Advantages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User-Friendly Interaction"
        }), ": By focusing solely on search execution and results display, the Executional Module offers a streamlined and user-friendly experience."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operational Efficiency"
        }), ": As it relies on pre-processed and indexed data, the search process is fast and efficient, enhancing the overall performance of the application."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "component-diagram-1",
      children: "Component Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702888997075.png",
        alt: "Component Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-of-modules",
      children: "Integration of Modules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The two modules, though distinct in their functionalities, are tightly integrated to ensure seamless operation. The Preparatory Module feeds its processed and indexed data into a shared folder, which the Executional Module accesses to perform search operations. This design ensures that the heavy lifting of data processing does not burden the search process, allowing for quick and responsive user interactions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-diagram",
      children: "Architecture Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702860789611.png",
        alt: "Architecture Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technical-flow-diagrams",
      children: "Technical Flow Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "preparatory-module-1",
      children: "Preparatory Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702860815339.png",
        alt: "Technical Diagram for Preparatory Module"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This diagram details the technical flow within the Preparatory Module, from web scraping to data indexing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "executional-module-1",
      children: "Executional Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702860834057.png",
        alt: "Technical Diagram for Executional Module"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This diagram outlines the technical process within the Executional Module, focusing on user query input, search execution, and displaying results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sequence-diagrams",
      children: "Sequence Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "preparatory-module-2",
      children: "Preparatory Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702860500307.png",
        alt: "Sequence Diagram for Preparatory Module"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Illustrates the sequence of operations in the Preparatory Module, from web scraping to indexing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "executional-module-2",
      children: "Executional Module"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702860508210.png",
        alt: "Sequence Diagram for Executional Module"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shows the sequence of interactions in the Executional Module, detailing user query processing and result display."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activity-diagram",
      children: "Activity Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702888832071.png",
        alt: "Activity Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-flow-diagram",
      children: "Data Flow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://mermaid.pyxl.uk/file_1702864685985.png",
        alt: "Data Flow Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This diagram represents the flow of data in the Executional Module, from user input through the CLI interface to the display of search results."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The project successfully developed a tool that scrapes, parses, and indexes botanical data from a public database. The application's CLI interface utilizes multi-field parsing with field-boosting, ensuring relevant and prioritized search results. The dataset's free-form nature, sourced from a community-driven database, presented challenges in standardizing precision and recall metrics. However, the application effectively addresses the need for efficient data gathering and searching in the field of plant and flower classification."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knowledge-acquired",
      children: "Knowledge Acquired"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Despite being a convenient environment, Google Colab has its own strict limitations regarding environment variables, versions of specific libraries outside of the scope of its downloadable repository, and is extremely unfriendly towards modification of components on a virtual OS level."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus, to mitigate compatibility and functionality issues for some software components, like the indexer, I had to move from faster and more cost-efficient options to more Colab-friendly ones. For example, from the Java-python hybrid Lucene/pyLucene to purely pythonic Whoosh. However, the price was a 2x slowdown of the indexing process."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If HTML files or dumps are relatively big (900+ megabytes per file), Colab will choke on them during complex processing, so a better solution is to either dissect them into smaller files manually or by using Apache Spark."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-development-suggestions",
      children: "Further Development Suggestions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using Apache Spark for parallel processing of a vast number of huge files from databases or dumps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web-based GUI."
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