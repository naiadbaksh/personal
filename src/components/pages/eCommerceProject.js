import React from "react";
import NavbarFixed from "../navbar/Navbar-Fixed";
import Footer from "../footer/Footer";
import Button from "../button/button.component";
import "./eCommerceProject.css";
import Carousel from "../carousel/carousel.component";
import collectionItemSnippet from "../../images/collectionItemCodeSnippet.png";
import collectionPageSnippet from "../../images/collectionPageSnippet.png";
import userReducerCodeSnippet from "../../images/userReducerCodeSnippet.png";

const carouselData = [
  {
    image: collectionItemSnippet,
    description:
      "This is the collection item component. It takes in item and addItem as props, destructures image, price and item name from the item prop, and uses that data to return a collection item. It also has a button that adds the item to the user's cart, which uses the addItem prop.",
  },
  {
    image: collectionPageSnippet,
    description:
      "This is the collection page. This comprises collection items, and takes in a collection prop, destructures the title and items from it, and returns a set of collection items using the map function. This way, the components work together to create a large number of items from one source - the database.",
  },
  {
    image: userReducerCodeSnippet,
    description:
      "This is the user reducer component. Reducers specify how the app's state changes in response to actions sent to the store. Here, the reducer is setting the current user, and spreading in the current state.",
  },
];

export default function eCommerceProject() {
  return (
    <>
      <NavbarFixed className="navbar active" />
      <div className="ecommerce">
        <div className="project-img"></div>
        <div className="cta">
          <div className="profile">
            <btn
              onClick={() =>
                window.open(
                  "https://619c1e991e2336007418ee38--jovial-wozniak-c11748.netlify.app/",
                  "_blank"
                )
              }
              className="see-live"
            >
              See it Live!
            </btn>
            <h2>My Process</h2>
            <p className="project-description">
              I created, with the help of senior engineers Yihua Zhang and
              Andrei Neagoie, a fully functional eCommerce website featuring
              fine Italian-inspired menswear. The site employs React class and
              functional components, React hooks, Sass and eventually styled
              components. I used Redux to be able to use state throughout the
              app to feed data to components without having to "prop drill". The
              payment processing employs Stripe integration, and the database is
              a Firebase Firestore. Authentication was done with OAuth2.
            </p>
            <h2 className="system-design">System Design</h2>
          </div>
          <div className="project-sketch"></div>
          <div className="skills">
            <h2 className="system-design">Folder Structure</h2>
            <p className="project-description">
              This is the folder structure I used to construct this project. I
              seperated all components into their own folder with their
              associated style file, which are written as styled components.
              Alternatively, the pages folder contains the jsx files for each
              page, and the styles are written is Sass. Firebase has its own
              folder with a utility file for database setup. Redux files are
              seperated into their own folders, which contain the actions,
              reducers, selectors, types and utility files.
            </p>
            <div className="folder-structure"></div>
            <h2>Code Snippets</h2>
            <div className="carousel">
              <Carousel carouselData={carouselData} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="end-quote">
          If you'd like to learn more about how I built this project, feel free
          to reach out to me on the socials linked below, or at
          contact@naiad.dev.
        </h4>
      </div>
      <Footer />
    </>
  );
}
