// The three projects: the home page tickets and the case-study pages both read from here.
// Facts come from the old case-study pages and PRODUCT.md. Anything not known yet is
// marked [PLACEHOLDER] for Naiad to fill in.
import tgDiagram from "../images/web/thoughtGardenSystemDiagram.webp";
import tgFolders from "../images/web/thoughtGardenFolderStructure.webp";
import tgForward from "../images/web/forwardFifteenSnippet.webp";
import tgUtils from "../images/web/thoughtGardenCodeSnippet.webp";
import tgHome from "../images/web/renderHomePageSnippet.webp";
import ecShot from "../images/web/eCommerce.webp";
import ecDiagram from "../images/web/systemDiagram.webp";
import ecFolders from "../images/web/eCommerceFolderStructure.webp";
import ecItem from "../images/web/collectionItemCodeSnippet.webp";
import ecPage from "../images/web/collectionPageSnippet.webp";
import ecReducer from "../images/web/userReducerCodeSnippet.webp";
import pfShot from "../images/web/pathfinding.webp";
import pfSketch from "../images/web/projectSketch.webp";
import pfFolders from "../images/web/pathfinderFolderStructure.webp";
import pfNode from "../images/web/nodeCodeSnippet.webp";
import pfNodeComp from "../images/web/nodeCompCodeSnippet.webp";
import pfDijkstra from "../images/web/dijkstraCodeSnippet.webp";

export type Figure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string; // also the route: /thoughtgarden
  title: string;
  summary: string;
  problem: string;
  built: string;
  stack: string[];
  // Resting tilt, the tilt it drops in from, and its drop delay on the home page.
  // Full class names so Tailwind can find them.
  ticketClass: string;
  links: { label: string; href: string }[];
  video?: { id: string; title: string }; // YouTube
  shot?: Figure;
  credit?: string;
  overview: string[];
  architecture: Figure[];
  code: Figure[];
};

