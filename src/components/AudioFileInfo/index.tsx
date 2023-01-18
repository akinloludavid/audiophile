import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { BestGear, BestGearMobile, BestGearTablet } from "../../asset";
import useCustomMediaQuery from "../../customHooks/mediaQuery";

const AudioPhileInfo = () => {
  const { isTablet, isMobile } = useCustomMediaQuery();
  return (
    <Grid
      templateColumns={[
        "repeat(1,1fr)",
        "repeat(1,1fr)",
        "repeat(2,1fr)",
        "repeat(2,1fr)",
      ]}
      gap={["63px", "63px", "63px", "125px"]}
      my={["160px"]}
    >
      <GridItem display={"flex"} flexDirection="column" colSpan={1}>
        <Box my="auto" mx="auto">
          <Heading
            textAlign={["center", "center", "left"]}
            variant={["h2"]}
            fontSize={["28px", "40px"]}
            as="h2"
            textTransform={"uppercase"}
            mb="32px"
          >
            Bringing you the{" "}
            <Heading
              as="span"
              color={["pryColor"]}
              fontSize={["28px", "40px"]}
              variant={["h2"]}
            >
              best
            </Heading>{" "}
            audio gear
          </Heading>
          <Text
            variant={"body"}
            opacity="0.5"
            maxW={"445px"}
            mx={["auto", "auto", "auto", "0px"]}
            textAlign={["center", "center", "left"]}
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1} colStart={[null, null, 2]} rowStart={[1, 1, null]}>
        <Image
          w={["100%"]}
          objectFit="cover"
          h={["300px", "300px", "300px", "auto"]}
          borderRadius={"8px"}
          src={isTablet ? BestGearTablet : isMobile ? BestGearMobile : BestGear}
          alt="best gear"
        />
      </GridItem>
    </Grid>
  );
};

export default AudioPhileInfo;
