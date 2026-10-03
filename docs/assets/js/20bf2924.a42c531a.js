"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[64736],{

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.002-85347671581dfaf00425708272146631.png");

/***/ }),

/***/ 1708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.009-5ceb9bd8c62fe9152796c93837262d86.png");

/***/ }),

/***/ 3394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.010-bae3cfd97afc9105badfd9203c5368db.png");

/***/ }),

/***/ 4251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/smvitUvodnyObrazok-dc1ec4c96d37b446b0a0d1c28f597936.jpeg");

/***/ }),

/***/ 23478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.003-92e6ef92eece873147e790df27629b2b.png");

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

/***/ 32594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.007-8a9a8c31958492367e745dcdcc639d83.png");

/***/ }),

/***/ 42912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.005-9156ee6f00cd01ce08bca4a9e622e633.png");

/***/ }),

/***/ 44229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/KrabickaNaLieky-dokument-550fd47d73088038f3e0522272e08696.pdf");

/***/ }),

/***/ 84597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.008-e353a6150445164d2c53610c9aac7a17.png");

/***/ }),

/***/ 88004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.001-63a07c3703120c32bdc6ae3d8d59873a.png");

/***/ }),

/***/ 91635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_015_presentation_slides_md_20b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-projects-prj-015-presentation-slides-md-20b.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_015_presentation_slides_md_20b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ015/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ015/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ015/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ015/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ015/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.246690+00:00","fm_version_comment":"","guid":"d44a27e9-0c31-44f0-b683-7614738cfcee","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ015","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ015/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ015/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ015/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.246690+00:00',
	fm_version_comment: '',
	guid: 'd44a27e9-0c31-44f0-b683-7614738cfcee',
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
const contentTitle = 'PRJ015 — Presentation';

const assets = {

};



