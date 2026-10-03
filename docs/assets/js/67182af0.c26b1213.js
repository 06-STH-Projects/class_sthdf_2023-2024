"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[14328],{

/***/ 1481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/suciastky_v_celku-58538f0cba4cff48d36db1a91cd75402.jpg");

/***/ }),

/***/ 3114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/prichytka-ba5f9c1055d72064751bf466e2d14069.jpg");

/***/ }),

/***/ 13213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/krabicka-d22bbadd9f2fb3dd2497213c758fc302.jpg");

/***/ }),

/***/ 15245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biznis_diagram1-176107d13f7f29b23502084d826e776d.png");

/***/ }),

/***/ 15821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/umiestnenie_na_okne2-5611390d0eb95d82aae3bca053c7e88d.jpg");

/***/ }),

/***/ 23754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/technology_diagram1-1aa4e84bfa442d763fff244f8ca312e6.png");

/***/ }),

/***/ 24342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/system_diagram2-2ff26b5915315ccfe3c0957c5cc90599.png");

/***/ }),

/***/ 25383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/006.Biznisová vrstva-cec344df4c939e699a0800ed60949353.pdf");

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

/***/ 33622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biznis_diagram2-124c6f41e740d7c9740616b6265dd016.png");

/***/ }),

/***/ 34476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_006_presentation_slides_md_671_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-projects-prj-006-presentation-slides-md-671.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_006_presentation_slides_md_671_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ006/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ006/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ006/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ006/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ006/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.211942+00:00","fm_version_comment":"","guid":"2387de25-5eb0-4bba-962f-94bceb0fd95d","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ006","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ006/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ006/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ006/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.211942+00:00',
	fm_version_comment: '',
	guid: '2387de25-5eb0-4bba-962f-94bceb0fd95d',
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
const contentTitle = 'PRJ006 — Presentation';

const assets = {

};