export const projects: Project[] = [
  {
    slug: "thoughtgarden",
    title: "Thought Garden",
    summary: "Synced podcast listening for Spotify Premium users.",
    problem: "Keep podcast playback in sync across listeners’ devices.",
    built: "A Django REST API and React client on the Spotify Web API.",
    stack: ["Django REST", "React", "Spotify API"],
    ticketClass: "-rotate-[0.5deg] [--tilt-from:-3deg] motion-safe:[animation-delay:350ms]",
    links: [
      { label: "Watch the demo", href: "https://www.youtube.com/watch?v=ASBGLWwAu1I" },
      { label: "Code on GitHub", href: "https://github.com/naiadbaksh/thought-garden" },
    ],
    video: { id: "ASBGLWwAu1I", title: "Thought Garden demo" },
    overview: [
      "Thought Garden lets Spotify Premium users listen to the same podcast together, with playback kept in sync across their devices: a watch party for podcasts.",
      "A Django REST backend talks to the Spotify Web API, and a React front end shows the room and the controls.",
    ],
    architecture: [
      {
        src: tgDiagram,
        width: 1440,
        height: 895,
        alt: "System diagram: the React user interface talks to the Django back end, where URLs route to views and utility functions that call the Spotify API.",
        caption: "System design.",
      },
      {
        src: tgFolders,
        width: 605,
        height: 586,
        alt: "Folder tree: thoughtgarden contains frontend, backend and spotify; spotify holds credentials, models, tests, urls, util and views Python files.",
        caption:
          "Folder structure. The front end, the backend and the Spotify integration each have their own folder; the Spotify folder holds most of the logic.",
      },
    ],
    code: [
      {
        src: tgForward,
        width: 1440,
        height: 612,
        alt: "Python code: a Django API view class that calls forward_fifteen().",
        caption: "An API view that calls forward_fifteen().",
      },
      {
        src: tgUtils,
        width: 1440,
        height: 830,
        alt: "Python utility functions that read the episode's progress and skip ahead 15 seconds through the Spotify API.",
        caption:
          "Utility functions for the API views: one finds the current episode's progress in milliseconds; the other uses it to ask the Spotify API to skip ahead 15 seconds.",
      },
      {
        src: tgHome,
        width: 1440,
        height: 957,
        alt: "React code that renders the home page.",
        caption: "Front-end code that renders the home page.",
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "eCommerce store",
    summary: "A storefront with accounts, a cart and payments.",
    problem: "Sell a catalogue with sign-in, a persistent cart and checkout.",
    built:
      "A Redux storefront with Firebase auth and data, and Stripe checkout, built from a course project and extended.",
    stack: ["React", "Redux", "Firebase", "Stripe"],
    ticketClass: "rotate-[0.4deg] [--tilt-from:3deg] motion-safe:[animation-delay:450ms]",
    links: [
      { label: "Live demo", href: "https://jovial-wozniak-c11748.netlify.app/" },
      { label: "Code on GitHub", href: "https://github.com/naiadbaksh/eCommerce" },
    ],
    shot: {
      src: ecShot,
      width: 1440,
      height: 786,
      alt: "The store's home page: an NB logo, Shop, Contact and Sign in links, a cart icon, and tiles for coats, shirts, shoes, suits and eveningwear.",
      caption: "The storefront.",
    },
    credit:
      "Built as a course project with the help of its instructors, senior engineers Yihua Zhang and Andrei Neagoie.",
    overview: [
      "A working online store for Italian-inspired menswear: browse collections, sign in, keep a cart, and pay.",
      "Redux holds app state, so components get data without prop drilling. Firebase Firestore is the database, sign-in uses OAuth 2, and Stripe handles payments. The UI uses React class and function components with hooks, styled first with Sass and later with styled-components.",
    ],
    architecture: [
      {
        src: ecDiagram,
        width: 880,
        height: 595,
        alt: "Redux data flow for the store, Nota Bene: cart, home and user reducers feed a root reducer in the store; mapStateToProps passes state as props to the user, home and cart components; their actions return to the store through mapDispatchToProps.",
        caption: "How data flows through Redux.",
      },
      {
        src: ecFolders,
        width: 605,
        height: 1252,
        alt: "Folder tree: src contains components, firebase, pages and redux; redux has cart, directory, shop and user folders, a root reducer and the store.",
        caption:
          "Folder structure. Each component has its own folder with its styled-components file; pages are styled with Sass; Firebase has a setup utility; Redux code is split into actions, reducers, selectors, types and utilities.",
      },
    ],
    code: [
      {
        src: ecItem,
        width: 1440,
        height: 688,
        alt: "React code for the collection item component.",
        caption:
          "The collection item. It takes item and addItem as props, shows the image, name and price, and its button adds the item to the cart.",
      },
      {
        src: ecPage,
        width: 1440,
        height: 765,
        alt: "React code for the collection page component.",
        caption:
          "The collection page maps a collection's items to collection items, so one data source in the database produces every product card.",
      },
      {
        src: ecReducer,
        width: 1260,
        height: 804,
        alt: "Redux code for the user reducer.",
        caption:
          "The user reducer sets the current user in response to actions sent to the store.",
      },
    ],
  },
  {
    slug: "pathfindingvisualizer",
    title: "Pathfinding Visualizer",
    summary: "Search algorithms, animated on an interactive grid.",
    problem: "Make search algorithms visible and intuitive.",
    built: "A grid that animates search and maze generation step by step.",
    stack: ["React", "Hooks"],
    ticketClass: "-rotate-[0.3deg] [--tilt-from:-2deg] motion-safe:[animation-delay:550ms]",
    links: [
      { label: "Live demo", href: "https://naiadbaksh.github.io/pathfinding/" },
      { label: "Code on GitHub", href: "https://github.com/naiadbaksh/pathfinding" },
    ],
    shot: {
      src: pfShot,
      width: 1440,
      height: 783,
      alt: "The visualizer: a toolbar with Algorithms, Visualize Algorithm, Mazes, Generate Maze, Clear Grid and Speed above a large grid with a green start node and a red end node.",
      caption: "The visualizer.",
    },
    credit: "Inspired by Clement Mihailescu’s pathfinding visualizer.",
    overview: [
      "An interactive grid that animates seven search algorithms (including Dijkstra’s, A*, breadth-first and depth-first) and four maze generators, one step at a time, so you can watch how each algorithm explores.",
      "I started from a sketch of the finished interface and built it from three React components: the visualizer, the toolbar and the node.",
    ],
    architecture: [
      {
        src: pfSketch,
        width: 1440,
        height: 1080,
        alt: "Hand-drawn sketch on grid paper: the toolbar, the grid with a start node, an end node and the shortest path between them, the area Dijkstra's algorithm explores, and notes on the toolbar, grid and node components.",
        caption: "The sketch I worked from.",
      },
      {
        src: pfFolders,
        width: 605,
        height: 938,
        alt: "Folder tree: src contains algorithms (A*, bidirectional greedy, breadth-first, depth-first, greedy best-first, Dijkstra, random walk), mazes (horizontal, vertical, random, recursive), pathfindingVisualizer with the toolbar, and node.",
        caption:
          "Folder structure: one file per algorithm and per maze, plus components for the visualizer, the toolbar and the node.",
      },
    ],
    code: [
      {
        src: pfNode,
        width: 1278,
        height: 876,
        alt: "JavaScript code for the node constructor.",
        caption: "The node constructor takes a row and a column and creates a node with its starting values.",
      },
      {
        src: pfNodeComp,
        width: 1440,
        height: 666,
        alt: "React code for the node component.",
        caption:
          "The node component: a div whose id comes from its row and column, with classes, styles and handlers passed in as props.",
      },
      {
        src: pfDijkstra,
        width: 1440,
        height: 992,
        alt: "JavaScript implementation of Dijkstra's algorithm.",
        caption:
          "Dijkstra’s algorithm, which finds the shortest path from one node to every other node in the grid.",
      },
    ],
  },
];