const toc = [{
  "value": "<a></a>Prehľad",
  "id": "prehľad",
  "level": 2
}, {
  "value": "<a></a>Biznisová vrstva",
  "id": "biznisová-vrstva",
  "level": 2
}, {
  "value": "<a></a>Systémová vrstva",
  "id": "systémová-vrstva",
  "level": 2
}, {
  "value": "<a></a>Technická vrstva",
  "id": "technická-vrstva",
  "level": 2
}, {
  "value": "<a></a>Technická dokumentácia",
  "id": "technická-dokumentácia",
  "level": 2
}, {
  "value": "<a></a>Výstupy",
  "id": "výstupy",
  "level": 2
}, {
  "value": "<a></a><strong>Prvý prototyp</strong>",
  "id": "prvý-prototyp",
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
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
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
        href: "/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj015--presentation",
        children: "PRJ015 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Scheme",
        src: (__webpack_require__(4251)/* ["default"] */ .A) + "",
        width: "1713",
        height: "369"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Krabička na lieky"
      }), "\nAko projekt sme si vybrali krabičku na lieky. Takáto krabička bude riadená arduinom. Bude mať senzor na kontrolu, či bola otvorená alebo nie. Ak nie, cez aplikáciu bude možné po sieti spustiť upozornenie. Toto upozornenie spočíva vo zvukovej signalizácii. Keď sa zapne upozornenie, krabička (bzučák ovládaný arduinom) začne vydávať zvuk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_p7ndkgrulc8x"
      }), "015.P015-2023-2024-S026_S028"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "prehľad",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_85o9vnvmlnb2"
      }), "Prehľad"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Názov projektu"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Krabička na lieky"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Členovia tímu"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:xminarikk@stuba.sk",
              children: "Kevin Minárik"
            }), "- S026; Nina Nemčoková - S028"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitbucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zámer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pomôcť ľuďom a ich rodinám, aby brali lieky pravidelne a na čas."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vízie členov"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kevin: ", (0,jsx_runtime.jsx)("br", {}), "- vytvoriť niečo s hlbším zmyslom", (0,jsx_runtime.jsx)("br", {}), "- skúsenosti s architektúrou softvéru (TOGAF, ArchiMate)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Nina: ", (0,jsx_runtime.jsx)("br", {}), "- pomôcť rodinnému príslušníkov", (0,jsx_runtime.jsx)("br", {}), "- skúsenosť s arduinom"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vízia tímu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vytvoriť riešenie automatického pripomenutia pomocou arduina."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Misia"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Našou misiou je pomôcť chorým ľuďom a uľahčiť im život."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cieľová skupina"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ľudia, ktorí zabúdajú na branie liekov."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Technológie"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arduino Nano; programovací jazyk C, Kotlin a Java; potrebný hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Opis výrobku"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Krabička na lieky bude riadená arduinom. Bude mať senzor na kontrolu, či bola otvorená alebo nie. Ak nie, cez aplikáciu bude možné po sieti spustiť upozornenie. Toto upozornenie spočíva vo zvukovej signalizácii. Keď sa zapne upozornenie, krabička (bzučák ovládaný arduinom) začne vydávať zvuk."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Výstup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Krabička na lieky s arduinom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cesta"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["W7   - plánovanie realizácie konštrukcie, objednanie súčiastok", (0,jsx_runtime.jsx)("br", {}), "W8   - preštudovanie podobných existujúcich riešení", (0,jsx_runtime.jsx)("br", {}), "W9   - Návrh schémy", (0,jsx_runtime.jsx)("br", {}), "W10 - Realizácia, vytvorenie diagramov", (0,jsx_runtime.jsx)("br", {}), "W11 - Realizácia, vytvorenie diagramov", (0,jsx_runtime.jsx)("br", {}), "W12 - Finalizácia, dokončenie dokumentácie"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Projektové zdroje"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {})]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dosiahnuté výsledky"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vytvorená krabička s arduinom so spúšťačom alarmu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vylepšenia"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- Mobilná aplikácia", (0,jsx_runtime.jsx)("br", {}), "- Automatizovanie konštrukcie", (0,jsx_runtime.jsx)("br", {}), "- Prepojenie s databázou"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cenové výdavky"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25€"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "biznisová-vrstva",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_goeoxvsn2bs1"
      }), "Biznisová vrstva"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Business layer je súčasťou architektonického rámca, ktorý sa zameriava na popis obchodných procesov, organizácie a stratégií. Jej účelom je poskytnúť prehľad o obchodných cieľoch a požiadavkách, čím umožňuje navrhovať informačné systémy, ktoré efektívne podporujú podnikovú stratégiu. Obchodná vrstva taktiež uľahčuje komunikáciu medzi obchodnými a IT profesionálmi, čo prispieva k lepšiemu zaradeniu technologických riešení do obchodných potrieb organizácie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements view"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requirements view je dôležitý v softvérovom vývoji na systematické a jasné zaznamenávanie funkčných a nefunkčných požiadaviek na systém. Pomáha vytvárať komplexný obraz o očakávaných vlastnostiach systému a jeho schopnostiach. Tento pohľad uľahčuje komunikáciu medzi členmi tímu a zainteresovanými stranami a slúži ako základ pre návrh a implementáciu softvérových riešení podľa stanovených požiadaviek."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88004)/* ["default"] */ .A) + "",
        width: "602",
        height: "304"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Motivation view"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Motivation view je užitočný na pochopenie a dokumentovanie motivácií a cieľov. Pomáha identifikovať a správne interpretovať potreby zainteresovaných strán a zabezpečuje, aby architektúrne riešenia boli v súlade s obchodnými cieľmi. Tento pohľad taktiež slúži ako nástroj pre lepšie riadenie komunikácie medzi zainteresovanými stranami a zabezpečuje, aby architektúra efektívne podporovala strategické rozhodnutia organizácie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1567)/* ["default"] */ .A) + "",
        width: "602",
        height: "558"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-1",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_izefgfn3hqe9"
      }), (0,jsx_runtime.jsx)("a", {
        name: "_o50hs8fr4u7p"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "systémová-vrstva",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_odb1sgdioi1c"
      }), "Systémová vrstva"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V súvislosti s TOGAF (The Open Group Architecture Framework) sa pojem \"System layer\" vzťahuje na tretiu architektonickú vrstvu v rámci TOGAF Architecture Development Method (ADM). Zahŕňa vývoj a štruktúrovanie aplikácií a dát na podporu obchodných procesov a služieb, poskytujúc prepojenie medzi Technologickou a Business vrstvou. Vrstva systému pomáha zabezpečiť, aby technologická infraštruktúra efektívne podporovala Business požiadavky, uľahčujúc návrh a implementáciu systémov s cieľom dosiahnuť organizačné ciele."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use case diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use case (prípad použitia) je výborný nástroj v rámci softvérového vývoja na pochopenie a dokumentovanie funkčných požiadaviek systému. Pomáha analyzovať, ako konkrétni používatelia interagujú so systémom a aké scenáre využitia sú dôležité. Prípady použitia taktiež slúžia ako základ pre návrh, testovanie a validáciu systému, čím prispievajú k jeho úspešnej implementácii."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23478)/* ["default"] */ .A) + "",
        width: "602",
        height: "294"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Activity diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activity diagram je v softvérovom inžinierstve užitočný nástroj na modelovanie tokov práce a sekvencií činností v systéme. Pomáha vizualizovať postupnosť krokov v procesoch a identifikovať paralelné a súbežné aktivity. Activity diagramy podporujú lepšie porozumenie behu systému, čo zjednodušuje analýzu, návrh a implementáciu procesov v softvérových projektoch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97737)/* ["default"] */ .A) + "",
        width: "451",
        height: "516"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Component view"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Component view je v softvérovom inžinierstve užitočný na modelovanie štruktúry a organizácie softvérových komponentov v systéme. Pomáha identifikovať jednotlivé časti systému a ich vzájomné vzťahy, čo zjednodušuje návrh, implementáciu a údržbu softvéru. Tento pohľad podporuje celkové porozumenie architektúry a usmerňuje vývojárov pri tvorbe a správe komponentov systému."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(42912)/* ["default"] */ .A) + "",
        width: "602",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "technická-vrstva",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_y1893mh2dvsb"
      }), "Technická vrstva"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V rámci The Open Group Architecture Framework (TOGAF), technická dokumentácia predstavuje súčasť výstupu z procesu Enterprise Architecture (EA). TOGAF je štandardný rámec pre riadenie architektúry organizácie, ktorý poskytuje štruktúrovaný prístup k plánovaniu, navrhovaniu, implementácii a správe enterprise architektúry."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V technickej fáze TOGAF definuje technickú dokumentáciu, ktorá sa zaoberá vývojom architektúry v oblasti technológií. Táto dokumentácia zahŕňa špecifikácie infraštruktúry, hardvéru, softvéru a technologických štandardov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technology Usage View"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Technology Usage View (pohľad na využitie technológií) je jedným z pohľadov, ktorý sa zameriava na popis, analýzu a vizualizáciu spôsobu, akým sú technológie využívané v rámci organizácie alebo v rámci konkrétnych systémov. Poskytuje detailný pohľad na to, ako sa technológie používajú na podporu obchodných procesov a cieľov organizácie. Pomáha identifikovať, ako rôzne technológie spolupracujú alebo sú vzájomne prepojené v rámci celkovej architektúry. Obsahuje detailné informácie o technológiách, ktoré sú používané v organizácii alebo systéme."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97947)/* ["default"] */ .A) + "",
        width: "588",
        height: "655"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer View"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Termín \"Layer View\" sa odvoláva na jednu z pohľadov (views) v rámci pohľadového rámca TOGAF. Tieto pohľady sú súčasťou Architektonického vývojového modelu (ADM - Architecture Development Method) a slúžia na organizovanie informácií o architektúre organizácie a poskytujú rôzne perspektívy na systémy, procesy a komponenty architektúry. Poskytuje pohľad na hierarchickú štruktúru vrstiev v architektúre organizácie alebo systému, umožňuje identifikovať vzťahy a závislosti medzi jednotlivými vrstvami. Tento pohľad tiež pomáha pri analýze a plánovaní zmien v jednotlivých vrstvách a ich dopadu na celkovú architektúru."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(32594)/* ["default"] */ .A) + "",
        width: "602",
        height: "554"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "technická-dokumentácia",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_bt95twwyqpic"
      }), "Technická dokumentácia"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V tejto časti si opíšeme naše zariadenie. Následne uvedieme, ktoré súčiastky budeme používať a ukážeme schému zapojenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Opis zariadenia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Naše zariadeni je vytvárané so zameraním pozornosti na ľudí, ktorí pravidelne potrebujú brať lieky, no nedarí sa im to. Kvôli tomuto sa im môžu zhoršiť príznaky chorôb, čo môže mať kritické následky."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vďaka našemu zariadeniu bude možné pre rodinu ľahko a jednoducho pripomenúť chorým príbuzným, nech si včas zoberú tabletky, a taktiež ich skontrolovať, či ich zobrali."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Súčiastky"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzor zatvorenia dverí/okna MC-38A normálne zatvorený - Senzor zatvorenia dverí/okna MC38A. Balenie obsahuje 2 kusy. Jeden s káblikmi, ten sa umiestni na zárubňu a druhý protikus (magnet bez káblikov) sa umiestni na dvere alebo okno. V prípade, že sa okno priblíži sa senzor rozopne."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktívny buzzer - pre alarm alebo signalizáciu. Pri napájaní buzzer “pípa” frekvenciou približne 2300 Hz."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Box na batérie - na napájanie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WiFi modul ESP8266 - modul s integrovaným TCP/IP protokolom ktorý môže ponúknuť akémukoľvek mikrokontroléru prístup k WiFi sieti. Modul má v pamäti naprogramovaný firmware obsahujúci AT príkazy, pomocou ktorých je možné ESP8266 ovládať."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arduino Nano - je vhodný pre projekty, ktoré vyžadujú malú veľkosť dosky a zároveň zachovávajú flexibilitu a jednoduchosť vývoja charakteristickú pre platformu Arduino. Je široko využívaný v rôznych aplikáciách, vrátane robotiky, senzorických projektov, a ďalších elektronických experimentov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schéma zapojenia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(84597)/* ["default"] */ .A) + "",
        width: "521",
        height: "488"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1708)/* ["default"] */ .A) + "",
        width: "425",
        height: "357"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "výstupy",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_9hklykpt062q"
      }), "Výstupy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "prvý-prototyp",
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_hxssshol3oyb"
      }), (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prvý prototyp"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3394)/* ["default"] */ .A) + "",
        width: "483",
        height: "417"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("a", {
        name: "_69vyb8fmcn1l"
      }), "Ciele do budúcna"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V rámci cieľov do budúcna by sme chceli náš projekt obohatiť o viaceré vlastnosti, či už z pohľadu softvéru alebo hardvéru."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prvým vylepšením by sme chceli vyriešiť konfiguráciu krabičky pomocou wifi modulu. Pre túto konfiguráciu by sme radi vyvinuli softvér s používateľským rozhraním vo forme mobilnej aplikácie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pri vytvorení používateľského rozhrania by bolo možno užitočné prepojenie s databázou pre uchovávanie potrebných údajov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ďalším vylepšením by bola možná automatizovaná konštrukcia, ktorá krabičku p spustení otvorí a pri výbere lieku automaticky vypne alarm."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podporné-súbory",
      children: "Podporné súbory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(44229)/* ["default"] */ .A) + "",
          children: "KrabickaNaLieky-dokument"
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

/***/ 97737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.004-12227c5b5e22ab3fa4a8e7d30764c7be.png");

/***/ }),

/***/ 97947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Aspose.Words.35fc2bb0-6dfb-49b9-955c-7f921c6f2afc.006-41f0fb70066e0609f76630d42f0aec57.png");

/***/ })

}]);