const toc = [{
  "value": "<strong>Automatický rolovač žalúzií</strong>",
  "id": "automatický-rolovač-žalúzií",
  "level": 2
}, {
  "value": "006.Biznisová vrstva",
  "id": "006biznisová-vrstva",
  "level": 2
}, {
  "value": "006.Systémová vrstva",
  "id": "006systémová-vrstva",
  "level": 2
}, {
  "value": "<strong>Systémový pohľad na riešenie</strong>",
  "id": "systémový-pohľad-na-riešenie",
  "level": 3
}, {
  "value": "006.Technologická vrstva",
  "id": "006technologická-vrstva",
  "level": 2
}, {
  "value": "006.Návrh a prototypovanie",
  "id": "006návrh-a-prototypovanie",
  "level": 2
}, {
  "value": "Top-level návrh",
  "id": "top-level-návrh",
  "level": 2
}, {
  "value": "Návrh architektúry",
  "id": "návrh-architektúry",
  "level": 2
}, {
  "value": "Dizajnový návrh",
  "id": "dizajnový-návrh",
  "level": 2
}, {
  "value": "Podporné súbory",
  "id": "podporné-súbory",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
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
        id: "prj006--presentation",
        children: "PRJ006 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "automatický-rolovač-žalúzií",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatický rolovač žalúzií"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "006biznisová-vrstva",
      children: "006.Biznisová vrstva"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatický rolovač žalúzií je zariadenie, ktoré dokáže čiastočne alebo úplne vyrolovať/zrolovať žalúzie bez potreby fyzickej aktivity človeka."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(54838)/* ["default"] */ .A) + "",
        width: "754",
        height: "1132"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Našim cieľom je zpríjemniť každodenné vstávanie automatickým odrolovaním žalúzií, čo umožní preniknutiu slnečného svetla do miestnosti a dodá človeku potrebnú energiu na štart do úspešného dňa."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(83826)/* ["default"] */ .A) + "",
        width: "331",
        height: "1091"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Podrobnejší biznisový pohľad:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(15245)/* ["default"] */ .A) + "",
        width: "1520",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagram zjednodušene zachytáva celkový proces regulovania žalúzií prostredníctvom nášho riešenia. Obyvateľ domácnosti môže pristúpiť k spôsobu ovládaniu žalúzií, či už prostredníctvom jednoduchého stlačenia tlačidla na diaľkovom ovládači, alebo automatizovanejším spôsobom, a to vytvorením rutiny rolovania žalúzií na konkrétny čas. Pre druhú alternatívu je potrebné, aby obyvateľ domácnosti disponoval SMART HOME zariadením, a teda aby bolo možné vytvoriť preferovanú rutinu pre rolovanie žalúzie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Celkový pohľad a zachytený biznisový aspekt nášho riešenia poskytuje diagram nižšie. Tento diagram je v podstate obohatený o motiváciu a ciele nášho projektu. Motiváciou je zpríjemniť každodenné vstávanie automatickým odrolovaním žalúzií, a teda celkové zefektívnenie tohto každodenného rutinného procesu. Zároveň to predstavuje pre obyvateľa domácnosti skrátenie času, ktorý musí za iných okolností vynaložiť pre rolovanie žalúzií vo svojom príbytku. Ďalší aspekt motivácie nášho riešenia vidíme v budovaní návyku vstávania v pravidelný čas. Automatické odrolovanie žalúzie dá obyvateľovi domácnosti jasný signál, že je čas vstať z postele a pustiť sa do nového dňa."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagram teda jasne popisuje ciele, ktoré už indikuje samotná motivácia, a to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatizácia regulovania žalúzií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vybudovanie návyku vstávania"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jedinou požiadavkou na aplikáciu nášho riešenia je vlastniť v domácnosti SMART HOME zariadenie a samozrejme zabezpečiť montáž kontroléra k žalúzií."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(33622)/* ["default"] */ .A) + "",
        width: "1520",
        height: "967"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "006systémová-vrstva",
      children: "006.Systémová vrstva"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systémový-pohľad-na-riešenie",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Systémový pohľad na riešenie"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak by sme si naše riešenie priblížili na úrovni systémového konceptu, kde si definujeme komponenty, ktoré sú pre riešenie podstatné, tak môžeme uvažovať o nasledujúcom priloženom diagrame. Diagram zachytáva komponenty na najvyššej úrovni, bez iných implementačných alebo hardvérových detailov a špecifikácií. Diagram využíva grafické pomôcky v podobe nahradenia komponentov obrázkami pre lepšie predstavenie si fungovania navrhovaného systému. Jedná sa tiež o mierne zjednodušenú verziu originálneho diagramu komponentov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(56109)/* ["default"] */ .A) + "",
        width: "1178",
        height: "1129"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V hornej časti diagramu sa nachádza žalúzia a tiež tienidlo vo všeobecnosti. Žalúzia reprezentuje určitý typ tienidla a ich prepojenie znázorňuje ich vzťah, kedy namiesto žalúzii je možné dosadiť iný typ tienidla. Retiazka reprezentuje ručný mechanický spôsob ako manipulovať s tienidlom. Tento komponent je využívaný taktiež na manipuláciu s tienidlom pomocou automatického rolovača. Fyzické prepojenie retiazky a zariadenia vykonáva ozubené koliesko, ktoré je prispôsobené rozmerom retiazky."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dôležitým komponentom je samozrejme telo krabičky, ktoré slúži na uskladnenie všetkých potrebných komponentov, ktorom je tiež integrované ozubené koliesko, ktoré slúži na vykonanie pohybu retiazky žalúzie. Na pohyb ozubeného kolieska je samozrejme potrebný rotačný motor, ktorý je taktiež umiestnený v tele krabičky a vykonáva fyzickú prácu potrebnú na otáčanie kolieska. Rotačný motor musí spĺňať funkcionalitu obojsmerného pohybu, nakoľko žalúzie je potrebné rolovať nahor aj nadol. Rotačný motor potrebuje zdroj energie, ktorý prijíma prostredníctvom napájania."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príkazy rotačnému motoru posiela mikrokontrolér, ktorý predstavuje logickú jednotku v zariadení. Mikrokontrolér je prepojený s infrasnímačom, od ktorého prijíma signály. Jedná sa teda o vzdialenú bezdrôtovú komunikáciu. Na odosielanie signálov je dostačujúci obyčajný diaľkový ovládač na princípe infračervených signálov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagram vyššie vieme znázorniť a preklopiť aj do diagramu komponentov, ktorý sa môže na prvý pohľad zdať komplexnejší, avšak je dostatočne čitateľný a zrozumiteľný aj pre bežného laika. Diagram využíva iba element komponentu (ružovo sfarbený obdĺžnik) a element rozhrania (obdĺžnik s indikátorom/stereotypom «interface»). Tento diagram len bližšie znázorní všetky komponenty na úrovni systému nášho riešenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(24342)/* ["default"] */ .A) + "",
        width: "1308",
        height: "1160"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagram komponentov je dostatočne abstraktný na to aby reprezentoval koncept navrhovaného riešenia na systémovej úrovni. Jednotlivé komponenty je možné nahradiť konkrétnymi zariadeniami, čím by sa zo systémového diagramu stal technologický diagram, alebo je možné komponenty zameniť za iné abstraktné systémové prvky, čím by došlo k zmene len na úrovni komponentu a celkový koncept systému by sa zachoval. Napríklad namiesto retiazky je možné do systému dosadiť šnúrku, ktorou sú ovládané závesy. Ak teda dôjde k zmene v komponente Retiazka, diagram pomocou prepojení znázorňuje závislosti komponentov, ktoré je taktiež potrebné upraviť v závislosti od tejto zmeny."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oproti verzii s obrázkami znázorňuje tento diagram aj niektoré nové komponenty, ktoré boli z dôvodu prehľadnosti vynechané. Napríklad na komunikáciu mikrokontroléra s rotačným je potrebné rozhranie, ktoré je bežne reprezentované driver-om. Taktiež odosielanie infračervených signálov je možné nielen diaľkovým ovládačom, ale taktiež SMART HOME zariadením. Vo všeobecnosti je tento komponent označený ako Infra vysielač."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "006technologická-vrstva",
      children: "006.Technologická vrstva"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Technologická vrstva predstavuje detailné informácie o riešení. Teda na úrovni tejto vrstvy sú definované komponenty aj so svojimi konkrétnymi špecifikáciami. Keďže sme sa dostali na spodnú úroveň konceptu, tak technologický diagram svojou prirodzenou povahou poskytnutých informácií pôsobí komplexnejšie. Avšak po iteratívnom prejdení si biznisovej a systémovej vrstvy by mal byť každý čitateľ zorientovaný v pojmoch projektu, pričom technologická vrstva ich iba bližšie vyšpecifikuje."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technologický diagram:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(23754)/* ["default"] */ .A) + "",
        width: "1520",
        height: "1119"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na diagrame sú priblížené komponenty a ich vzájomné vzťahy. Technologické komponenty sú znázornené zelenými krabičkami, pričom je naznačený aj ich vzťah ku komponentom zo systémového diagramu. Systémové komponenty v tomto diagrame obsahujú aj technické špecifikaćie komponentov ako sú napríklad prevádzkové napätie, rozmery a podobne."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Technický diagram znázorňuje taktiež nehmotné súčasti systému ako je napríklad zdrojový kód alebo vývojové prostredie ArduinoIDE, ktoré slúži na nahratie zdrojového kódu do mikrokontroléra. Komponent zdrojového kódu znázorňuje príklad funkcií, ktoré slúžia na riadenie mikrokontroléra. Okrem funkcií znázorňuje aj možnú konfiguráciu pinov mikrokontroléra, ktoré budú prijímať signál z infračerveného prijímača a tiež riadiť rotačný motor."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na výrobu 3D súčiastok bola použitá 3D tlačiareň Prusa MINI & MINI+. Súčiastky, ktoré bolo potrebné vytlačiť sú: Ozubené koliesko, Kryt ozubeného kolieska, a Schránka, ktorá pozostáva aj z dvoch súčiastok a to z tela schránky a zadného krytu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mikrokontrolér Arduino Pro Micro bol zvolený pre jeho jednoduchosť, a pretože spĺňal potrebné požiadavky na ovládanie rotačného motora a tiež na prímanie signálu z infračerveného prijímača."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zoznam komponentov a ich stručná charakteristika:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arduino Pro Micro:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vývojová doska s procesorom ATMega32U4. Na doske sa nachádza 9 kanálový 10-bitový ADC prevodník, 5 PWM pinov, 12 digitálnych IO pinov a hardvérový serial interface RX/TX."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čip: ATmega32u4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pracovné napätie: 5V"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frekvencia procesora: 16 MHz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Infračervený prijímač VS1838:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prijímač VS1838 je spoľahlivý nakoľko obsahuje aj ochranu proti elektrostatickým výbojom a šumu z prostredia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operačné napätie: 5 V"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frekvencia: 37.9 kHz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Krokový motor Nema 17:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spoľahlivý krokový motor s využitím v robotike alebo 3D tlači."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pracovné napätie: 12V"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prúd: 1.33 A/Fáza"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Odpor: 2.5 Ohm/Fáza"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A4988 motor driver 2A:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bipolárny motor driver A4988 je veľmi výkonný modul schopný výstupného prúdu až 2A a napätia 35V vhodný aj pre 3D tlačiarne vďaka vysokej presnosti."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logické napätie modulu (3 V – 5.5 V ) napájanie motorčeka (8 V – 35V)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Výstup: 2A, 8V – 35V"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Original Prusa MINI & MINI+:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kompaktná a rýchla 3D tlačiareň. Disponuje automatickou kalibráciou a používateľsky prívetivou LCD obrazovkou."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dizajn krabičky, krytu, príchytky a ozubeného kolieska:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dizajn krabičky bol inšpirovaný existujúcimi riešeniami a nápadmi na internete, voľne dostupné na pre to určených stránkach."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(45092)/* ["default"] */ .A) + "",
        width: "1520",
        height: "1135"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Súbory:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "abc_gear.stl\nabc_gear_cover.stl\nabc_case_front.stl\nabc_case_back.stl"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Náhľad prepojenia komponentov v Circuit.io:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na obrázku je zobrazená schéma zapojenia komponentov za použitia tzv. breadboardu. Najväčším komponetom je rotačný motor (sivočierna súčiastka), ktorý je napojený na driver (červený čip). Driver je následne napojený na mikrokontrolér (zeleno-modrý čip), ktorý je zodpovedný za riadenie. Posledným funkčným komponentom je senzor infračerveného signálu, pripojený taktiež na mikrokontrolér. Infra senzor je taktiež jediným funkčným komponentom, ktorý nepotrebuje priame napájanie, keďže jeho prevádzku zabezpečuje samotný mikrokontrolér. Rotačný motor, driver motora aj mikrokontrolér sú napájané z batérie, čo v schéme znázorňujú spojenia žltej a čiernej farby. Konektor pripojený na mikrokontrolér v ľavej časti schémy, znázorňuje USB pripojenie slúžiace ovládanie mikrokontroléra pomocou\npočítača, hlavne teda na nahrávanie zdrojového kódu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(59284)/* ["default"] */ .A) + "",
        width: "1294",
        height: "1473"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vytlačené časti na 3D tlačiarni:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Použitý materiál na tlač: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Generic PLA"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Ozubene koliesko"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(81037)/* ["default"] */ .A) + "",
        width: "1520",
        height: "2027"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Prichytka"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(3114)/* ["default"] */ .A) + "",
        width: "1520",
        height: "2027"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Telo/krabička"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(13213)/* ["default"] */ .A) + "",
        width: "1520",
        height: "2027"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Kryt krabičky"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(89594)/* ["default"] */ .A) + "",
        width: "1520",
        height: "2027"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Všetky súčiastky v celku"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(1481)/* ["default"] */ .A) + "",
        width: "1520",
        height: "2027"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Umiestnenie rolovača na okne 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(69890)/* ["default"] */ .A) + "",
        width: "1520",
        height: "2027"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Umiestnenie rolovača na okne 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(15821)/* ["default"] */ .A) + "",
        width: "1520",
        height: "2027"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "006návrh-a-prototypovanie",
      children: "006.Návrh a prototypovanie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na tejto stránke popisujeme proces návrhu nášho riešenia pre projekt automatizovaného ovládania žalúzií ABC - Automated Blinds Control. Rovnako sme tu zachytili prototypy vzniknuté počas navrhovacieho procesu a náčrty prvotného dizajnu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "top-level-návrh",
      children: "Top-level návrh"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Prvotný návrh a motivácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(97175)/* ["default"] */ .A) + "",
        width: "2025",
        height: "2048"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Návrh riešnie z perspektívy biznisu"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(88430)/* ["default"] */ .A) + "",
        width: "2048",
        height: "2018"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "návrh-architektúry",
      children: "Návrh architektúry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Potrebné komponenty"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mikročip/mikrokontrolér - jadro riešenia, ovládanie motora + komunikácia s ovládacími prvkami (ovládač, Alexa alebo iného Smart Home zariadenie),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Motor - pravdepodobne krokový, dostatočne silný na to, aby automatizácia rolovania žalúzií reálne predstavovala zefektívnenie (pomalý motor nechceme),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozhranie pre motor, ovládač motora - prepojenie s mikrokontrolérom, ovládanie motora,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prijímač signálu - na princípe infrasignálu alebo iného signálu. Ideálne schopný prijímať signály aj z ovládača aj Smart Home zariadenia (tuto bude potrebné preskúmať možnosti),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schránka (“Case“) - 3D tlačou vytlačená krabička, v ktorej sa budú nachádzať zvyšné časti. Kompaktný no zároveň robustný dizajn preferovaný, záleží od veľkosti komponentov a spôsobe zapojenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Závesný systém alebo uchytenie - možností je viacero, napr. úchytný systém na princípe skrutky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iné/ostatné mechanické a elektrické súčiastky potrebné na sprevádzkovanie - môže zahŕňať kábliky, a pod."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ostatné prvky"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Medzi komponenty, ktoré nie sú súčasťou zariadenia samotného (nenachádzajú sa v “krabičke“) patria:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "samotné žalúzie - predpokladajú sa také, ktoré majú guličkovú retiazku,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ovládač - univerzálny by mal postačovať, podľa použitej technológie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smart Home zariadenie - minimálne na testovanie funkcionality ovládania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napájanie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Návrh architektúry"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(91870)/* ["default"] */ .A) + "",
        width: "2048",
        height: "1541"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dizajnový-návrh",
      children: "Dizajnový návrh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prvotná myšlienka návrhu obsahuje v rámci komponentov samotného zariadenia aj displej, zobrazujúci aktuálny čas, rovnako ako aj nastavený čas rolovania žalúzií ako súčasť akejsi rutiny. Rovnako by v blízkosti displeja mohli byť aj ovládacie prvky, tlačidlá na nastavenie už spomínanej rutiny."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Návrh displeja zariadenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "biznis_image1",
        src: (__webpack_require__(51954)/* ["default"] */ .A) + "",
        width: "987",
        height: "700"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podporné-súbory",
      children: "Podporné súbory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(25383)/* ["default"] */ .A) + "",
          children: "006.Biznisová vrstva"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(84183)/* ["default"] */ .A) + "",
          children: "006.Návrh a prototypovanie"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(68797)/* ["default"] */ .A) + "",
          children: "006.Project Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(97875)/* ["default"] */ .A) + "",
          children: "006.Systémová vrstva"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(83375)/* ["default"] */ .A) + "",
          children: "006.Technologická vrstva"
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

