import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  BackgroundContainer,
  ModalWrapper,
  ModalContent,
  ModalImage,
  CloseModalButton,
} from "./contact-modal.styles.jsx";
import imageLoc from "../../images/Modal2.png";
import ContactForm from "../contact-form/contact-form.component";

const ContactModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const headingId = useRef("contact-form-dialog-title");

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <BackgroundContainer
          onClick={closeModal}
          ref={modalRef}
          role="presentation"
        >
          <animated.div style={animation}>
            <ModalWrapper
              showModal={showModal}
              role="dialog"
              aria-modal="true"
              aria-labelledby={headingId.current}
            >
              <ModalImage src={imageLoc} alt="Illustration of a camera" />
              <ModalContent>
                <div id={headingId.current} className="sr-only">
                  Contact form dialog
                </div>
                <div className="sr-only" aria-live="polite">
                  {showModal ? "Contact form opened." : "Contact form closed."}
                </div>
                <ContactForm />
              </ModalContent>
              <CloseModalButton
                className="close-modal"
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </BackgroundContainer>
      ) : null}
    </>
  );
};

export default ContactModal;
