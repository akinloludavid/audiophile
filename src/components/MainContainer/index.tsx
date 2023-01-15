import { BoxProps, Flex } from "@chakra-ui/react";

interface IMainContainer extends BoxProps {
  children: React.ReactNode;
}
const MainContainer = ({ children, ...rest }: IMainContainer) => {
  return (
    <Flex
      w="100%"
      maxW={"1440px"}
      mx="auto"
      px={["24px", "40px", "40px", "80px", "165px"]}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default MainContainer;