/***/ 45092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3d_print_image-834b4a09d2d7a52ab00a207928a92701.jpg");

/***/ }),

/***/ 51954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh_displeja_zariadenia-59c648d73649b6c8364ea73df9213528.png");

/***/ }),

/***/ 54838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biznis_image1-2848c65a8b727956c4ab653ba1501e32.gif");

/***/ }),

/***/ 56109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/system_diagram1-a171b7c83a650fdc1392fa6e8bcd06eb.png");

/***/ }),

/***/ 59284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/circuit_scheme_image-3eec97a31f5266d09a872b383c038f8f.png");

/***/ }),

/***/ 68797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/006.Project Summary-b3d34a417fc00e094d78fde2977e75bc.pdf");

/***/ }),

/***/ 69890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/umiestnenie_na_okne1-da9590b1baff938dc2d4215538c321aa.jpg");

/***/ }),

/***/ 81037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ozubene_koliesko-1149a2b618a823809f786b9a5fbf67b4.jpg");

/***/ }),

/***/ 83375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/006.Technologická vrstva-85cae645ea95aab89a38757d9b2c456b.pdf");

/***/ }),

/***/ 83826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biznis_image2-3e94abd36e8e335540a37a71e1df9f57.png");

/***/ }),

/***/ 84183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/006.Návrh a prototypovanie-6ef3f71c423dcf2bb73a2de0d66426d0.pdf");

/***/ }),

/***/ 88430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh_riesenia_z_perspektivy_biznisu-c7a211f790247b48b69ec8e928f91a84.jpg");

/***/ }),

/***/ 89594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kryt_krabicky-b48c58702caaf655d929c0ce101cba1d.jpg");

/***/ }),

/***/ 91870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh_architektury-3deb3b9f7c4c1638fd7d9e1b14363b1c.jpg");

/***/ }),

/***/ 97175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/prvotny_navrh_a_motivacia-16970a92f3498340165fa00f5ff975c1.jpg");

/***/ }),

/***/ 97875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/006.Systémová vrstva-3d71f3be3e8f418fea99c386ccc54ac6.pdf");

/***/ })

}]);