import { Heading } from "@chakra-ui/react";
import React from "react";
import MainContainer from "../MainContainer";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <MainContainer bgColor={'secColor'} display='flex'justifyContent='center' alignItems='center' py="98px">
      <Heading variant={["h2"]} fontSize={["28px", "40px"]} color="white">
        {title.toUpperCase()}
      </Heading>
    </MainContainer>
  );
};

export default Header;
