import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  BackgroundContainer,
  ModalWrapper,
  ModalContent,
  ModalImage,
  CloseModalButton,
} from "./modal.styles";
import imageLoc from "./Modal.png";
import ContactForm from "../contact-form/contact-form.component";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

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
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <BackgroundContainer onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImage src={imageLoc} alt="camera" />
              <ModalContent>
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

export default Modal;
