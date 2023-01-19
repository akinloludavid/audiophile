import React from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { ICategoryCard } from "../../types";
import { useNavigate } from "react-router-dom";
import Caret from "../Caret";

const CategoryCard = ({ image, title, route }: ICategoryCard) => {
  const navigate = useNavigate();
  return (
    <Box
      position={"relative"}
      borderRadius={"8px"}
      bgColor="#F1F1F1"
      w={"100%"}
      display="flex"
      flexDir={"column"}
      alignItems={"center"}
      pt="0px"
      pb="20px"
      h={["165px", "165px", "165px", "204px"]}
    >
      <Image
        h={["160px", "160px", "140px", "140px", "200px"]}
        src={image}
        alt={title}
        mt={["-80px", "-80px", "-60px", "-80px"]}
      />
      <Heading variant={"h6"} as="h6" mb="15px">
        {title}
      </Heading>
      <Button
        variant={"link"}
        rightIcon={<Caret />}
        bgColor="transparent"
        onClick={() => navigate(route.toLowerCase())}
      >
        SHOP
      </Button>
    </Box>
  );
};

export default CategoryCard;
