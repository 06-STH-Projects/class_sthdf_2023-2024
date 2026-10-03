"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[12640],{

/***/ 15937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/businessdiagram-9fb03498998bd3afd3a568ec773c7d92.png");

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

/***/ 64009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_008_presentation_slides_md_94e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2023-2024-projects-prj-008-presentation-slides-md-94e.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2023_2024_projects_prj_008_presentation_slides_md_94e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ008/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ008/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ008/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ008/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ008/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2026-10-03T07:50:26.219682+00:00","fm_version_comment":"","guid":"e049cff7-e386-41ec-a7e3-25f348e6b66c","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2026-10-03 09:50","modified":"2026-10-03 09:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ008","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ008/"},"next":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/projects/PRJ008/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2023-2024/projects/PRJ008/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2026-10-03T07:50:26.219682+00:00',
	fm_version_comment: '',
	guid: 'e049cff7-e386-41ec-a7e3-25f348e6b66c',
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
const contentTitle = 'PRJ008 — Presentation';

const assets = {

};



const toc = [{
  "value": "Automatic Arduino Pet Feeder",
  "id": "automatic-arduino-pet-feeder",
  "level": 2
}, {
  "value": "Authors",
  "id": "authors",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Solution Description",
  "id": "solution-description",
  "level": 2
}, {
  "value": "Used Technologies and Components",
  "id": "used-technologies-and-components",
  "level": 2
}, {
  "value": "HW and SW Preparation",
  "id": "hw-and-sw-preparation",
  "level": 2
}, {
  "value": "HW Setup",
  "id": "hw-setup",
  "level": 3
}, {
  "value": "Practical Part and Code",
  "id": "practical-part-and-code",
  "level": 2
}, {
  "value": "Business Diagram",
  "id": "business-diagram",
  "level": 2
}, {
  "value": "Technology Diagram",
  "id": "technology-diagram",
  "level": 2
}, {
  "value": "Architecture Diagram",
  "id": "architecture-diagram",
  "level": 2
}, {
  "value": "User Manual",
  "id": "user-manual",
  "level": 3
}, {
  "value": "Conclusion and Future Work",
  "id": "conclusion-and-future-work",
  "level": 2
}, {
  "value": "Future Work:",
  "id": "future-work",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2023-2024/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj008--presentation",
        children: "PRJ008 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "automatic-arduino-pet-feeder",
      children: "Automatic Arduino Pet Feeder"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authors",
      children: "Authors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anna Yuová (S045)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tomáš Rafaj (S036)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Have you ever faced the dilemma of leaving your pet home alone when you went to work or away for an extended period of time? Finding a reliable caregiver can be challenging, which is why we present our solution - the Automated Pet Feeder. Thanks to this system, we can leave the house with peace of mind, because thanks to this simple system, we will ensure that our furry friend will be fed regularly at certain intervals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using common and simple items, such as an Arduino Uno board, a plastic bottle, and a servo motor, we offer simple pet care. Say goodbye to the worry of feeding your pets with a hassle-free solution that will keep your pet happy and fed even when you're not at home."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solution-description",
      children: "Solution Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Assembly:"
          }), " Connecting the servomotor to the Arduino Uno and attaching it to a small piece of cardboard. Attaching the cardboard to the mouth of the plastic bottle, creating a simple dispenser mechanism."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Programming:"
          }), " Coding the Arduino to control the servo motor at specified time intervals, dispensing a predefined amount of pet food. Adjusting the programming to allow for customizable feeding schedules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pet Food Loading:"
          }), " Filling the plastic bottle with pet food, ensuring it securely fits into the dispenser. The servo motor will rotate to release the food as per the programmed schedule."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "used-technologies-and-components",
      children: "Used Technologies and Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We used these components for our project: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(detailed photos can be found in assets)"
      }), "\nArduino Uno (with cables)\nServo Motor\nPlastic Bottle\nA Small Piece of Cardboard"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated cost of necessary components: 15€ + 3€ (shipping)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Source: Drotik-Elektro e-shop"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hw-and-sw-preparation",
      children: "HW and SW Preparation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As our goal is to connect the Arduino Uno technology with the servo motor, our first step is to connect the hardware, as we can see in the image in assets."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hw-setup",
      children: "HW Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First step is to establish a connection by wiring the signal pin of the servo motor to pin #9 on the Arduino board, facilitating precise control over the servo's movements (the green color). Second step is to power the servo by linking its VCC (Voltage Common Collector) and GND (Ground) pins to the respective 5V VCC and GND terminals on the Arduino, ensuring a reliable and stable electrical connection (the red and blue colors). In the final step, we can enable the servo to actuate the pet food dispensing mechanism by affixing it to one end of the plastic bottle. Employ the servo's rotational motion to manipulate a strategically positioned piece of cardboard, effectively obstructing the bottle's opening and regulating the flow of dry pet food."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After we have connected the hardware components, we can move on to the software. As the first step we need to download and install the Arduino Integrated Development Environment (IDE) by navigating to the official link ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.arduino.cc/en/main/software",
        children: "https://www.arduino.cc/en/main/software"
      }), ". Then we proceed according to these steps:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Opt for the Windows installer option on the downloaded IDE file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initiate the download process by selecting \"JUST DOWNLOAD.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Execute the installation by clicking on the \"RUN\" button once the download is finished."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agree to the software terms by clicking the \"I Agree\" button; note that Arduino IDE is open-source."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Customize the installation by selecting all components in the list and proceed by clicking \"Next.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose the preferred installation location and proceed with the installation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the \"Adafruit Industries LLC Ports\" driver by clicking on the \"Install\" button."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the \"Arduino USB Driver\" by clicking on the respective \"Install\" button."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the \"Linino Ports (COM&LPT)\" driver by clicking on \"Install.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Close the installation process by pressing the \"CLOSE\" button once all drivers are installed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the hardware set-up is correctly connected, compile and upload the software to the Arduino board to enable seamless functioning of the pet feeder system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After our code is ready, we can select type of board from Arduino IDE menu: Tools\\Board: “Arduino/Genuino Uno” Then we can dentify the communication port on which the Arduino board will communicate, by accessing Device Manager. Finally we can set communication port, from Arduino IDE menu: Tools\\Port : COM7."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-part-and-code",
      children: "Practical Part and Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PetFeeder.ino"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <Servo.h>\n\n#define FEED_INTERVAL   1   // minutes between feeding time\n\nconst byte servoPin = 9;      // pin used to command the servo motor\nconst int ledPin = 13;\nconst int waitingTime = FEED_INTERVAL;\n\nServo servo;\n\nvolatile unsigned long sec;\nconst unsigned long feedInterval = (unsigned long) FEED_INTERVAL * (unsigned long) 15;  // expressed in seconds\n\n/**\n   stop the food from flowing\n*/\nvoid feederClose() {\n  servo.write(180);\n  delay(175);\n  servo.write(90);\n}\n\n/**\n   release a ration of food\n*/\nvoid feederOpen() {\n  digitalWrite(ledPin, LOW);\n  servo.write(0);\n  delay(175);\n  servo.write(90);\n}\n\n// Interrupt is called once a millisecond,\nSIGNAL(TIMER0_COMPA_vect)\n{\n  if (millis() % 1000 == 0) { // if a second has passed\n    sec++;  // increment the seconds counter\n    Serial.print(\"Second: \");\n    Serial.print(sec);\n    Serial.print(\" of \");\n    Serial.println(feedInterval);\n  }\n}\n\nvoid setup() {\n  Serial.begin(9600);\n  OCR0A = 0xAF; // set the timer interrupt\n  TIMSK0 |= _BV(OCIE0A);\n  servo.attach(servoPin);\n  Serial.println(\"System initialized\");\n\n  // Nastavení pinu LED jako výstupní\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  Serial.println(\"Waiting...\");\n  sec = 0;  // reset the counter\n  \n  // Blinking effect before opening the feeder\n  for (int i = 0; i < 5; i++) {\n    digitalWrite(ledPin, HIGH);\n    delay(500);\n    digitalWrite(ledPin, LOW);\n    delay(500);\n  }\n  \n  delay(5000);\n  while (feedInterval > sec);   // wait until the time interval is elapsed\n  Serial.println(\"Feeding the pet :)\");\n  feederOpen();\n  delay(150);\n  feederClose();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "business-diagram",
      children: "Business Diagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When designing a pet feeder for times when the owner is away, several features can enhance its effectiveness and address various needs. Here are some key features for a pet feeder intended for use when the pet is alone at home, which you can see in the picture below. These features collectively enhance the pet owner's ability to ensure their pet is well-fed, healthy, and happy even when they are not at home.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Business diagram",
        src: (__webpack_require__(15937)/* ["default"] */ .A) + "",
        width: "1014",
        height: "655"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Business diagram",
        src: (__webpack_require__(15937)/* ["default"] */ .A) + "",
        width: "1014",
        height: "655"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technology-diagram",
      children: "Technology Diagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Technology diagram",
        src: (__webpack_require__(85157)/* ["default"] */ .A) + "",
        width: "1322",
        height: "740"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Technology diagram",
        src: (__webpack_require__(85157)/* ["default"] */ .A) + "",
        width: "1322",
        height: "740"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture-diagram",
      children: "Architecture Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-manual",
      children: "User Manual"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Introduction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated Pet Feeder is an automated pet feeding system designed to provide convenience and peace of mind for pet owners. This user manual will guide you through the setup, operation, and maintenance of the PetPal Feeder, ensuring a seamless and enjoyable experience for both you and your pet."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Setting Up the Pet Feeder:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "a. Open the Arduino IDE on your computer."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "b. Load the provided application file \"PetFeeder.ino.\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "c. Adjust the code to set your preferred feeding schedule."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "d. Compile the code and upload it to the Arduino board."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Slide the carton so that the bottle opening is open."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Turn the bottle over and fill it with pet food."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Slide the cardboard back to close the opening of the bottle."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Turn the bottle upside down again."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance:\nCleaning and Care:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regularly clean the food storage container and dispenser components. Use mild soap and water for cleaning. Do not immerse in water. Ensure all components are thoroughly dry before use."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conclusion-and-future-work",
      children: "Conclusion and Future Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In conclusion, the development of the pet feeder system has addressed the challenge of ensuring pets are well-fed and cared for when their owners are away. The integration of an Arduino-based mechanism, servo motor, and customizable scheduling provides a simple yet effective solution for pet owners. The project not only emphasizes convenience but also leverages commonly available household items, making it accessible to a broad audience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As pet ownership continues to rise, this pet feeder serves as a testament to the potential of combining technology and practical design to meet the evolving needs of pet owners. The successful implementation of this project demonstrates its viability in providing a reliable and automated feeding solution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "future-work",
      children: "Future Work:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Moving forward, there are several avenues for future work and enhancements to explore:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Smart Connectivity:"
      }), " Integrate the pet feeder with IoT capabilities for enhanced connectivity, allowing owners to monitor and control the device remotely through dedicated mobile apps or voice-activated assistants."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Machine Learning Integration:"
      }), " Implement machine learning algorithms to analyze and adapt feeding schedules based on the pet's behavior and health indicators, providing a more personalized and dynamic feeding experience."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Sensor Systems:"
      }), " Incorporate advanced sensors for real-time monitoring of food levels, ensuring timely notifications to owners when the food supply is running low."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "User-Friendly Interface:"
      }), " Develop an intuitive and user-friendly mobile application with additional features such as health tracking, feeding history, and personalized notifications."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Energy Efficiency:"
      }), " Explore energy-efficient solutions, such as low-power modes and solar-powered options, to reduce the environmental impact and increase sustainability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Collaboration with Veterinarians:"
      }), " Collaborate with veterinary professionals to incorporate features that promote pet health, including specialized diet recommendations and integration with health monitoring devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continued innovation and refinement of the pet feeder system can contribute to the well-being of pets and offer owners a reliable and technologically advanced solution for their caregiving needs."
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

/***/ 85157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/technologydiagram-255ede41eafa2b76374345bf1e900c56.png");

/***/ })

}]);