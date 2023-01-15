import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import AudioPhileInfo from "../../components/AudioFileInfo";
import GoBack from "../../components/GoBack";
import MainContainer from "../../components/MainContainer";
import {
  productSelector,
  setProductIdSelector,
  useZustStore,
} from "../../zust/store";
import CategorySection from "../Home/CategorySection";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const setProductId = useZustStore(setProductIdSelector);
  const product = useZustStore(productSelector);
  setProductId(id);
  console.log(product);
  return (
    <>
      <MainContainer flexDir={"column"} mt={["79px"]}>
        <GoBack />

        <Grid
          mt="56px"
          templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)"]}
          gap={["40px", "40px", "125px"]}
        >
          <GridItem
            bgColor="#F1F1F1"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              w={["100%", "281px", "281px", "540px"]}
              h="560px"
              src={product.image.desktop}
              alt={product.name}
            />
          </GridItem>
          <GridItem
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            maxW="445px"
          >
            <Box my="auto">
              <Text
                fontSize={"14px"}
                fontWeight="400"
                letterSpacing={"10px"}
                opacity="1"
                color="#D87D4A"
                mb="16px"
                display={product.new ? "block" : "none"}
              >
                NEW PRODUCT
              </Text>
              <Heading variant={"h2"} as="h2" color="secColor" mb="32px">
                {product.name}
              </Heading>
              <Text mb="32px">{product.description}</Text>
              <Heading as="h6" variant={"h6"}>
                ${product.price}
              </Heading>

              <Flex flexDirection={"row"} align="center" mt="47px" gap="16px">
                <Grid
                  templateColumns="repeat(8,1fr)"
                  w="120px"
                  h="48px"
                  alignItems={"center"}
                  bgColor="#F1F1F1"
                >
                  <GridItem colSpan={3}>
                    <Heading
                      opacity="0.25"
                      variant="h6"
                      as="h6"
                      textAlign={"center"}
                      cursor="pointer"
                    >
                      -
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Heading variant="h6" as="h6" textAlign={"center"}>
                      1
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Heading
                      opacity="0.25"
                      variant="h6"
                      as="h6"
                      textAlign={"center"}
                      cursor="pointer"
                    >
                      +
                    </Heading>
                  </GridItem>
                </Grid>
                <Button>ADD TO CART</Button>
              </Flex>
            </Box>
          </GridItem>
        </Grid>

        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
          ]}
          mt="160px"
          mb="160px"
          gap={["88px", "88px", "125px"]}
        >
          <GridItem>
            <Heading as="h3" variant="h3" mb="32px">
              FEATURES
            </Heading>
            {product.features.split("\n").map((el: any) => (
              <Text mb="40px" key={nanoid()}>
                {el}
              </Text>
            ))}
          </GridItem>
          <GridItem
            display={["flex"]}
            w={["100%"]}
            flexDirection={["column", "column", "row", "column"]}
            justifyContent={["space-between"]}
          >
            <Heading as="h3" variant="h3" mb="32px">
              IN THE BOX
            </Heading>
            <Box>
              {product["includes"].map((product: any) => (
                <Grid
                  templateColumns={"repeat(10,1fr)"}
                  key={nanoid()}
                  gap="24px"
                  mb="8px"
                >
                  <GridItem w="18px" colSpan={1}>
                    <Text color="pryColor" fontWeight={"700"} opacity={1}>
                      {product.quantity}x
                    </Text>
                  </GridItem>
                  <GridItem colSpan={9}>
                    <Text>{product.item}</Text>
                  </GridItem>
                </Grid>
              ))}
            </Box>
          </GridItem>
        </Grid>

        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",

            "repeat(8, 1fr)",
          ]}
          mb="160px"
          gap={["18px", "25px", "25px", "75px"]}
        >
          <GridItem colSpan={[1, 1, 1, 3]}>
            <Grid
              templateColumns={"repeat(1,1fr)"}
              gap={["18px", "25px", "25px", "75px"]}
            >
              <GridItem>
                <Image
                  borderRadius={"8px"}
                  h={["174px", "174px", "280px", "280px"]}
                  alt={product.name}
                  src={product.gallery.first.desktop}
                />
              </GridItem>
              <GridItem>
                <Image
                  borderRadius={"8px"}
                  h={["174px", "174px", "280px", "280px"]}
                  alt={product.name}
                  src={product.gallery.first.desktop}
                />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            colSpan={[1, 1, 1, 5]}
            h={["580px", "580px", "580px", "635px"]}
          >
            <Grid h={["756px", "580px", "580px", "635px"]}>
              <Image
                h="100%"
                borderRadius={"8px"}
                alt={product.name}
                src={product.gallery.first.desktop}
              />
            </Grid>
          </GridItem>
        </Grid>

        <Box mb="200px">
          <Heading
            variant="h3"
            as="h3"
            mb="64px"
            textAlign={"center"}
            fontSize={["24px", "32px"]}
            color="secColor"
          >
            YOU MAY ALSO LIKE
          </Heading>

          <Flex
            justify={"space-between"}
            flexDirection={["column", "column", "row"]}
            gap={["56px", "56px", null]}
          >
            {product.others.map((el: any) => (
              <Box textAlign={"center"} key={el.slug}>
                <Box
                  borderRadius={"8px"}
                  bgColor="#F1F1F1"
                  h="318px"
                  w={["100%", "100%", "223px", "350px"]}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image src={el.image.desktop} alt={el.name} />
                </Box>
                <Heading variant="h5" as="h5" mb="47px" mt="40px">
                  {el.name}
                </Heading>
                <Button onClick={() => navigate(`/product/${el.slug}`)}>
                  SEE PRODUCT
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>

        <CategorySection />
        <AudioPhileInfo />
      </MainContainer>
    </>
  );
};

export default ProductDetails;
