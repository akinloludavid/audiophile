import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex bgColor={"secColor"} justify="center" align={"center"} py="98px">
      <Heading variant={["h2"]} fontSize={["28px", "40px"]} color="white">
        {title.toUpperCase()}
      </Heading>
    </Flex>
  );
};

export default Header;
