import React from "react";
import PropTypes from "prop-types";
import "./demo-video.styles.css";

const DemoVideo = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="1000"
      height="600"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

DemoVideo.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default DemoVideo;
