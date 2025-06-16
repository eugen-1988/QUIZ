const questions = [
  {
    id: "q1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library for building user interfaces with declarative code.",
      "A library for managing state in web applications.",
      "A framework for building user interfaces with imperative code.",
      "A library used exclusively for building mobile applications.",
    ],
  },
  {
    id: "q2",
    text: "What is the purpose of React Hooks?",
    answers: [
      "They enable the use of state and other React features in functional components.",
      "To create responsive layouts in React applications.",
      "To handle errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
  },
  {
    id: "q3",
    text: "Can you explain what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      "A JavaScript library for building dynamic user interfaces.",
      "A specific version of HTML created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
  },
  {
    id: "q4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.",
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with the .jsx extension.",
      "By using the 'new' keyword followed by the component name.",
    ],
  },
  {
    id: "q5",
    text: "What does the term 'React state' refer to?",
    answers: [
      "An object in a component that holds values and can trigger re-rendering.",
      "The lifecycle phase a React component is in.",
      "The overall status of a React application, including all props and components.",
      "A library for managing global state in React applications.",
    ],
  },
  {
    id: "q6",
    text: "How is list content typically rendered in React applications?",
    answers: [
      "By using the map() method to iterate over an array of data and return JSX.",
      "By using a for() loop to iterate over an array of data and return JSX.",
      "By using the forEach() method to iterate over an array of data and return JSX.",
      "By using the loop() method to iterate over an array of data and return JSX.",
    ],
  },
  {
    id: "q7",
    text: "Which method CANNOT be used to conditionally render content?",
    answers: [
      "Using the #if template syntax.",
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
  },
  {
    id: "q8",
    text: "What is the purpose of 'useEffect' in React?",
    answers: [
      "To run side effects after rendering, such as fetching data or setting up event listeners.",
      "To dynamically change component styles at runtime.",
      "To load hooks dynamically.",
      "To sync global state between components.",
    ],
  },
  {
    id: "q9",
    text: "What is a 'Prop' in React?",
    answers: [
      "A mechanism to pass data to components.",
      "A special hook for updating state.",
      "An attribute used only in class components.",
      "A lifecycle event during rendering.",
    ],
  },
  {
    id: "q10",
    text: "What does the 'npm run build' command do in a React app?",
    answers: [
      "It creates an optimized, production-ready version of the app.",
      "It starts the development environment.",
      "It removes unused components from the code.",
      "It runs automated tests.",
    ],
  },
  {
    id: "q11",
    text: "Which file is typically the entry point of a React application?",
    answers: [
      "index.js or main.jsx in the src folder.",
      "App.css.",
      "public/index.html.",
      "vite.config.js.",
    ],
  },
  {
    id: "q12",
    text: "How can multiple React components work together?",
    answers: [
      "Through props, events, and lifting state up.",
      "Only through global CSS files.",
      "Through direct DOM manipulation.",
      "Through return values of `setState()`.",
    ],
  },
  {
    id: "q13",
    text: "What does the 'useState()' function do?",
    answers: [
      "Creates a piece of internal state in a function component.",
      "Registers event handlers for native events.",
      "Binds the component template to logic.",
      "Switches between static and dynamic components.",
    ],
  },
  {
    id: "q14",
    text: "How does conditional rendering work in JSX?",
    answers: [
      "Using `&&` or the ternary operator.",
      "Only through if-else outside JSX.",
      "Only via an external plugin.",
      "With a special directive like `v-if`.",
    ],
  },
  {
    id: "q15",
    text: "What is a Fragment in React?",
    answers: [
      "A container that doesn't add extra DOM elements, like `<></>`.",
      "A universal state store.",
      "A hook for page navigation.",
      "A tool for optimizing images.",
    ],
  },
  {
    id: "q16",
    text: "What does 'useRef' do in React?",
    answers: [
      "Creates a reference to a DOM element or a persistent value.",
      "Stores reusable hooks.",
      "Manages global themes.",
      "Combines CSS classes.",
    ],
  },
  {
    id: "q17",
    text: "How can a React component be optimized?",
    answers: [
      "By using memoization with `React.memo`, `useMemo`, and `useCallback`.",
      "By storing all data in global state.",
      "By using more CSS files.",
      "By replacing components with plain HTML.",
    ],
  },
  {
    id: "q18",
    text: "What is the difference between 'controlled' and 'uncontrolled' components?",
    answers: [
      "Controlled use React state for input values, uncontrolled do not.",
      "Uncontrolled are optimized for performance, controlled are not.",
      "Controlled work only with class components.",
      "Uncontrolled have no events.",
    ],
  },
  {
    id: "q19",
    text: "What is the purpose of React Router?",
    answers: [
      "It enables navigation between components without full page reloads.",
      "It performs automatic state synchronization.",
      "It stores user data in localStorage.",
      "It validates forms in real time.",
    ],
  },
  {
    id: "q20",
    text: "When should you use the React Context API?",
    answers: [
      "When you want to share data across many components without passing props manually.",
      "When loading asynchronous data from an API.",
      "When using multiple CSS themes.",
      "Only when working with Redux.",
    ],
  },
];

export default questions;
