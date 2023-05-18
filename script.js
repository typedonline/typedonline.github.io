const tipsAndTricks = [
   // HTML Tips
  { title: "Use Structured Data Markup", language: "HTML", tip: "Implement structured data markup (e.g., Schema.org) to provide search engines with additional information about your web content." },
  { title: "Optimize HTML5 Video", language: "HTML", tip: "Optimize HTML5 video performance by using the proper video formats, specifying dimensions, and enabling video compression." },
  { title: "Create Accessible Forms", language: "HTML", tip: "Build accessible forms by adding appropriate labels, using ARIA attributes, and ensuring proper keyboard navigation." },
  // ... Add more unique HTML tips ...

  // CSS Tips
  { title: "Apply CSS Specificity Wisely", language: "CSS", tip: "Understand CSS specificity and use it wisely to avoid conflicts and maintain consistent styling." },
  { title: "Optimize CSS Animations", language: "CSS", tip: "Optimize CSS animations by using hardware-accelerated properties, minimizing repaints, and considering performance implications." },
  { title: "Implement Fluid Typography", language: "CSS", tip: "Create fluid typography using relative units (e.g., vw, rem) for responsive and scalable text across different devices." },
  // ... Add more unique CSS tips ...

  // JavaScript Tips
  { title: "Use Modules for Code Organization", language: "JavaScript", tip: "Organize your JavaScript code using modules (ES Modules or CommonJS) to improve code maintainability and reusability." },
  { title: "Optimize DOM Manipulation", language: "JavaScript", tip: "Optimize DOM manipulation by batching changes, using document fragments, and avoiding excessive reflows." },
  { title: "Apply Functional Programming Principles", language: "JavaScript", tip: "Apply functional programming principles like immutability, pure functions, and higher-order functions to write more predictable and reusable JavaScript code." },
  // ... Add more unique JavaScript tips ...

  // Additional Tips for other Languages/Frameworks/Tools
  // Add more unique tips for other languages, frameworks, and tools used in web development
  { title: "Use Vue.js Single-File Components", language: "Vue.js", tip: "Leverage Vue.js Single-File Components (SFC) for better component organization, reusability, and maintainability." },
  { title: "Optimize Angular Performance", language: "Angular", tip: "Optimize Angular applications by using change detection strategies, lazy loading modules, and Ahead-of-Time (AOT) compilation." },
  { title: "Secure Node.js APIs", language: "Node.js", tip: "Implement proper authentication, input validation, and data sanitization to secure your Node.js APIs against common web vulnerabilities." },
  // ... Add more unique tips for other languages/frameworks/tools ...
  // HTML Tips
  { title: "Use Semantic Elements", language: "HTML", tip: "Leverage semantic HTML elements (e.g., <section>, <article>, <aside>) to provide meaningful structure to your web pages." },
  { title: "Optimize Page Titles", language: "HTML", tip: "Craft descriptive and concise page titles using the <title> element for better user experience and SEO." },
  { title: "Utilize HTML5 Form Features", language: "HTML", tip: "Leverage HTML5 form features such as input types (e.g., email, number), validation attributes, and the <datalist> element for enhanced form usability." },
  // Add more unique HTML tips (Sample)
  { title: "Avoid Inline Styles", language: "HTML", tip: "Separate style from content by using external CSS files instead of inline styles." },
  { title: "Utilize Meta Viewport Tag", language: "HTML", tip: "Include the meta viewport tag (<meta name='viewport' content='width=device-width, initial-scale=1.0'>) to ensure proper scaling and responsiveness on mobile devices." },
  { title: "Optimize Image Alt Attributes", language: "HTML", tip: "Provide descriptive alt attributes for images to improve accessibility and assistive technology support." },
  // ...
 // HTML Tips
  { title: "Use Semantic Elements", language: "HTML", tip: "Leverage semantic HTML elements (e.g., <section>, <article>, <aside>) to provide meaningful structure to your web pages." },
  { title: "Optimize Page Titles", language: "HTML", tip: "Craft descriptive and concise page titles using the <title> element for better user experience and SEO." },
  { title: "Utilize HTML5 Form Features", language: "HTML", tip: "Leverage HTML5 form features such as input types (e.g., email, number), validation attributes, and the <datalist> element for enhanced form usability." },
  // Add more unique HTML tips
  { title: "Avoid Inline Styles", language: "HTML", tip: "Separate style from content by using external CSS files instead of inline styles." },
  { title: "Utilize Meta Viewport Tag", language: "HTML", tip: "Include the meta viewport tag (<meta name='viewport' content='width=device-width, initial-scale=1.0'>) to ensure proper scaling and responsiveness on mobile devices." },
  { title: "Optimize Image Alt Attributes", language: "HTML", tip: "Provide descriptive alt attributes for images to improve accessibility and assistive technology support." },
  // ... Add more unique HTML tips ...

  // CSS Tips
  { title: "Implement Responsive Design", language: "CSS", tip: "Create responsive web designs using media queries to adapt to different screen sizes and devices." },
  { title: "Master CSS Flexbox", language: "CSS", tip: "Learn and use CSS Flexbox for creating flexible and efficient layouts." },
  { title: "Explore CSS Animation", language: "CSS", tip: "Experiment with CSS animations and transitions to add interactive and engaging effects to your web pages." },
  // Add more unique CSS tips
  { title: "Use CSS Grid", language: "CSS", tip: "Leverage CSS Grid for advanced grid-based layouts with precise control over rows and columns." },
  { title: "Optimize CSS Selectors", language: "CSS", tip: "Write efficient CSS selectors to improve rendering performance and minimize unnecessary style recalculations." },
  { title: "Implement CSS Custom Properties", language: "CSS", tip: "Utilize CSS custom properties (variables) to create reusable and easily maintainable styles." },
  // ... Add more unique CSS tips ...

  // JavaScript Tips
  { title: "Use Modern JavaScript Features", language: "JavaScript", tip: "Explore and utilize modern JavaScript features such as arrow functions, destructuring, and async/await for cleaner and more concise code." },
  { title: "Understand Scope and Closures", language: "JavaScript", tip: "Grasp the concepts of scope and closures to write better-organized and more maintainable JavaScript code." },
  { title: "Implement Debouncing and Throttling", language: "JavaScript", tip: "Apply debouncing and throttling techniques to optimize event handling and improve performance." },
  // Add more unique JavaScript tips
  { title: "Use Promises for Asynchronous Operations", language: "JavaScript", tip: "Employ JavaScript Promises to handle asynchronous operations and avoid callback hell." },
  { title: "Utilize Array Methods", language: "JavaScript", tip: "Take advantage of powerful array methods like map, filter, and reduce for efficient data manipulation and transformation." },
  { title: "Optimize JavaScript Performance", language: "JavaScript", tip: "Optimize JavaScript code for better performance by minimizing DOM manipulations and reducing unnecessary computations." },
  // ... Add more unique JavaScript tips ...

  // Additional Tips for other Languages/Frameworks/Tools
  // Add more unique tips for other languages, frameworks, and tools used in web development
  { title: "Use React Fragments", language: "React", tip: "Utilize React Fragments to group multiple elements without introducing additional nodes to the DOM." },
  { title: "Apply Error Boundaries", language: "React", tip: "Wrap components with Error Boundaries to gracefully handle and display error messages in React applications." },
  { title: "Optimize Redux State Management", language: "Redux", tip: "Optimize Redux state management by implementing memoization techniques and using Reselect for efficient data selection." },
  // ... Add more unique tips for other languages/frameworks/tools ...
  // CSS Tips
  { title: "Implement Responsive Design", language: "CSS", tip: "Create responsive web designs using media queries to adapt to different screen sizes and devices." },
  { title: "Master CSS Flexbox", language: "CSS", tip: "Learn and use CSS Flexbox for creating flexible and efficient layouts." },
  { title: "Explore CSS Animation", language: "CSS", tip: "Experiment with CSS animations and transitions to add interactive and engaging effects to your web pages." },
  // Add more unique CSS tips (Sample)
  { title: "Use CSS Variables", language: "CSS", tip: "Leverage CSS variables (custom properties) to create reusable and easily maintainable styles." },
  { title: "Implement CSS Grid", language: "CSS", tip: "Take advantage of CSS Grid for advanced grid-based layouts with precise control over rows and columns." },
  { title: "Optimize CSS Selectors", language: "CSS", tip: "Write efficient CSS selectors to improve rendering performance and minimize unnecessary style recalculations." },
  // ...

  // JavaScript Tips
  { title: "Use Modern JavaScript Features", language: "JavaScript", tip: "Explore and utilize modern JavaScript features such as arrow functions, destructuring, and async/await for cleaner and more concise code." },
  { title: "Understand Scope and Closures", language: "JavaScript", tip: "Grasp the concepts of scope and closures to write better-organized and more maintainable JavaScript code." },
  { title: "Implement Debouncing and Throttling", language: "JavaScript", tip: "Apply debouncing and throttling techniques to optimize event handling and improve performance." },
  // Add more unique JavaScript tips (Sample)
  { title: "Use Promises for Asynchronous Operations", language: "JavaScript", tip: "Employ JavaScript Promises to handle asynchronous operations and avoid callback hell." },
  { title: "Utilize Array Methods", language: "JavaScript", tip: "Take advantage of powerful array methods like map, filter, and reduce for efficient data manipulation and transformation." },
  { title: "Optimize JavaScript Performance", language: "JavaScript", tip: "Optimize JavaScript code for better performance by minimizing DOM manipulations and reducing unnecessary computations." },
  // ...

  // Additional Tips for other Languages/Frameworks/Tools
  // Add more unique tips for other languages, frameworks, and tools used in web development (Sample)
  { title: "Use React Fragments", language: "React", tip: "Utilize React Fragments to group multiple elements without introducing additional nodes to the DOM." },
  { title: "Apply Error Boundaries", language: "React", tip: "Wrap components with Error Boundaries to gracefully handle and display error messages in React applications." },
  { title: "Optimize Redux State Management", language: "Redux", tip: "Optimize Redux state management by implementing memoization techniques and using Reselect for efficient data selection." },
  // ...
  {
    title: "Improve Accessibility",
    language: "HTML",
    tip: "Use semantic HTML tags to improve accessibility and SEO.",
  },
  {
    title: "Responsive Layouts",
    language: "CSS",
    tip: "Use CSS Flexbox or Grid for responsive layout designs.",
  },
  {
    title: "Utilize ES6 Features",
    language: "JavaScript",
    tip: "Utilize ES6 features like arrow functions and template literals.",
  },
  {
    title: "Concise Code with List Comprehension",
    language: "Python",
    tip: "Python's list comprehension is a powerful tool for concise code.",
  },
  {
    title: "Leverage React's Virtual DOM",
    language: "React",
    tip: "React's virtual DOM improves performance by updating only what's necessary.",
  },
  {
    title: "Build Dynamic Components with Vue.js",
    language: "Vue.js",
    tip: "Leverage Vue.js directives like v-bind and v-if for dynamic and reactive components.",
  },
  {
    title: "Dependency Injection in Angular",
    language: "Angular",
    tip: "Use Angular's built-in dependency injection to manage component dependencies.",
  },
  {
    title: "Reusable Stylesheets with Sass",
    language: "Sass",
    tip: "Use Sass variables and mixins for more maintainable and reusable stylesheets.",
  },
  {
    title: "Create Responsive Layouts with Bootstrap",
    language: "Bootstrap",
    tip: "Bootstrap's grid system makes it easy to create responsive and mobile-first layouts.",
  },
  {
    title: "Manage Packages with Node.js",
    language: "Node.js",
    tip: "Use the Node Package Manager (npm) to manage and install external libraries and modules.",
  },
  {
    title: "Handle Middleware with Express.js",
    language: "Express.js",
    tip: "Leverage Express.js middleware for handling authentication, logging, and error handling.",
  },
  {
    title: "Scalable Data Storage with MongoDB",
    language: "MongoDB",
    tip: "Take advantage of MongoDB's flexible schema for scalable and document-oriented data storage.",
  },
  // Add more tips and tricks here
];

function displayTipsAndTricks() {
  const tipsContainer = document.getElementById("tipsContainer");

  tipsAndTricks.forEach((tip) => {
    const tipCard = document.createElement("div");
    tipCard.classList.add("tip-card");

    const tipTitle = document.createElement("h3");
    tipTitle.textContent = tip.title;

    const tipLanguage = document.createElement("p");
    tipLanguage.classList.add("tip-language");
    tipLanguage.textContent = tip.language;

    const tipContent = document.createElement("p");
    tipContent.textContent = tip.tip;

    tipCard.appendChild(tipTitle);
    tipCard.appendChild(tipLanguage);
    tipCard.appendChild(tipContent);
    tipsContainer.appendChild(tipCard);
  });
}

function filterTips(searchTerm) {
  const tipsCards = document.querySelectorAll(".tip-card");

  tipsCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const language = card.querySelector(".tip-language").textContent.toLowerCase();
    const matched = title.includes(searchTerm.toLowerCase()) || language.includes(searchTerm.toLowerCase());

    card.style.display = matched ? "block" : "none";
  });
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  filterTips(searchTerm);
});

displayTipsAndTricks();
