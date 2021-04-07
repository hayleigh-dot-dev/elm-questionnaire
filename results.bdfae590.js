// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"responses/complete/01.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Ethan",
    "date": "",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "JUCE [C++]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Neutral",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Neutral",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Neutral",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [{
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Positive"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Positive"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Positive"
    }, {
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Positive"
    }, {
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Positive"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Positive"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Positive"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Positive"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Positive"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Positive"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Positive"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Positive"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Positive"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Neutral"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Neutral"
    }, {
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Positive"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Positive"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Positive"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Positive"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Neutral"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Positive"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Positive"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Neutral"
    }, {
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Neutral"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Neutral"
    }, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Negative"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Neutral"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Negative"
    }],
    "unsorted": [],
    "length": 36
  }
};
},{}],"responses/complete/03.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Nicholas Suda",
    "date": "Feb 25 2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Max/MSP"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Neutral",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [{
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Positive"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Positive"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Positive"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Positive"
    }, {
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Positive"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Positive"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Positive"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Positive"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Positive"
    }, {
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Positive"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Positive"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Neutral"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Positive"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Neutral"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Positive"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Positive"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Positive"
    }, {
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Positive"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Neutral"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Negative"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Neutral"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Neutral"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Neutral"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Negative"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Negative"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Negative"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Negative"
    }, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Negative"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Negative"
    }],
    "unsorted": [],
    "length": 36
  }
};
},{}],"responses/complete/04.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Nate Spasiuk",
    "date": "Feb 25, 2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "18-24 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Unemployed"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Less than 1 year"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Max/MSP"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Neutral",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Neutral",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Disagree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    "unsorted": [{
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Neutral"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Neutral"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Negative"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Neutral"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Neutral"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Neutral"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Positive"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Neutral"
    }, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Positive"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Neutral"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Positive"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Positive"
    }, {
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Positive"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Neutral"
    }, {
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Neutral"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Neutral"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Positive"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Negative"
    }, {
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Positive"
    }, {
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Positive"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Negative"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Positive"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Positive"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Positive"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Neutral"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Neutral"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Neutral"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Neutral"
    }],
    "length": 36
  }
};
},{}],"responses/complete/07.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Andrea Martelloni",
    "date": "27/2/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": "Juce [C++]",
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Neutral",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [{
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Positive"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Positive"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Positive"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Positive"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Positive"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Positive"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Positive"
    }, {
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Positive"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Positive"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Positive"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Positive"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Neutral"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Neutral"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Neutral"
    }, {
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Neutral"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Neutral"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Neutral"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Neutral"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Neutral"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Neutral"
    }, {
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Neutral"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Neutral"
    }, {
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Negative"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Negative"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Negative"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Negative"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Negative"
    }, {
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Negative"
    }, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Negative"
    }],
    "unsorted": [],
    "length": 36
  }
};
},{}],"responses/complete/08.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "tcc",
    "date": "2/27/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "45-54 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Strongly Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [{
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Positive"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Positive"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Positive"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Positive"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Positive"
    }, {
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Positive"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Positive"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Positive"
    }, {
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Positive"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Positive"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Positive"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Positive"
    }, {
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Positive"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Positive"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Positive"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Positive"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Positive"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Positive"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Positive"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Positive"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Positive"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Positive"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Positive"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Neutral"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Neutral"
    }, {
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Negative"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Neutral"
    }, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Negative"
    }],
    "unsorted": [],
    "length": 36
  }
};
},{}],"responses/complete/10.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "",
    "date": "",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Strongly Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [{
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Positive"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Positive"
    }, {
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Positive"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Positive"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Positive"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Positive"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Positive"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Positive"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Positive"
    }, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Positive"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Positive"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Positive"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Neutral"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Neutral"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Neutral"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Positive"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Negative"
    }, {
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Neutral"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Neutral"
    }, {
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Neutral"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Negative"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Negative"
    }, {
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Negative"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Negative"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Negative"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Negative"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Negative"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Negative"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Negative"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Negative"
    }],
    "unsorted": [],
    "length": 36
  }
};
},{}],"responses/complete/11.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Nicholas R. Nelson",
    "date": "2/27/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Neutral",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Neutral",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Neutral",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [{
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Positive"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Positive"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Positive"
    }, {
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Neutral"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Positive"
    }, {
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Positive"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Neutral"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Neutral"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Neutral"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Positive"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Positive"
    }, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Positive"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Positive"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Positive"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Neutral"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Positive"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Positive"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Positive"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Positive"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Neutral"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Neutral"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Positive"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Positive"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Neutral"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Neutral"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Neutral"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Negative"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Neutral"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Negative"
    }],
    "unsorted": [],
    "length": 36
  }
};
},{}],"responses/complete/12.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Dave Foster",
    "date": "27/2/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": "35-44 years old",
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "JUCE [C++]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Neutral",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }],
  "qsort": {
    "type": "Normal",
    "title": "Programming Language Features",
    "description": "In the two-part task below you'll need to rate various programming\n  language features according to positively or negatively they impact your\n  programming practice. In the second portion of the task you'll then be asked to\n  order the statements from \"Most negatively impactful\" through \"Not impactful\" to\n  \"Most positively impactful\". Each language feature has a brief description and\n  sometimes an example image or code snippet. If you're unsure how to rate a feature\n  rate it as Neutral.",
    "statements": [{
      "title": "The language has a comprehensive standard library covering areas such as UI, graphics, networking, and more complex audio constructs",
      "key": "11",
      "description": ["The language provides packages or modules for a wide variety of programming\n      tasks as part of it's standard library.", "These could include packages for creating and displaying user interfaces,\n      handling network requests, drawing graphics to the screen, or higher-level\n      audio elements such as complete synthesisers."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The language has an online editor or playground",
      "key": "16",
      "description": ["An online editor or playground allows developers to experiment with the\n      language without downloading anything or setting up any tooling.", "It can also serve as a convinient scratchpad to quickly test ideas without\n      the bloat of a full editor or ide."],
      "image": "images/16-online-editor.png",
      "rating": "Positive"
    }, {
      "title": "The language has a static type system that determines type correctness at compile-time",
      "key": "06",
      "description": ["In statically typed languages, the type of a value is determined at compile\n      time and the compiler performs checks to ensure all the types in a program\n      match up.", "Attempting to call a function that only takes integers with a string for\n      example, will result in a compile time error forcing the developer to fix\n      the problem.", "Some languages require all values and functions to have \"type annotations\"\n      whereas others can infer types based on their useage while still enforcing\n      correctness."],
      "image": "images/06-static-typing.png",
      "rating": "Positive"
    }, {
      "title": "The language supports objects with local properties and methods",
      "key": "27",
      "description": ["In object-oriented programming, a particular domain is modelled around\n      objects which contain some local state and some methods to manipulate\n      that state. This is principally a way of controlling encapsulation: certain\n      properties or state can be hidden and made accessible or modifiable via\n      an object's methods."],
      "image": "images/27-objects.png",
      "rating": "Positive"
    }, {
      "title": "User interfaces can be built using a drag-and-drop editor",
      "key": "22",
      "description": ["Some may find developing more complex user interfaces through plain\n      code cumbersome or difficult to manage. As an alternative, a number of\n      graphical editors exist to allow interface elements to be arranged on\n      a canvas and have the necessary code generated afterwards."],
      "image": "images/22-gui-editor.png",
      "rating": "Positive"
    }, {
      "title": "There is an official linter that detects common problems and anti-patterns such as unused imports or duplicate variable names",
      "key": "21",
      "description": ["A linter is a tool that detects bad practices, ineffecient code, or\n      common anti-patterns, and suggests how to fix those issues. These tools\n      are often maintained by the community and are configurable to taste.", "Some languages, however, include an official linter as part of the\n      language distribution such as with Go. The benefit of such a linter is\n      that they are often not user-configurable, ensuring the entire community\n      is often adhering to the same standards and practices."],
      "image": "images/21-linter.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors link directly to the portion of source code that caused the error",
      "key": "35",
      "description": ["For languages with their own editors or good integration with existing editors,\n      it can be possible to jump straight to error-producing code from an error\n      message itself.", "This can save developers time by not having to hunt around their codebase,\n      particular when there are many files or lots of lines of code."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "The compiler provides suggestions on how to fix a compiler error",
      "key": "34",
      "description": ["Some languages are able to offer suggestions or provide a more detailed\n      error message during compile or run-time errors. When done well they can\n      help developers quickly fix broken code or identify issues.", "The image is an example from a compiler error thrown by the Elm programming\n      language; notice how it provides the important information (there is a type\n      mismatch between string and number), but also recognises that the wrong\n      operator may have been used as instea."],
      "image": "images/34-compiler-suggestions.png",
      "rating": "Positive"
    }, {
      "title": "Compiler errors have a specific error code associated with them that can be used to find out more information about a particular error",
      "key": "33",
      "description": ["Sometimes a compiler or run-time error can have an explanation or additional\n      information that is not practical to print to the terminal/console. In those\n      cases the language might provide a specific error code that can be looked up\n      in the language's reference for more information.", "The image shows an example from Rust's error code reference, in this case\n      the error code is E00299. It features an explanation on how the error is\n      produced and a code example to exemplify that."],
      "image": "images/33-error-codes.png",
      "rating": "Positive"
    }, {
      "title": "There is a foreign function interface (FFI) to call functions written in different languages",
      "key": "30",
      "description": ["Some languages have a special ability to call functions or even import types\n      and data structures from a separate language. Most commonly, languages have\n      an FFI for calling C code to give developers access to high performance code\n      when they need it.", "This isn't the only use for an FFI, however. For languages built on a common\n      platform, an FFI can allow those languages to share code and data structures\n      as is the case in .NET languages like C#, F#, and BASIC."],
      "image": "",
      "rating": "Positive"
    }, {
      "title": "Code can be compiled in a debug mode that allows events to be rewound and stepped through in time",
      "key": "36",
      "description": ["It is not uncommon for a language to offer a debugger that allows deevelopers\n      to place break points to pause code execution and inspect the current program\n      state. For applications that rely on user interaction, another type of debugger\n      exists that records interaction events and allows them to be rewound and\n      played back."],
      "image": "images/36-time-travel.png",
      "rating": "Positive"
    }, {
      "title": "Public packages must be fully documented before they are published",
      "key": "15",
      "description": ["In many languages it is a common convention to have special documentation\n      comments, such as the popular JavaDoc style, to provide structured\n      documentation for a function or package.", "Some package repositories require the presence of these special comments\n      in any exposed function or class to help developers and consumers of the\n      package."],
      "image": "images/15-documentation.png",
      "rating": "Positive"
    }, {
      "title": "Code testing is built into the language",
      "key": "14",
      "description": ["Testing code can be an important part of some developers workflow. It\n      commonly involves testing a particular function or piece of code against\n      a variety of different inputs and making sure the output is what was\n      expected.", "Various testing frameworks existing for many programming languages, but\n      some offer specific constructs for testing as part of the language itself.", "The code snippet is from the Pyret language. A simple double function is\n      defined using the \"fun\" keyword, but then two test cases are defined after\n      the \"where\" keyword. When the program is run, the test cases are evaluated\n      and an exception is thrown if the result does not match the expected output."],
      "image": "images/14-first-class-tests.png",
      "rating": "Positive"
    }, {
      "title": "Run-time errors are encoded at the type level and handled as normal values",
      "key": "08",
      "description": ["In some languages such as Java, errors are represented as \"exceptions\"\n      that are thrown and must be caught to prevent the program from crashing.\n      In other languages however, errors are represented as values like any\n      other and can be manipulated and passed around as normal.", "The Result type above demonstrates this. Instead of throwing an exception,\n      the Result type describes a computation that might fail, and forces the\n      developer to handle both cases whenever validating a month number."],
      "image": "images/08-error-types.png",
      "rating": "Positive"
    }, {
      "title": "The language has an undefined and/or null type and value",
      "key": "07",
      "description": ["Some languages have the notion of \"undefined\" or \"null\" (or both) to\n      describe values that do not exist.", "In javascript undefined is returned when trying to access object properties\n      that do not exist, and null is used to explicitly describe something with\n      no value.", "In the snippet, the greet function checks if the object has the\n      property \"name\" and uses that in the greeting if it exists. If no element\n      has the id \"superCoolElement\", then null is returned and so this should\n      be checked before trying to do anything with the \"el\" variable."],
      "image": "images/07-undefined-and-null.png",
      "rating": "Positive"
    }, {
      "title": "The language has untagged union types to unify several existing types",
      "key": "04",
      "description": ["Similar to disjoint unions, untagged unions describe a value that can be\n      one of sevaral types. As the name implies, untagged unions do not \"tag\"\n      each variant.", "Untagged unions are used to say a value could be of type a OR type b, as\n      in the example above. The C code above defines a union of an int and a\n      float, and provides a mechanism to access either value. A similar thing\n      can be acheived in typescript, for example: \"type foo = number | string\"."],
      "image": "images/04-union-types.png",
      "rating": "Positive"
    }, {
      "title": "Types are dynamic and determined at run-time",
      "key": "05",
      "description": ["In dynamically typed languages, types are fluid and determined while the\n      program is running.", "This makes it easy for developers to maniupulate and transform values,\n      but comes at the cost of having to check types manually at runtime.", "The snippet shows how to check the type of a variable in javascript,\n      and shows that the type of a variable can change over it's lifetime."],
      "image": "images/05-dynamic-typing.png",
      "rating": "Positive"
    }, {
      "title": "Functions can be partially applied by supplying on some of it's arguments",
      "key": "31",
      "description": ["Partial application makes it easy to create new functions by supplying only\n      some of the arguments to an existing function.", "The code snippet shows the definition of an add function, and then a new\n      add10 function being created by only supplying on argument to that add\n      function."],
      "image": "images/31-partial-application.png",
      "rating": "Neutral"
    }, {
      "title": "A program can be edited while it is running and changes are reflected in real-time",
      "key": "29",
      "description": ["Known as hot reloading, or hot module replacemenet, this technology allows\n      a program to be edited while it is running without restarting the entire\n      application.", "This is particularly prevalent in web development, where it is often\n      desireable to persist application state while changing UI or design\n      elements."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "Functions are pure and do not perform side effects",
      "key": "24",
      "description": ["Pure functions exhibit two key properties. The first is known as referential\n      transparency. This means that given the same input, the output is always\n      the same. The second is a guarantee that the function has no side effects\n      such as mutating variables or file I/O.", "The code snippet contrasts a pure function to an impure one. The double\n      function behaves predictably and consistenly, but the addRandom function\n      does not. It mutates a global y variable, and uses Math.random meaning\n      the return value can change even when the arguments stay the same."],
      "image": "images/24-pure-functions.png",
      "rating": "Neutral"
    }, {
      "title": "There is an explorer for common and/or useful snippets of code, objects, or functions",
      "key": "19",
      "description": ["It is common for similar code snippets and patterns to be repeated\n      throughout a codebase, or across many codebases. A code snippet explorer\n      can help managage the smaller pieces of code, particularly in cases\n      where they tackle a specific or niche problem but the developer does not\n      want to create or find a package to import.", "For programming languages that also provide their own editor or environment,\n      such a code snippet explorer might be included. It may also be possible\n      to share snippets with the community and search for others."],
      "image": "images/19-explorer.png",
      "rating": "Neutral"
    }, {
      "title": "Programs can be constructed in a visual patcher environment",
      "key": "18",
      "description": ["Some languages are visual rather than textual. Individual objects or\n      functions are connected together with wires in a visual \"patcher\" environment\n      that displays the flow of data in the program."],
      "image": "images/18-visual-patcher.png",
      "rating": "Negative"
    }, {
      "title": "Functions and packages can be searched for based on their type signature",
      "key": "20",
      "description": ["When a language has static typing, it opens up the possibility for a\n      codebase or package to be searched for based not just on names but on\n      type signatures as well.", "Hoogle is one such example of this functionality. This can prove particularly\n      useful when developers know the result they want to achieve but not the\n      name of the function or want to explore different implementations with\n      the same type signature."],
      "image": "images/20-type-search.png",
      "rating": "Neutral"
    }, {
      "title": "The ability to evaluate strings as source code at run-time",
      "key": "13",
      "description": ["In many interpretted languages (and some compiled ones), developers are\n      given the ability to evaluate a string as though it were source code.", "This can be useful for allowing user input to be run and executed as code\n      or for code to be easily be dynamically generated and evaluated at run-time.", "The code snippet shows the eval function in JavaScript. First, eval is\n      called to evluate the result of 2 * 20, and that result can be stored in\n      the x variable like normal. Notice how the second use of eval is able to\n      use existing variables, here x is being converted to a string and assigned\n      to y."],
      "image": "images/13-eval.png",
      "rating": "Neutral"
    }, {
      "title": "Public packages must following the Semantic Versioning standard",
      "key": "12",
      "description": ["Some languages have tighter control on their package ecosystem. Elm uses\n      it's type system to analyse updates to packages and automatically works\n      out how to bump the package version.", "Semantic Versioning is a versioning standard that splits splits software\n      versions into MAJOR.MINOR.PATCH numbers such as 1.1.0. This serves as a\n      \"contract\" to consumers of a package, meaning that changes to a package's\n      API must result in a MAJOR version increase."],
      "image": "images/12-semantic-versioning.png",
      "rating": "Neutral"
    }, {
      "title": "The language supports reflection and/or introspection",
      "key": "10",
      "description": ["Languages that support reflection and/or introspection are capable of\n      examining a program at run-time. In doing so, these programs are able to\n      modify their own structure or behaviour, defining new types and inspecting\n      the type or properties of values at run-time.", "The above Java snippet gets all the methods defined in MyClass, and\n      prints their names to the console. Reflection is particularly useful for\n      serialising objects into a format such as JSON."],
      "image": "images/10-reflection-and-introspection.png",
      "rating": "Neutral"
    }, {
      "title": "Variable names cannot be shadowed",
      "key": "26",
      "description": ["Shadowing refers to the practice of creating a new variable with the\n      same name as another variable in the outer scope. This can be convinient\n      when shadowing generic variable names such as \"x\" in the code snippet, but\n      can also make code more difficult to read as developers must have to\n      remember which \"x\" is available in the current scope."],
      "image": "images/26-shadowing.png",
      "rating": "Negative"
    }, {
      "title": "Functions are first-class values and can be stored in variables and passed as arguments to other functions",
      "key": "25",
      "description": ["First-class functions means that functions are not treated as a special\n      language construct or data type. They can be passed to other functions\n      or stored in variables, arrays, etc.", "The code snippet shows a function being used as an argument to the\n      Array.map method. Array.map will then call that function on every element\n      in the array to transform it."],
      "image": "images/25-first-class-functions.png",
      "rating": "Negative"
    }, {
      "title": "Objects with the same members or structure may be used interchangeably",
      "key": "02",
      "description": ["Known as \"structural typing\", this system allows objects to be considered\n      equal if they share the same members.", "In the code snippet, values of both the Person and Employee types\n      can be passed to the greet function as they both have a \"name\" field."],
      "image": "images/02-structural-typing.png",
      "rating": "Negative"
    }, {
      "title": "There is an official formatter that formats source code to conform with a fixed style guide",
      "key": "17",
      "description": ["It is not uncommon for there to be differing opinions among developers\n      around how source code should be written and formatted. So-called linters\n      exist to enforce a specific code style within a team or community.", "Recently, languages have started provided official linters so that the\n      entire community conforms to a single style guide. This can be seen in\n      languages such as Go, Rust, and Elm."],
      "image": "",
      "rating": "Neutral"
    }, {
      "title": "The language has a different syntax for different parts of a program",
      "key": "32",
      "description": ["Instead of keeping the same syntax for all parts of a program, some languages\n      attempt to have different syntax (and sometimes semantics) more specifically\n      tailored to each part.", "The code snippet is a simple example from Csound. Different parts of the\n      program are encapsulated in XML-style tags, and each have their own unique\n      sytnax. The CsScore is wildly different from the CsInstruments section, for\n      example, but both benefit from being specifically designed for that part of\n      the program."],
      "image": "images/32-different-syntax.png",
      "rating": "Negative"
    }, {
      "title": "The language enforces a specific type of application structure or architecture",
      "key": "28",
      "description": ["There are many different ways to architecture and structure an applications.\n      Some languages take a more opinionated approach and impose a particular\n      architecture, or the language design makes a particular structure easier\n      to adopt.", "The code snippet shows a simple Csound program. All programs must have a\n      <CsInstruments> tag and a <CsScore> tag, even if they are left empty.", "This can be a benefit to a community as it becomes easier to read other\n      people's code, but can also pose unhelpful restrictions when a developer\n      wants to do something discouraged or outright impossible."],
      "image": "",
      "rating": "Negative"
    }, {
      "title": "The ability to restrict or constrain function arguments",
      "key": "01",
      "description": ["Known as \"dependent typing\", this type system allows a type's definition\n      to depend on a value.", "In the example above, the factorial function is defined. It takes one\n      argument, an integer, but has an additional constraint applied to it. The\n      factorial function can only be called with natural numbers: numbers\n      greater than zero.", "Attempting to call factorial(-1) would result in a compile-time error\n      meaning less run-time code is dedicated to input validation."],
      "image": "images/01-dependent-types.png",
      "rating": "Negative"
    }, null, null, {
      "title": "All values are immutable and cannot be modified",
      "key": "23",
      "description": ["In languages such as Haskell or Elm, values cannot be changed after being\n      defined. This means a suite of bugs related to mutating variables are no\n      longer a problem, but also means that new variables must be created whenever\n      we need to change something."],
      "image": "",
      "rating": "Negative"
    }],
    "unsorted": [{
      "title": "The language supports code macros",
      "key": "09",
      "description": ["Some languages support macros as a means of generating or inserting\n      bits of code into an existing piece of code. The code snippet is\n      an example of a macro in C. When the compiler comes across any instances\n      of the word \"double\", it expands and inserts the macro into the source\n      code and then compiles that new piece of code instead.", "Lisp takes this concept even further, allowing lisp programs themselves\n      to manipulate macros, and so functions can be written to generate macros\n      at run-time."],
      "image": "images/09-macros.png",
      "rating": "Neutral"
    }, {
      "title": "The language has tagged union types to describe variants of a single type",
      "key": "03",
      "description": ["Tagged unions, also known as \"disjoint unions\" are used to describe\n      a value that can take several different, but fixed, types. A special tag\n      is used to explicitly indicate which variant a value currently is.", "A traditional enum could be considered the most basic example of a tagged\n      union. Each member of the enum is a distinct tag such as Red, Orange, and\n      Green in the example above.", "Each variant in the union can also store differing pieces data, as is the\n      case in the AudioNode example. The Oscillator variant holds Float values\n      for frequency and phase, while the Gain variant holds a single Float value\n      for amount.", "Finally, tagged unions can be parameterised for generic use of the type.\n      The Result type defined above has two variants, Success and Error, and two\n      type parameters, e and a. Depending on the needs of the programmer, types\n      such as \"Result String Int\" can now be used to indicate a value that may\n      be an error string or an integer."],
      "image": "images/03-sum-types.png",
      "rating": "Neutral"
    }],
    "length": 36
  }
};
},{}],"responses/complete/*.json":[function(require,module,exports) {
module.exports = {
  "10": require("./10.json"),
  "11": require("./11.json"),
  "12": require("./12.json"),
  "01": require("./01.json"),
  "03": require("./03.json"),
  "04": require("./04.json"),
  "07": require("./07.json"),
  "08": require("./08.json")
};
},{"./01.json":"responses/complete/01.json","./03.json":"responses/complete/03.json","./04.json":"responses/complete/04.json","./07.json":"responses/complete/07.json","./08.json":"responses/complete/08.json","./10.json":"responses/complete/10.json","./11.json":"responses/complete/11.json","./12.json":"responses/complete/12.json"}],"responses/partial/01.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Ethan",
    "date": "",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "JUCE [C++]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Neutral",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Neutral",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Neutral",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/02.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Gavin Peters ",
    "date": "25/02/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Max/MSP"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Strongly Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Strongly Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Strongly Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/03.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Nicholas Suda",
    "date": "Feb 25 2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Max/MSP"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Neutral",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/04.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Nate Spasiuk",
    "date": "Feb 25, 2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "18-24 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Unemployed"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Less than 1 year"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Max/MSP"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Neutral",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Neutral",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Disagree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/05.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Jack Lister",
    "date": "25/02/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Neutral",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Neutral",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Neutral",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Neutral",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/06.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "John Matter",
    "date": "2/25/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Not applicable"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Max/MSP"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Strongly Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/07.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Andrea Martelloni",
    "date": "27/2/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "JUCE [C++]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Neutral",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/08.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "tcc",
    "date": "2/27/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "45-54 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Not applicable"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Strongly Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/09.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Kevin Chang",
    "date": "Feb 27, 2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "35-44 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Not applicable"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/10.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "",
    "date": "",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Strongly Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/11.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Nicholas R. Nelson",
    "date": "2/27/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Neutral",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Neutral",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Neutral",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/12.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Dave Foster",
    "date": "27/2/2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "35-44 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "JUCE [C++]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Agree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Neutral",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/13.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Kevin Chang",
    "date": "Feb 27, 2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "35-44 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Not applicable"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/14.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "David Sprinkle",
    "date": "2-28-2019",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Strongly Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Strongly Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/15.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Noname noname",
    "date": "27/02/2019",
    "consent": {
      "type": "UserConsent",
      "explained": false,
      "withdrawal": false,
      "understand": false,
      "personalData": false
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/16.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Noname noname",
    "date": "27/02/2019",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/17.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Baptiste Chatel",
    "date": "2020/02/28",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "35-44 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Not applicable"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Neutral",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Neutral",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Neutral",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Disagree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/18.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Philipp Schmalfuß",
    "date": "29.02.2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Strongly Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Strongly Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Neutral",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Agree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Disagree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Strongly Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/19.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Noname noname",
    "date": "27/02/2019",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Student"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "1 to 2 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "Pure Data"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Disagree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Strongly Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Strongly Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Strongly Agree",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Agree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Disagree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Disagree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Disagree",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Agree",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/20.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Akshay",
    "date": "11 Mar 2020",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "25-34 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Fixed",
      "text": "JUCE [C++]"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Strongly Agree",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Strongly Disagree",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Neutral",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Agree",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Strongly Agree",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Disagree",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Disagree",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Neutral",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Disagree",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Strongly Agree",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Agree",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Neutral",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/21.json":[function(require,module,exports) {
module.exports = {
  "userData": {
    "name": "Matthew Large",
    "date": "12/3/20",
    "consent": {
      "type": "UserConsent",
      "explained": true,
      "withdrawal": true,
      "understand": true,
      "personalData": true
    }
  },
  "demographics": [{
    "type": "SingleResponse",
    "question": "How old are you?",
    "response": {
      "type": "Fixed",
      "text": "35-44 years old"
    },
    "options": [{
      "type": "Fixed",
      "text": "Under 18"
    }, {
      "type": "Fixed",
      "text": "18-24 years old"
    }, {
      "type": "Fixed",
      "text": "25-34 years old"
    }, {
      "type": "Fixed",
      "text": "35-44 years old"
    }, {
      "type": "Fixed",
      "text": "45-54 years old"
    }, {
      "type": "Fixed",
      "text": "Over 55"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is the highest educational qualification you have attained?",
    "response": {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    },
    "options": [{
      "type": "Fixed",
      "text": "Did not complete any school qualification"
    }, {
      "type": "Fixed",
      "text": "Completed first school qualification at about 16 years (e.g.  GCSE/Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Completed Second qualification (e.g A levels/ High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }]
  }, {
    "type": "SingleResponse",
    "question": "If you are still in education, what is the highest qualification you expect to obtain?",
    "response": {
      "type": "Fixed",
      "text": "Not applicable"
    },
    "options": [{
      "type": "Fixed",
      "text": "First school qualification (e.g.  GCSE / Junior High School)"
    }, {
      "type": "Fixed",
      "text": "Post-16 vocational course"
    }, {
      "type": "Fixed",
      "text": "Second school qualification (e.g.  A-levels / High School)"
    }, {
      "type": "Fixed",
      "text": "Undergraduate degree or professional qualification"
    }, {
      "type": "Fixed",
      "text": "Master's or taught postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Doctorate or reserach postgraduate degree"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "What was/is your primary field of study?",
    "response": [{
      "type": "Fixed",
      "text": "Not applicable"
    }],
    "options": [{
      "type": "Fixed",
      "text": "Computer Science, Software Engineering, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Music, Music Technology, or related field of study"
    }, {
      "type": "Fixed",
      "text": "Not applicable"
    }]
  }, {
    "type": "SingleResponse",
    "question": "What is your current occupational status?",
    "response": {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    },
    "options": [{
      "type": "Fixed",
      "text": "Student"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In full-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – audio software related"
    }, {
      "type": "Fixed",
      "text": "In part-time employment – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – audio software related"
    }, {
      "type": "Fixed",
      "text": "Self-employed – not audio software related"
    }, {
      "type": "Fixed",
      "text": "Homemaker / full-time parent"
    }, {
      "type": "Fixed",
      "text": "Unemployed"
    }, {
      "type": "Fixed",
      "text": "Retired"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have programming?",
    "response": {
      "type": "Fixed",
      "text": "Over 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "SingleResponse",
    "question": "How many years experience do you have writing interactive audio software specifically?",
    "response": {
      "type": "Fixed",
      "text": "2 to 5 years"
    },
    "options": [{
      "type": "Fixed",
      "text": "Less than 1 year"
    }, {
      "type": "Fixed",
      "text": "1 to 2 years"
    }, {
      "type": "Fixed",
      "text": "2 to 5 years"
    }, {
      "type": "Fixed",
      "text": "Over 5 years"
    }]
  }, {
    "type": "MultipleResponseWithOther",
    "question": "Which of the following languages or frameworks have you used for creating interactive audio software?",
    "response": [{
      "type": "Other",
      "text": "C++"
    }],
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }, {
    "type": "SingleResponseWithOther",
    "question": "Which of the following languages or frameworks do you have the most experience creating interactive audio software with?",
    "response": {
      "type": "Other",
      "text": "C++"
    },
    "options": [{
      "type": "Fixed",
      "text": "AudioKit [Swift]"
    }, {
      "type": "Fixed",
      "text": "Csound"
    }, {
      "type": "Fixed",
      "text": "FAUST"
    }, {
      "type": "Fixed",
      "text": "JUCE [C++]"
    }, {
      "type": "Fixed",
      "text": "Max/MSP"
    }, {
      "type": "Fixed",
      "text": "Processing"
    }, {
      "type": "Fixed",
      "text": "Pure Data"
    }, {
      "type": "Fixed",
      "text": "Reaktor"
    }, {
      "type": "Fixed",
      "text": "SuperCollider"
    }, {
      "type": "Fixed",
      "text": "Web Audio API [JavaScript]"
    }]
  }],
  "likertScales": [{
    "title": "In a typical audio programming project, how well defined is the end goal?",
    "description": "Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.",
    "statements": [{
      "rating": "Disagree",
      "statement": "Before starting to program I have a clear idea what the program will look like."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how the program will work."
    }, {
      "rating": "Neutral",
      "statement": "Before starting to program I have a clear idea how to organise my code."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I write down what I need to do."
    }, {
      "rating": "Agree",
      "statement": "Before starting to program I sketch or wireframe how the program will look."
    }, {
      "rating": "Neutral",
      "statement": "It is not usually possible to define a project's requirements before starting a project."
    }, {
      "rating": "Strongly Agree",
      "statement": "I start out by trying a large number of variations of a loose idea before settling on something more concrete."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much time do you spend on, and how big is, a typical finished audio programming project?",
    "description": "Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.",
    "statements": [{
      "rating": "Neutral",
      "statement": "A typical project takes a significant amount of time to complete."
    }, {
      "rating": "Neutral",
      "statement": "A finished project's codebase tends to span multiple files and many lines of code."
    }, {
      "rating": "Neutral",
      "statement": "I tend to consider a project finished after one or two sessions of programming."
    }, {
      "rating": "Neutral",
      "statement": "A finished project's codebase tends to be made up of just one or two files."
    }, {
      "rating": "Neutral",
      "statement": "I often edit and re-run the same pieces of code multiple times to see how it changes."
    }, {
      "rating": "Neutral",
      "statement": "I comment out old bits of code in case I need to go back to them."
    }, {
      "rating": "Neutral",
      "statement": "I regularly check my code into version control systems such as Git or SVN."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }, {
    "title": "How much does a typical audio programming project change from beginning to end?",
    "description": "It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an just didn't work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.",
    "statements": [{
      "rating": "Neutral",
      "statement": "A project is only finished when all my tests pass."
    }, {
      "rating": "Neutral",
      "statement": "I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting."
    }, {
      "rating": "Neutral",
      "statement": "The primary method of interaction in a program has often changed by the time that project is finished."
    }, {
      "rating": "Neutral",
      "statement": "The primary audio output of a program has often changed by the time that project is finished."
    }, {
      "rating": "Agree",
      "statement": "I am constantly re-evaluating how the system or program should behave."
    }, {
      "rating": "Agree",
      "statement": "Working on a project is a creative feedback-loop between the computer and myself."
    }],
    "ratings": ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  }]
};
},{}],"responses/partial/*.json":[function(require,module,exports) {
module.exports = {
  "10": require("./10.json"),
  "11": require("./11.json"),
  "12": require("./12.json"),
  "13": require("./13.json"),
  "14": require("./14.json"),
  "15": require("./15.json"),
  "16": require("./16.json"),
  "17": require("./17.json"),
  "18": require("./18.json"),
  "19": require("./19.json"),
  "20": require("./20.json"),
  "21": require("./21.json"),
  "01": require("./01.json"),
  "02": require("./02.json"),
  "03": require("./03.json"),
  "04": require("./04.json"),
  "05": require("./05.json"),
  "06": require("./06.json"),
  "07": require("./07.json"),
  "08": require("./08.json"),
  "09": require("./09.json")
};
},{"./01.json":"responses/partial/01.json","./02.json":"responses/partial/02.json","./03.json":"responses/partial/03.json","./04.json":"responses/partial/04.json","./05.json":"responses/partial/05.json","./06.json":"responses/partial/06.json","./07.json":"responses/partial/07.json","./08.json":"responses/partial/08.json","./09.json":"responses/partial/09.json","./10.json":"responses/partial/10.json","./11.json":"responses/partial/11.json","./12.json":"responses/partial/12.json","./13.json":"responses/partial/13.json","./14.json":"responses/partial/14.json","./15.json":"responses/partial/15.json","./16.json":"responses/partial/16.json","./17.json":"responses/partial/17.json","./18.json":"responses/partial/18.json","./19.json":"responses/partial/19.json","./20.json":"responses/partial/20.json","./21.json":"responses/partial/21.json"}],"results.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("./responses/complete/*.json"));

var _2 = _interopRequireDefault(require("./responses/partial/*.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Utils -----------------------------------------------------------------------
var Plotly = window.Plotly;

var barChart = function barChart(results) {
  return {
    x: Object.keys(results),
    y: Object.values(results),
    type: 'bar'
  };
};

var layout = function layout(title) {
  return {
    title: title,
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    yaxis: {
      zeroline: false,
      gridwidth: 2
    },
    bargap: 0.05
  };
}; // Demographics ----------------------------------------------------------------


var demographicsQuestions = Object.values(_2.default).shift().demographics;
var demographicsResponses = Object.values(_2.default).map(function (_ref) {
  var demographics = _ref.demographics;
  return demographics;
});
var demographicsContainer = document.querySelector('#demographics');

function singleResponseResults(options, responses) {
  return responses.reduce( // Reduce function
  function (results, _ref2) {
    var text = _ref2.response.text;
    return _objectSpread({}, results, _defineProperty({}, text, results[text] + 1));
  }, // Initial value
  Object.fromEntries(options.map(function (_ref3) {
    var text = _ref3.text;
    return [text, 0];
  })));
}

function singleResponseWithOtherResults(options, responses) {
  return responses.reduce( // Reduce function
  function (results, _ref4) {
    var text = _ref4.response.text;
    return results[text] ? _objectSpread({}, results, _defineProperty({}, text, results[text] + 1)) : _objectSpread({}, results, _defineProperty({}, text, 1));
  }, // Initial value
  Object.fromEntries(options.map(function (_ref5) {
    var text = _ref5.text;
    return [text, 0];
  })));
}

function multipleResponseWithOtherResults(options, responses) {
  return responses.reduce( // Reduce function
  function (results, _ref6) {
    var response = _ref6.response;
    return response.reduce( // A-another reduce function
    function (results, _ref7) {
      var text = _ref7.text;
      return _objectSpread({}, results, _defineProperty({}, text, results[text] + 1));
    }, // Initial value
    results);
  }, // Initial value
  Object.fromEntries(options.map(function (_ref8) {
    var text = _ref8.text;
    return [text, 0];
  })));
}

demographicsQuestions.forEach(function (_ref9, i) {
  var question = _ref9.question,
      options = _ref9.options,
      type = _ref9.type;
  var el = document.createElement('figure');
  var responses = demographicsResponses.map(function (response) {
    return response[i];
  });

  var results = function () {
    switch (type) {
      case 'SingleResponse':
        return singleResponseResults(options, responses);

      case 'SingleResponseWithOther':
        return singleResponseWithOtherResults(options, responses);

      case 'MultipleResponseWithOther':
        return multipleResponseWithOtherResults(options, responses);
    }
  }();

  demographicsContainer.appendChild(el);
  Plotly.newPlot(el, [barChart(results)], layout(question));
}); // Likert scales ---------------------------------------------------------------

var likertQuestions = Object.values(_2.default).shift().likertScales;
var likertResponses = Object.values(_2.default).map(function (_ref10) {
  var likertScales = _ref10.likertScales;
  return likertScales;
});
var likertContainer = document.querySelector('#likerts');
var ratingColours = {
  'Strongly Agree': '#00876c',
  Agree: '#8bbaab',
  Neutral: '#eeeeee',
  Disagree: '#ea9b9c',
  'Strongly Disagree': '#d43d51'
};
likertQuestions.forEach(function (_ref11, i) {
  var title = _ref11.title,
      statements = _ref11.statements,
      ratings = _ref11.ratings;
  var el = document.createElement('figure');
  var responses = likertResponses.map(function (response) {
    return response[i].statements;
  }).reduce( // Reduce function
  function (results, statements) {
    statements.forEach(function (_ref12, i) {
      var rating = _ref12.rating;
      return results[i][rating]++;
    });
    return results;
  }, // Initial value
  statements.map(function () {
    return _objectSpread({}, ratings.reduce(function (o, k) {
      return _objectSpread({}, o, _defineProperty({}, k, 0));
    }, {}));
  }));
  var xValues = statements.map(function (_ref13) {
    var statement = _ref13.statement;
    return statement;
  });
  likertContainer.appendChild(el);
  Plotly.newPlot(el, ratings.map(function (rating, i) {
    return {
      x: xValues,
      y: responses.map(function (r) {
        return r[rating];
      }),
      type: 'bar',
      name: rating,
      marker: {
        color: ratingColours[rating]
      }
    };
  }), layout(title));
}); // QSort exercise --------------------------------------------------------------

var qsort = Object.values(_.default).filter(function (_ref14) {
  var qsort = _ref14.qsort;
  return qsort;
});
},{"./responses/complete/*.json":"responses/complete/*.json","./responses/partial/*.json":"responses/partial/*.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65308" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","results.js"], null)
//# sourceMappingURL=/results.bdfae590.js.map