import React from "react";
import NavbarFixed from "../navbar/Navbar-Fixed";
import Footer from "../footer/Footer";
import Button from "../button/button.component";
import "./ThoughtGardenProject.css";
import Carousel from "../carousel/carousel.component";
import forward15Snippet from "../../images/forwardFifteenSnippet.png";
import renderHomePageSnippet from "../../images/renderHomePageSnippet.png";
import thoughtGardenCodeSnippet from "../../images/thoughtGardenCodeSnippet.png";
import DemoVideo from "../demo-video/demo-video.component";

const carouselData = [
  {
    image: forward15Snippet,
    description:
      "This is a class that inherits from the API View which calls the forward_fifteen() function.",
  },
  {
    image: thoughtGardenCodeSnippet,
    description: `These are utility functions called by the API Views. The latter finds the progress of the current episode in milliseconds and returns it. The former uses
      the latter function to execute a Spotify API request to add 15 seconds to the current time of the episode.`,
  },
  {
    image: renderHomePageSnippet,
    description: "This is code from the front end that renders the home page.",
  },
];

export default function ThoughtGardenProject() {
  return (
    <>
      <NavbarFixed className="navbar active" />
      <div className="thoughtgarden">
        <DemoVideo className="thoughtgarden-video" embedId="ASBGLWwAu1I" />
        <div className="cta">
          <div className="profile">
            {/* <btn
              onClick={() =>
                window.open(
                  "https://619c1e991e2336007418ee38--jovial-wozniak-c11748.netlify.app/",
                  "_blank"
                )
              }
              className="see-live"
            >
              See it Live!
            </btn> */}
            <h2>My Process</h2>
            <p className="project-description">
              I created a fullstack web application that allows Spotify Premium
              user to synchronize playback of podcasts between devices
              seamlessly. Think having a Netflix Watchparty for a Spotify
              Podcast! It's a great way to connect with others over fun,
              informative or interesting ideas. The app uses Django REST, React
              and the Spotify API.
            </p>
            <h2 className="system-design">System Design</h2>
          </div>
          <div className="thoughtgarden-sketch"></div>
          <div className="skills">
            <h2 className="system-design">Folder Structure</h2>
            <p className="project-description">
              This is the abridged folder structure I used to construct this
              project. I seperated the frontend, backend, and the Spotify API
              into their own folders, the Spotify folder containing the bulk of
              the logic as that's where most of the magic happens.
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
          naiadbaksh@gmail.com.
        </h4>
      </div>
      <Footer />
    </>
  );
}
