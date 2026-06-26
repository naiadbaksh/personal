import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const BackgroundContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  width: min(800px, 100%);
  max-width: 800px;
  min-height: 320px;
  max-height: min(500px, calc(100vh - 2rem));
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow: hidden;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #022336;

  p {
    margin-bottom: 1rem;
    color: #022336;
  }

  button {
    padding: 10px 24px;
    background: #022336;
    color: #fff;
    border: solid 1px #022336;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
