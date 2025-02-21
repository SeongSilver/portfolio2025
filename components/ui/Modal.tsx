import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;

// ✅ styled-components 스타일링
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background: white;
  color:black;
  padding: 20px;
  width: 80%;
  height:80%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-in-out;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
color:#c6c6c6;
  position: absolute;
  top: 0px;
  right: 20px;
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
`;
