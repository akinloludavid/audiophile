import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Link as Clink,
  Icon,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiFacebookBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Logo } from "../../assets";
import MainContainer from "../MainContainer";
import { navLinks } from "../Navbar";

const Footer = () => {
  return (
    <Box>
      <MainContainer flexDirection={"column"} bgColor={"secColor"} pb="48px">
        <Box
          mx={["auto", 0]}
          h="4px"
          w="101px"
          bgColor={"pryColor"}
          mb="72px"
        ></Box>
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
        >
          <GridItem colSpan={1}>
            <Image
              mx={["auto", "0", 0]}
              src={Logo}
              alt="audio phile logo"
              mb={["48px", "36px"]}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Flex
              gap={["16px", "34px"]}
              w="100%"
              flexDirection={["column", "row", "row", "row"]}
              justify={["center", "flex-start", "flex-start", "flex-end"]}
            >
              {navLinks.map((el) => (
                <Clink
                  key={el.route}
                  as={Link}
                  color="white"
                  fontSize={"13px"}
                  fontWeight="700"
                  lineHeight={"25px"}
                  cursor="pointer"
                  _hover={{
                    textDecoration: "none",
                  }}
                  textAlign={["center", "center", "left"]}
                  textDecoration={"none"}
                  to={el.route}
                >
                  {el.label}
                </Clink>
              ))}
            </Flex>
          </GridItem>
          <GridItem mt={["48px", "32px", 0]}>
            <Text
              color="white"
              opacity={"0.5"}
              textAlign={["center", "left", "left"]}
            >
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </Text>
          </GridItem>
          <GridItem
            display={["none", "none", "flex"]}
            justifyContent="flex-end"
            alignItems={"flex-end"}
            gap="16px"
            paddingBottom="0px"
          >
            <Icon as={RiFacebookBoxFill} color="white" fontSize={"24px"} />
            <Icon as={RiTwitterFill} color="white" fontSize={"24px"} />
            <Icon as={RiInstagramLine} color="white" fontSize={"24px"} />
          </GridItem>
          <GridItem
            mt={["48px", "56px"]}
            display={"flex"}
            flexDirection={["column", "row", "row"]}
            colSpan={1}
            gap={["48px", "48px", null]}
          >
            <Text
              variant={"body"}
              textAlign={["center", "left", "left"]}
              color="white"
              w={["100%", "100%", "100%", "50%"]}
            >
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </Text>
            <Flex
              display={["flex", "flex", "none"]}
              justifyContent={["center", "flex-end", "flex-end"]}
              alignItems={"center"}
              gap="16px"
              w={["100%", "100%", "50%"]}
            >
              <Icon as={RiFacebookBoxFill} color="white" fontSize={"24px"} />
              <Icon as={RiTwitterFill} color="white" fontSize={"24px"} />
              <Icon as={RiInstagramLine} color="white" fontSize={"24px"} />
            </Flex>
          </GridItem>
        </Grid>
      </MainContainer>
    </Box>
  );
};

export default Footer;
