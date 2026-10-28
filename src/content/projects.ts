// The three projects: the home page tickets and the case-study pages both read from here.
// Facts come from the old case-study pages and PRODUCT.md. Anything not known yet is
// marked [PLACEHOLDER] for Naiad to fill in.
import tgDiagram from "../images/web/thoughtGardenSystemDiagram.webp";
import tgFolders from "../images/web/thoughtGardenFolderStructure.webp";
import tgForward from "../images/web/forwardFifteenSnippet.webp";
import tgUtils from "../images/web/thoughtGardenCodeSnippet.webp";
import tgHome from "../images/web/renderHomePageSnippet.webp";
import tgPlayer from "../images/web/thoughtGardenPlayer.jpg";
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
  audience: string; // who it is for, and why the problem matters
  architecture: Figure[];
  code: Figure[];
  decisions: { title: string; text: string }[];
  differently: string[];
};

export const projects: Project[] = [
  {
    slug: "thoughtgarden",
    title: "Thought Garden",
    summary: "A shared podcast room on one Spotify player.",
    problem: "Let a group control one podcast player from their own phones.",
    built: "A Django REST API and React client on the Spotify Web API.",
    stack: ["Django REST", "React", "Spotify API"],
    ticketClass: "-rotate-[0.5deg] [--tilt-from:-3deg] motion-safe:[animation-delay:350ms]",
    links: [
      { label: "Watch the demo", href: "https://www.youtube.com/watch?v=ASBGLWwAu1I" },
      { label: "Code on GitHub", href: "https://github.com/naiadbaksh/thought-garden" },
    ],
    video: { id: "ASBGLWwAu1I", title: "Thought Garden demo" },
    // A frame of the demo video, shown on the home ticket only (the case study shows the
    // video). The file is 640x480 with black bars; the ticket crops it to this 640x360.
    shot: {
      src: tgPlayer,
      width: 640,
      height: 360,
      alt: "The Thought Garden player in a shared room: the room code, the current podcast episode's cover and title, a progress bar, and pause and skip 15 seconds controls.",
      caption: "The player.",
    },
    overview: [
      "Thought Garden is a room for listening to a podcast together. The host plays the episode on their Spotify Premium account; everyone who joins with the room code sees what is playing and can control it from their own device.",
      "A Django REST backend talks to the Spotify Web API, and a React front end shows the room and the controls.",
    ],
    audience:
      "For a group listening to a podcast together, in one room or on a call. Usually one person holds the phone and everyone else asks them to pause or skip back. Thought Garden puts the controls on everyone’s own device, while the episode keeps playing from one place.",
    decisions: [
      {
        title: "One player, not many.",
        text: "The host’s Spotify account is the only player. Every command (play, pause, back or forward 15 seconds) goes through the server to the host’s device, so there is never more than one player to keep in sync. The cost: the host needs Spotify Premium and an active device.",
      },
      {
        title: "Polling, not WebSockets.",
        text: "The room page asks the server for the current episode every 500 ms. That kept the backend a plain Django REST app with no socket layer, but every open room makes two requests a second, and each one calls the Spotify API.",
      },
      {
        title: "Tokens stay on the server.",
        text: "The OAuth exchange and token refresh happen in Django, keyed to the browser session, so the client secret and refresh tokens never reach the browser.",
      },
      {
        title: "The host sets the rules.",
        text: "Guests can pause only if the host allows it, and a skip needs the number of votes the host chose.",
      },
    ],
    differently: [
      "Push updates over WebSockets or server-sent events, and call Spotify once per room instead of once per guest per poll.",
      "Fold the three near-identical Spotify request helpers into one that checks token expiry before each call and reports errors instead of hiding them behind a bare except.",
      "Keep the Python virtual environment out of the repository.",
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
    audience:
      "Every online shopper expects the same things: sign-in, a cart that remembers what they added, and a checkout that works. I built this store to learn how those pieces connect in a real React app: authentication, a database, global state and payments.",
    decisions: [
      {
        title: "Redux for shared state.",
        text: "The user, the cart and the shop data are needed on many pages, so they live in one store instead of being passed down through props. The cost is ceremony: actions, types, reducers and selectors for every slice.",
      },
      {
        title: "Selectors between the store and the UI.",
        text: "Components read state through selectors, so changing the shape of the store doesn’t break every component that uses it.",
      },
      {
        title: "Firebase, not my own server.",
        text: "Firestore and Firebase Auth gave me a database and OAuth sign-in with no backend to run. The cost: the data model and sign-in are tied to one vendor.",
      },
      {
        title: "Sass first, then styled-components.",
        text: "The move put each component’s styles next to its code. The pages still use Sass, so the project shows both approaches side by side.",
      },
    ],
    differently: [
      "Use Redux Toolkit, which removes most of the hand-written action and reducer code.",
      "Use function components and hooks throughout instead of a mix with class components.",
      "Add TypeScript to the product, cart and user models, where a wrong field shape costs money.",
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
    audience:
      "For students learning graph search, and anyone curious how a map finds a route. On paper, Dijkstra’s algorithm is a page of pseudocode. On a grid you can watch it spread out in every direction while A* heads straight for the target, and the difference is obvious in a few seconds.",
    decisions: [
      {
        title: "Compute first, animate after.",
        text: "Each algorithm runs to completion and returns the order in which it visited the nodes. The animation then replays that order.",
      },
      {
        title: "Animate in the DOM, not in React state.",
        text: "Each step changes a cell’s class directly by its id. Re-rendering a grid of thousands of cells on every step would be far too slow. The cost: React no longer knows what the grid looks like, so clearing the board has to reset those classes by hand.",
      },
      {
        title: "One file per algorithm and per maze.",
        text: "Each one returns plain data, so adding an algorithm doesn’t touch the visualizer.",
      },
      {
        title: "The grid fits the screen.",
        text: "Rows and columns come from the window size and are recalculated when the window is resized.",
      },
    ],
    differently: [
      "Use a priority queue in Dijkstra’s algorithm. My version sorts every unvisited node on each step; a binary heap does far less work on large grids.",
      "Add weighted cells. On an unweighted grid Dijkstra’s explores exactly like breadth-first search; weights would show why it exists.",
      "Split the 732-line visualizer component into separate pieces for grid state, animation and mouse input.",
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
