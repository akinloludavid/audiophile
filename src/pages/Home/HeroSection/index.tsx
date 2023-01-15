import { Flex, Heading, Button, Box, Text, Image } from "@chakra-ui/react";
import { HeroImg } from "../../../assets";

export const HeroSection = () => {
  return (
    <Flex
      align={"center"}
      justify="space-between"
      bgImage={[`url(${HeroImg})`, `url(${HeroImg})`, "none"]}
      bgSize={["cover"]}
      bgRepeat="no-repeat"
      bgPos={"center"}
      w="100%"
      h={["80vh"]}
      overflowY="clip"
    >
      <Box
        w={["100%", "100%", "100%", "50%", "auto"]}
        maxW={[null, null, "400px"]}
      >
        <Text
          fontSize={"14px"}
          color="#ffffff"
          opacity={"0.5"}
          fontWeight="400"
          lineHeight={"19px"}
          letterSpacing="10px"
          as="p"
          textAlign={["center", "center", "left"]}
        >
          NEW PRODUCT
        </Text>
        <Heading
          textAlign={["center", "center", "left"]}
          variant={"h1"}
          fontSize={["36px", "56px"]}
          as="h1"
          color="white"
          my="24px"
        >
          XX99 Mark II Headphones
        </Heading>
        <Text
          textAlign={["center", "center", "center", "left"]}
          variant={"body"}
          color="white"
          opacity={"0.75"}
          mx={["auto", "auto", 0]}
          maxW={["360px", "360px", "360px", null]}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Text>
        <Flex justify={["center", "center", "flex-start"]}>
          <Button mt="40px">SEE PRODUCT</Button>
        </Flex>
      </Box>
      <Box
        h={["600px", "500px", "500px", "500px", "700px"]}
        mt={["-30px"]}
        w={["50%", "auto"]}
        mb="50px"
        zIndex={"2"}
        display={["none", "none", "flex", "flex"]}
      >
        <Image h="100%" w="100%" src={HeroImg} alt="hero img looks nice" />
      </Box>
    </Flex>
  );
};

export const HeroSectionTablet = () => {};
