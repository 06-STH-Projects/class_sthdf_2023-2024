"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[25461],{

/***/ 1000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/STHOutcomes-03. System layer (2023-2024-S015-S023)-310124-202448-e2639d49316ca25e2b88770cffb87c69.pdf");

/***/ }),

/***/ 16471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/photo_2024-01-14_20-54-53-62bca6315d868be2b78e010139bbc3f6.jpg");

/***/ }),

/***/ 18809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/STHOutcomes-01. Project overview (2023-2024-S015-S023)-310124-202410-07d82b561fcc46a150218fdcb6a59dca.pdf");

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

/***/ 37961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema-6cc69cf01ae0bab561779172b76b4f4c.png");

/***/ }),

/***/ 50913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_010_presentation_slides_md_9a4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-projects-prj-010-presentation-slides-md-9a4.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_010_presentation_slides_md_9a4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ010/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ010/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ010/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ010/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ010/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.227167+00:00","fm_version_comment":"","guid":"d5357a80-51e5-4588-bb3d-4580ce400ae1","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ010","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ010/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ010/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ010/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.227167+00:00',
	fm_version_comment: '',
	guid: 'd5357a80-51e5-4588-bb3d-4580ce400ae1',
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
const contentTitle = 'PRJ010 — Presentation';

const assets = {

};



const toc = [{
  "value": "MouseMover",
  "id": "mousemover",
  "level": 2
}, {
  "value": "<span>?!</span> Is micromanagement a problem?",
  "id": "-is-micromanagement-a-problem",
  "level": 2
}, {
  "value": "How can MouseMover be a good way to solve micromanagement problems?",
  "id": "how-can-mousemover-be-a-good-way-to-solve-micromanagement-problems",
  "level": 2
}, {
  "value": "What functional and non-functional requirements are required?",
  "id": "what-functional-and-non-functional-requirements-are-required",
  "level": 2
}, {
  "value": "Proposed solution design",
  "id": "proposed-solution-design",
  "level": 2
}, {
  "value": "The initial proposal",
  "id": "the-initial-proposal",
  "level": 4
}, {
  "value": "The solution (box)",
  "id": "the-solution-box",
  "level": 4
}, {
  "value": "The solution (circuit and implementation)",
  "id": "the-solution-circuit-and-implementation",
  "level": 4
}, {
  "value": "Future work",
  "id": "future-work",
  "level": 2
}, {
  "value": "References :",
  "id": "references-",
  "level": 2
}, {
  "value": "Podporné súbory",
  "id": "podporné-súbory",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "prj010--presentation",
        children: "PRJ010 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mousemover",
      children: "MouseMover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In today's busy world of working from home, dominated by flexibility, personal time may seem like a distant memory. The boundaries between work life and personal life are disappearing, and the constant need to be ", (0,jsx_runtime.jsx)("span", {
        children: "available"
      }), " can gradually consume our well-being."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At the beginning of the project we made an analysis and a business scenario was written."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Within a fast-moving corporate reality where every second counts, Emily found herself caught up in a micro-management net. She was always productive and always strived to meet deadlines and exceed expectations. Although she often took short coffee breaks to take a break from her desk, she was unaware that the virtual eye of her supervisor was constantly watching her."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["One day, when Emily risked a quick coffee break ", (0,jsx_runtime.jsx)("span", {
          children: "away"
        }), " from her home office, the notifications and messages were still following her. Her supervisor's watchful eye caught a period of inactivity, and her work status changed to ", (0,jsx_runtime.jsx)("span", {
          children: "away"
        }), ". Upon returning back home, a stream of urgent emails and missed calls from her supervisor awaited her."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A similar case occurred to Alexander, another gifted individual. He, too, was a master of productivity, meeting deadlines and devoting a lot of time to work. On one hectic day, filled with emails and online meetings, a bell rang demanding his attention, and Alex was forced to leave his desk. After a while, his work status changed to ", (0,jsx_runtime.jsx)("span", {
          children: "away"
        }), ". Upon his return, he was met with a similar stream of emails from his supervisor."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "These are among the few examples that illustrate a current problem in the corporate environment where supervisors micromanage and do not always respect the personal time of their employees."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("div", {
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["According to a study conducted by Trinity Solutions, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "79% of employees have experienced micromanagement"
        }), ", with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "71% reporting that micromanagement interfered with their job performance"
        }), ". Of those, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "69% have considered changing jobs due to micromanagement"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "36% have actually changed jobs"
        }), " [1, 2]."]
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Further studies from 2020, published by Thomas Alsop on 1 February 2022 [3], show the following results:"
      })
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        src: "./img/images/946b1157-5bfa-4b34-964c-17e714208e17.png",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-is-micromanagement-a-problem",
      children: [(0,jsx_runtime.jsx)("span", {
        children: "?!"
      }), " Is micromanagement a problem?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Micromanagement is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "leadership style in which the manager is overly controlling of his subordinates"
      }), " [4]. This may include monitoring their work, constantly giving them instructions or getting too involved in their work [1,2,4]."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced employee motivation and engagement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced productivity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increased stress and burnout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deteriorated relationships between employees and supervisors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-can-mousemover-be-a-good-way-to-solve-micromanagement-problems",
      children: "How can MouseMover be a good way to solve micromanagement problems?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MouseMover is a device that mimics human mouse movement"
      }), ". It can be used to keep the computer in an active state even when the user is not physically at the computer. MouseMover can be a good way to solve micromanagement problems because ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "it allows employees to walk away from their computers without worrying about looking like they're lazy or unproductive"
      }), ". This can help employees feel more trusted and respected by their supervisors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-functional-and-non-functional-requirements-are-required",
      children: "What functional and non-functional requirements are required?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional requirements"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MouseMover should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "able to mimic human mouse movement accurately"
        }), " enough to keep the computer in an active state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MouseMover should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "able to work with different types of computers and operating systems"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MouseMover should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "easy to use"
        }), " and set up."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-functional requirements"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MouseMover should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reliable"
        }), " and should ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "work continuously"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MouseMover should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "energy efficient"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MouseMover should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "affordable"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution-design",
      children: "Proposed solution design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-initial-proposal",
      children: "The initial proposal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The box was designed by us in SketchUp and also Canva, which is freely available on the internet."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/1.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "./img/images/2.png",
      alt: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-solution-box",
      children: "The solution (box)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the final product a barrier was added, because when testing the tool the mouse sometimes 'ran away', so it was necessary to prevent this."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The box was made at home with our own hands, using a 3 mm thick raw HDF board. We used tools such as a ruler, a wood frame saw and a compass to shape it. The finishing touches were were achieved using sandpaper. A glue gun was used to connect the parts."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Figure 4. Final box from the side",
        src: (__webpack_require__(16471)/* ["default"] */ .A) + "",
        width: "960",
        height: "1280"
      }), "{height=320 width=240}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Figure 5. Final box from the above",
        src: (__webpack_require__(92508)/* ["default"] */ .A) + "",
        width: "960",
        height: "1280"
      }), "{height=320 width=240}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-solution-circuit-and-implementation",
      children: "The solution (circuit and implementation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The circuit was designed in Tinkercad, and for the solution of the problem Arduino Nano and continuous Servo motor were used. In addition, a cable had to be added to make the connection to the computer possible (USB to Micro USB). The code for the motion simulation was written in C++."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Figure 6. The circuit designed in Tinkercad",
        src: (__webpack_require__(37961)/* ["default"] */ .A) + "",
        width: "1536",
        height: "598"
      }), "{height=299 width=768}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The code for the motion simulation was written in C++.  The code essentially creates a simple random servo motor movement, making the servo move to a random angle with a random speed, pause for a random duration, and then return to the starting position. The randomness is introduced using the random() function, and the Servo library is used to control the servo motor."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <Servo.h>\n\nServo myservo;  // A Servo object named \"myservo\" to control the servo motor\nint pos = 0;    // Variable to store the current position of the servo\n\nlong randomAngle;  // Variable to store randomly generated angle\nlong randomSpeed;  // Variable to store randomly generated speed\n\nvoid setup() {\n  myservo.attach(2);  // Attach the servo to pin 2\n  randomSeed(analogRead(A0));  // Initialize the random seed using analog reading from pin A0\n}\n\nvoid loop() {\n  randomAngle = random(0, 181);  // Generate a random angle between 0 and 180 degrees\n  randomSpeed = random(2, 20);   // Generate a random speed between 2 and 19 (milliseconds)\n\n  // Move the servo from 0 to the randomly generated angle\n  for (pos = 0; pos <= randomAngle; pos += 1) {\n    myservo.write(pos);  // Set the servo position\n    delay(randomSpeed);   // Introduce a delay based on the randomly generated speed\n  }\n\n  delay(random(500, 2000));  // Introduce a random pause between movements (500 to 2000 milliseconds)\n\n  // Move the servo back from the randomly generated angle to 0\n  for (pos = randomAngle; pos >= 0; pos -= 1) {\n    myservo.write(pos);  // Set the servo position\n    delay(randomSpeed);   // Introduce a delay based on the randomly generated speed\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-work",
      children: "Future work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The box could have a better shape, better colouring. Other movements could be included in the code to simulate more human movement."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references-",
      children: "References :"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[1] Is Micromanaging A Form Of Bullying? Here Are 3 Things You Should Know"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[2] Micromanagement destroys teams — here's how to nip it in the bud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[3] Employees micromanaged when remote working by country 2020 | Statista"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[4] What Is a Micromanager? Impact, Signs, and Ways to Reform"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "podporné-súbory",
      children: "Podporné súbory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(18809)/* ["default"] */ .A) + "",
          children: "STHOutcomes-01. Project overview (2023-2024-S015-S023)-310124-202410"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(98432)/* ["default"] */ .A) + "",
          children: "STHOutcomes-02. Business layer (2023-2024-S015-S023)-310124-202453"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(1000)/* ["default"] */ .A) + "",
          children: "STHOutcomes-03. System layer (2023-2024-S015-S023)-310124-202448"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(54395)/* ["default"] */ .A) + "",
          children: "STHOutcomes-04. Technical documentation (2023-2024-S015-S023)-310124-202502"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(57276)/* ["default"] */ .A) + "",
          children: "STHOutcomes-05. Project outcomes (2023-2024-S015-S023)-310124-202505"
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

/***/ 54395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/STHOutcomes-04. Technical documentation (2023-2024-S015-S023)-310124-202502-9238f203e4fbc57cae841a048588424d.pdf");

/***/ }),

/***/ 57276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/STHOutcomes-05. Project outcomes (2023-2024-S015-S023)-310124-202505-856216b7017711379563319a2f481966.pdf");

/***/ }),

/***/ 92508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/photo_2024-01-14_20-54-47-522b50cc02c9ccdcbe547efaaa633a32.jpg");

/***/ }),

/***/ 98432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/STHOutcomes-02. Business layer (2023-2024-S015-S023)-310124-202453-d36bff5919278fb5bc3ff3e1ec9d7421.pdf");

/***/ })

}]);