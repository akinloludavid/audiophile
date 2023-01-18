import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import React from "react";
import { IMenuProps } from "../../types";

const ModalContainer = ({
  isOpen,
  onClose,
  children,
}: IMenuProps & { children: React.ReactNode }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        top="10%"
        display="flex"
        bg="transparent"
        minW="100vw"
        h="calc(100vh-97px)"
        justifyContent={"center"}
        alignItems="center"
      >
        {children}
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
