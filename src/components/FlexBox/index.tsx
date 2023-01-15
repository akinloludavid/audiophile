import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IFlexBox {
  rightPos?: boolean;
  image: any;
  name: string;
  new: boolean;
  price?: string | number;
  slug?: string;
  id?: number;
  description: string;
  feature?: string;
  category: string;
  mb: string | string[];
}
const FlexBox = ({
  rightPos,
  image,
  name,
  new: isNew,
  id,
  description,
  category,
  mb = "160px",
}: IFlexBox) => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection={[
        "column",
        "column",
        "column",
        rightPos ? "row-reverse" : "row",
      ]}
      gap={["52px", "52px", "52px", "160px"]}
      mb={mb}

      // h="560px"
    >
      <Box
        bgColor={"#F1F1F1"}
        borderRadius="8px"
        h={["350px", "350px", "420px", "auto"]}
      >
        <Image h="100%" mx={["auto"]} src={image.desktop} alt={name} />
      </Box>
      <Box
        maxW="445px"
        display={"flex"}
        flexDir="column"
        justifyContent={"center"}
        mx={["auto", "auto", "auto", "0"]}
      >
        <Text
          fontSize={"14px"}
          fontWeight="400"
          letterSpacing={"10px"}
          opacity="1"
          textAlign={["center", "center", "center", "left"]}
          color="#D87D4A"
          mb="16px"
          display={isNew ? "block" : "none"}
        >
          NEW PRODUCT
        </Text>
        <Heading
          variant="h2"
          as="h2"
          mb="32px"
          textAlign={["center", "center", "center", "left"]}
        >
          {name}
        </Heading>
        <Text
          variant={"body"}
          mb="40px"
          textAlign={["center", "center", "center", "left"]}
        >
          {description}
        </Text>
        <Button
          mx={["auto", "auto", "auto", "0"]}
          onClick={() => navigate(`/product/${id}`)}
        >
          SEE PRODUCT
        </Button>
      </Box>
    </Flex>
  );
};

export default FlexBox;
