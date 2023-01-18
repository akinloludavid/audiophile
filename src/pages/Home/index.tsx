import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { EarphoneImage, SpeakerBg, Zx9Speaker } from "../../asset";
import AudioPhileInfo from "../../components/AudioFileInfo";
import MainContainer from "../../components/MainContainer";
import CategorySection from "./CategorySection";
import { HeroSection } from "./HeroSection";
import db from "../../data.json";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const zx9speaker = db.filter((item) => item.name === `ZX9 Speaker`)[0];
  const zx7speaker = db.filter((item) => item.name === `ZX7 Speaker`)[0];
  const yx1earphones = db.filter(
    (item) => item.name === `YX1 Wireless Earphones`
  )[0];

  const navigate = useNavigate();
  return (
    <>
      <MainContainer flexDir={"column"} bgColor="secColor">
        <HeroSection />
      </MainContainer>
      <MainContainer flexDir={"column"}>
        <Box mt={["200px"]} mb={["168px"]}>
          <CategorySection />
        </Box>
        <Box>
          <Flex
            borderRadius={"8px"}
            bgColor="pryColor"
            pl={["0px", "40px", "70px", "70px", "118px"]}
            pt={["52px", "52px", "52px", "96px"]}
            pb={["64px", "64px", "64px", "0px"]}
            pr={["0px", "40px", "70px", "70px", "85px"]}
            gap={["64px", "64px", "64px", "64px", "120px"]}
            flexDirection={["column", "column", "column", "row"]}
            h={["auto", "auto", "auto", "600px"]}
          >
            <Box overflowY={"clip"}>
              <Image
                src={Zx9Speaker}
                alt="speaker"
                mx={["auto", "auto", "auto", 0]}
                h={["240px", "240px", "240px", "600px"]}
              />
            </Box>
            <Box
              mt={["0px", "0px", "0px", "40px"]}
              // maxW={["350px"]}
              w={["100%", "100%", "100%", "50%"]}
              mx={["auto", "auto", 0]}
              display={"flex"}
              flexDirection={["column", "column", "column"]}
              alignItems={["center", "center", "center", "flex-start"]}
            >
              <Heading
                as="h1"
                variant={["h1"]}
                fontSize={["36px", "52px"]}
                color={["white", "white", "white"]}
                textAlign={["center", "center", "center", "left"]}
              >
                {zx9speaker.name.toUpperCase()}
              </Heading>
              <Text
                variant={"body"}
                mt="24px"
                color={"#ffffff"}
                opacity="0.75"
                mb="40px"
                maxW="350px"
                textAlign={["center", "center", "center", "left"]}
              >
                {zx9speaker.description}
              </Text>
              <Button
                bgColor={"secColor"}
                _hover={{
                  opacity: 0.5,
                }}
                variant={"primary"}
                onClick={() => navigate(`/product/${zx9speaker.slug}`)}
              >
                SEE PRODUCT
              </Button>
            </Box>
          </Flex>
        </Box>
        <Flex
          mt="48px"
          bgImage={`url(${SpeakerBg})`}
          bgRepeat="no-repeat"
          bgSize={"cover"}
          h="400px"
          bgPos="center"
          borderRadius="8px"
          pl={["24px", "40px", "70px", "70px", "100px"]}
          // py="120px"
          align="center"
        >
          <Box>
            <Heading mb="36px" variant={"h4"} as="h4">
              {zx7speaker.name}
            </Heading>
            <Button
              variant="secondary"
              onClick={() => navigate(`/product/${zx7speaker.slug}`)}
            >
              SEE PRODUCT
            </Button>
          </Box>
        </Flex>
        <Flex
          mt="48px"
          flexDirection={["column", "column", "row", "row"]}
          justify={"space-between"}
          gap="30px"
        >
          <Box w={["100%", "100%", "100%", "50%"]}>
            <Image
              borderRadius={"8px"}
              w={["100%", "100%", "540px"]}
              h={["200px", "320px", "320px"]}
              src={EarphoneImage}
              alt="ear phones"
            />
          </Box>
          <Box
            w={["100%", "100%", "100%", "50%"]}
            py={"101px"}
            pl={["41px", "41px", "41px", "95px"]}
            bgColor={"#F1F1F1"}
            borderRadius={"8px"}
          >
            <Heading variant={"h4"} as="h4" mb="32px">
              {yx1earphones.name}
            </Heading>
            <Button
              variant={"secondary"}
              onClick={() => navigate(`/product/${yx1earphones.slug}`)}
            >
              SEE PRODUCT
            </Button>
          </Box>
        </Flex>
        <AudioPhileInfo />
      </MainContainer>
    </>
  );
};

export default HomePage;
