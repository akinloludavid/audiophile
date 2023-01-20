import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { MutableRefObject, SyntheticEvent, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CHECKOUT } from "../../routes/pathnames";
import { ICartSection } from "../../types";
import { shortenProductName } from "../../utils/helper";
import { useZustStore } from "../../zust/store";
import MainContainer from "../MainContainer";

const CartSection = ({ setShowCart }: ICartSection) => {
  const navigate = useNavigate();
  const boxRef: any = useRef<MutableRefObject<HTMLDivElement | null>>(null);
  useEffect(() => {
    boxRef.current?.focus();
  }, []);
  const {
    cart,
    removeFromCart,
    increaseProductInCart,
    decreaseProductInCart,
    emptyCart,
  } = useZustStore((state) => state);
  const totalAmount = cart.reduce(
    (acc, curr: any) => acc + curr.price * curr.quantity,
    0
  );
  const handleRemoveProduct = (product: any) => {
    removeFromCart(product);
  };
  const increaseProductQty = (product: any) => {
    increaseProductInCart(product);
  };
  const decreaseProductQty = (product: any) => {
    decreaseProductInCart(product);
  };
  const handleEmptyCart = () => {
    emptyCart();
  };
  const handleBlur = (e: SyntheticEvent) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowCart(false);
      }
    }, 0);
  };
  const handleCheckout = () => {
    navigate(CHECKOUT);
    setShowCart(false);
  };
  return (
    <MainContainer
      position="fixed"
      zIndex="999999"
      bgColor="rgb(0,0,0,0.4)"
      h="100vh"
      w="100vw"
      pt={"128px"}
      flexDir={["row"]}
      justifyContent={["flex-end"]}
    >
      <Box
        w="377px"
        h={cart.length === 0 ? "280px" : "488px"}
        overflowY={"scroll"}
        bgColor="white"
        right="0"
        top="0"
        display="flex"
        flexDirection={"column"}
        borderRadius="8px"
        outline={"none"}
        p="32px"
        ref={boxRef}
        tabIndex={1}
        onBlur={handleBlur}
        position="relative"
      >
        <Flex justify="space-between" align="center">
          <Heading color="secColor" as="h5" fontSize={"18px"} fontWeight="700">
            CART ({cart.length})
          </Heading>
          <Button
            variant="link"
            w="fit-content"
            _hover={{
              textDecoration: "underline",
              color: "pryColor",
              opacity: 1,
            }}
            onClick={handleEmptyCart}
          >
            Remove all
          </Button>
        </Flex>
        <Box>
          {cart.length === 0 && (
            <Flex justify={"center"}>
              <Text>No items in cart.</Text>
            </Flex>
          )}
          {cart.map((item: any) => (
            <Flex
              align="center"
              justify={"space-between"}
              key={nanoid()}
              mb="24px"
            >
              <Box>
                <Flex gap={["16px"]} align="center">
                  <Box
                    w={["64px"]}
                    h={["64px"]}
                    borderRadius={"8px"}
                    bgColor="#F1F1F1"
                    // p="12px"
                  >
                    <Image src={item.image.desktop} />
                  </Box>
                  <Box>
                    <Text color="secColor" opacity={1}>
                      {shortenProductName(item.name)}
                    </Text>
                    <Text textAlign="left">
                      $ {item.price.toLocaleString()}
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Flex align={"center"} gap="4px">
                <Grid
                  templateColumns="repeat(8,1fr)"
                  w={["70px", "80px", "120px"]}
                  h="32px"
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
                      onClick={() => decreaseProductQty(item)}
                      _hover={{
                        color: "pryColor",
                        opacity: 1,
                      }}
                    >
                      -
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Heading
                      variant="h6"
                      as="h6"
                      fontSize={["14px", "14px", "18px"]}
                      textAlign={"center"}
                    >
                      {item.quantity}
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Heading
                      opacity="0.25"
                      variant="h6"
                      as="h6"
                      textAlign={"center"}
                      cursor="pointer"
                      onClick={() => increaseProductQty(item)}
                      _hover={{
                        color: "pryColor",
                        opacity: 1,
                      }}
                    >
                      +
                    </Heading>
                  </GridItem>
                </Grid>
                <Icon
                  as={FaTimes}
                  color="secColor"
                  opacity={"0.6"}
                  onClick={() => handleRemoveProduct(item)}
                />
              </Flex>
            </Flex>
          ))}
        </Box>
        <Flex align={"center"} justify="space-between" mb="24px">
          <Text>TOTAL</Text>
          <Text color="secColor" opacity={1}>
            $ {totalAmount.toLocaleString()}
          </Text>
        </Flex>
        <Button
          minW="100%"
          mt="auto"
          minH="48px"
          isDisabled={cart.length === 0}
          _disabled={{
            bgColor: "#F1F1F1",
            color: "gray",
            cursor: "not-allowed",
          }}
          _hover={
            cart.length === 0
              ? {}
              : {
                  opacity: 0.5,
                }
          }
          onClick={handleCheckout}
        >
          CHECKOUT
        </Button>
      </Box>
    </MainContainer>
  );
};

export default CartSection;
