import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import useCustomMediaQuery from "../customHooks/mediaQuery";
import CategorySection from "../pages/Home/CategorySection";
import { IMenuProps } from "../types";
function MenuSection({ isOpen, onClose }: IMenuProps) {
  const { isTablet } = useCustomMediaQuery();
  useEffect(() => {
    onClose();
  }, [window.location.pathname]);
  return (
    <>
      <Modal isOpen={isTablet && isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW={"100vw"}
          px="40px"
          pt={["112px"]}
          pb={["67px"]}
          mt="auto"
          position="absolute"
          top={["10%"]}
          w={["100vw"]}
          bgColor=""
        >
          <CategorySection />
        </ModalContent>
      </Modal>
    </>
  );
}
export default MenuSection;
