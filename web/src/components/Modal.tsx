import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,

  IModal as ModalProps, 
  useColorMode,
} from "@chakra-ui/core";


const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose, children, size,id }) => {
  
  const { colorMode } = useColorMode();

  return (
	  
    <Modal isOpen={isOpen} onClose={onClose} size={size} id={id} key={id}>
      <ModalOverlay />
      <ModalContent
        backgroundImage={
          colorMode === "light"
            ? "linear-gradient(to left bottom, #a6bbcd, #aecbd2, #c0d8d5, #d6e4da, #edf0e5);"
            : "linear-gradient(to right top, #33383d, #1e3752, #152d48, #0c243e, #041b34);"
        }
        borderRadius={10}
      >
        
        {children}        
      </ModalContent>
    </Modal>
  );
};
export default ModalComponent;
