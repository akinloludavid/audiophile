import { BoxProps, Flex } from "@chakra-ui/react";

interface IMainContainer extends BoxProps {
  children: React.ReactNode;
}
const MainContainer = ({ children, ...rest }: IMainContainer) => {
  return (
    <Flex
      w="100%"
      flexDirection={"column"}
      sx={{
      "@media screen and (min-width: 1566px)": {
          maxW:'1600px'
        }
      }}
      mx="auto"
      px={["24px", "40px", "40px", "80px", "165px"]}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default MainContainer;
